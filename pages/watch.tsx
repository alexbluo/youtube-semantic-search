import type { GetServerSideProps, NextPage } from "next";
import { spawn } from "child_process";
import fs from "fs";
import axios from "axios";
import { useRouter } from "next/router";
import { Configuration, OpenAIApi } from "openai";
import ReactPlayer from "react-player";

const Watch: NextPage = (props) => {
  const router = useRouter();

  return (
    <div>
      <ReactPlayer
        url={`https://youtube.com/watch?v=${router.query.v}`}
        key={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}
      />
      {props.scores}
    </div>
  );
};

type Transcript = Array<{
  text: string;
  start: number;
  duration: number;
  zscore?: number;
}>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const scores: Transcript = [];

  const pyscript = spawn("python", [
    "./scripts/transcript.py",
    context.query.v as string,
  ]);

  pyscript.stdout.on("data", async (data: Buffer) => {
    const transcript: Transcript = eval(data.toString());

    // 200 is the maximum number of documents allowed per query
    for (let i = 0; i < transcript.length; i += 200) {
      const slice = transcript.slice(0, 200);
      const documents = slice.map(({ text }) => text);

      const {
        // shorthand for response.data.data
        data: { data },
      } = await openai.createSearch("babbage", {
        documents: documents,
        query: "language",
      });

      const zscores = zscore(data!.map(({ score }) => score!));
      slice.forEach((obj, i) => obj.zscore = zscores[i])
      scores.push(...slice)
    }

    console.log(scores);
  });

  return {
    props: {
      scores,
    },
  };
};

/**
 * calculate the z-score of each score by normaling with mean and standard deviation
 */
function zscore(scores: Array<number>) {
  const size = scores.length;
  const total = scores.reduce((acc, score) => acc + score, 0);
  const mean = total / size;

  const standardDeviation = Math.sqrt(
    scores.reduce((acc, score) => acc + Math.pow(score - mean, 2), 0) / size
  );

  const zscores = scores.map((score) => (score - mean) / standardDeviation);

  return zscores;
}

export default Watch;
