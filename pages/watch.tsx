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
      {/* {props.transcript} */}
    </div>
  );
};

type Transcript = Array<{
  text: string;
  start: number;
  duration: number;
  score?: number;
}>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const pyscript = spawn("python", [
    "./scripts/transcript.py",
    context.query.v,
  ]);

  const transcriptWithScores: Transcript = [];
  pyscript.stdout.on("data", async (data: Buffer) => {
    const transcript: Transcript = eval(data.toString());

    // 200 is the maximum number of documents allowed per query
    for (let i = 0; i < transcript.length; i += 200) {
      const slice = transcript.slice(0, 200);
      const documents = slice.map(({ text }) => text);

      const response = await openai.createSearch("babbage", {
        documents: documents,
        query: "language",
      });

      console.log(response.data.data)
      // transcriptWithScores.push(...response.data.data);
    }
  });

  return {
    props: {
      // transcript,
    },
  };
};

export default Watch;
