import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createSearch("babbage", {
    documents: ["buhmbooo"],
    query: "buhmbo",
    return_metadata: true,
  });

  res.json(response.data);
};

export default handler;
