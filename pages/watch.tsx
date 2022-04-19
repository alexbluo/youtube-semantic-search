import type {
  GetServerSideProps,
  NextPage,
} from "next";
import { spawn } from "child_process";
import axios from "axios";
import { useRouter } from "next/router";
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const process = spawn("python", ["./scripts/transcript.py", context.query.v]); // ??? NICE ERROR MESSAGE

  process.stdout.on("data", (data) => {
    // !hours wasted: 3.5
    // i just want to convert a buffer to an array of objects...
    // potential solutions:
    // dont have data converted to buffer from python
    // find alternate way to convert buffer to string/json
    // the one below that actually doesnt work
    const test = /**JSON.parse*/ data.toString(); //.replace(/'/g, "\""); // regular apostrophe is foiling the entire plan
    // console.log(test.substring(524, 530))
    const json = eval(test); 
    console.log(json);
    // console.log(data.toString());
  });

  return {
    props: {
      // transcript,
    },
  };
};

export default Watch;
