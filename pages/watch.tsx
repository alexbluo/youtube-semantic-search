import type { GetServerSideProps, NextPage } from "next";
import { spawn } from "child_process";
import fs from "fs";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { Configuration, OpenAIApi, OpenAIFile } from "openai";
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

interface TranscriptChunk {
  text: string;
  start: number;
  duration: number;
  score?: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const script = spawn("python", ["./scripts/transcript.py", context.query.v]); // ??? NICE ERROR MESSAGE
  let transcript: TranscriptChunk[] | undefined = undefined;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // console.log(ressy.data.id);
  script.stdout.on("data", async (data: TranscriptChunk[]) => {
    transcript = eval(data.toString());

    // ! temp.jsonl not in correct order, start with logging transcript but might not even matter at all
    // for (const { text, start, duration } of transcript) {
    //   const line = { text: text, metadata: `start: ${start}, duration: ${duration}`}
    //   fs.appendFile("temp.jsonl", JSON.stringify(line) + "\r\n", (err) => {
    //     if (err) console.log(err);
    //   });
    // }

    const {
      data: { id },
    } = await openai.createFile(fs.createReadStream("temp.jsonl"), "search");

    // fs.unlink("temp.jsonl", (err) => {
    //   if (err) console.error(err);
    // });

    const response = await openai.createSearch("babbage", {
      file: id,
      query: "language",
      return_metadata: true,
      max_rerank: 400,
    });

    await openai.deleteFile(id);

    console.log(response.data);
  });

  return {
    props: {
      // transcript,
    },
  };
};

export default Watch;
