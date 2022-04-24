import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const Test: NextPage = ({
  testytest,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{testytest}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: string = "hi"
  return { props: {testytest: data} };
};
export default Test;
