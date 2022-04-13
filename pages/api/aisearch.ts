import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // run multiple queries with promise.all and averaging?
  const response = await openai.createSearch("babbage", {
    documents: ["buhmbooo"],
    query: "buhmbo",
    return_metadata: true,
  });

  res.json(response.data);
}
