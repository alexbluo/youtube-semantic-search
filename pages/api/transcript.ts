import type { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const process = spawn("python", ["./scripts/transcript.py", "7d7-etf-wNI"]);

  process.stdout.on("data", (data) => {
    res.json(data);
  });

  process.stderr.on("data", (data) => {
    res.json(data);
  });
};

export default handler;