import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
}
