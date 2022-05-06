import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { spawnSync } from "child_process";
import { useRouter } from "next/router";
import { Configuration, OpenAIApi } from "openai";
import ReactPlayer from "react-player";
import zscore from "../helpers/zscores";
import { default as sample } from "../sampleData/scores";

type Transcript = Array<{
  text: string;
  start: number;
  duration: number;
  zscore?: number;
}>;

const Watch = ({
  transcript,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return (
    <div className="container p-5 w-100">
      <div className="d-flex gap-4">
        <div className="w-75">
          <div className="ratio ratio-16x9">
            <ReactPlayer
              url={`https://youtube.com/watch?v=${router.query.v}`}
              key={process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
        <ul className="w-25 list-group text-wrap">
          {transcript.map((obj, i) => (
            <li
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
              key={i}
            >
              <div>
                {obj.text}
                <br />
                {obj.zscore}
              </div>
              <span className="badge bg-primary rounded-pill">
                {obj.start.toFixed(2).replace(".", ":")}
              </span>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// TODO: keep transcript stuff, move zscores and openai to client side so different queries can be made?
export const getServerSideProps = async (context) => {
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // const pyscript = spawnSync("python", [
  //   "./scripts/transcript.py",
  //   context.query.v as string,
  // ]);

  // const transcript: Transcript = JSON.parse(pyscript.stdout.toString());

  // for (let i = 0; i < transcript.length; i += 200) {
  //   // 200 is the maximum number of documents allowed per query
  //   const slice = transcript.slice(i, i + 200);
  //   // extract the text property from slice
  //   const documents = slice.map(({ text }) => text);

  //   const {
  //     // shorthand for response.data.data
  //     data: { data },
  //   } = await openai.createSearch("babbage", {
  //     documents: documents,
  //     query: "language",
  //   });

  //   // calculate z scores and assign to each corresponding transcript section
  //   const zscores = zscore(data!.map(({ score }) => score!));
  //   zscores.forEach((zs, idx) => (transcript[idx + i].zscore = zs));
  // }

  // sample for dev
  const transcript: Transcript = sample;
  console.log(transcript);
  return {
    props: {
      transcript: transcript,
    },
  };
};

export default Watch;
