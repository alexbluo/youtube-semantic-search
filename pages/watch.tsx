import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

// interface Props {
//   transcript: {
//     text: string;
//     start: number;
//     duration: number;
//   };
// }

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
  // TODO: MOVE API ROUTE LOGIC HERE
  console.log(context.query.v);
  const transcript = await axios.get(`/api/transcript?v=${context.query.v}`);

  return {
    props: {
      transcript,
    },
  };
};

export default Watch;
