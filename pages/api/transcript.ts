import type { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const process = spawn("python", ["./scripts/transcript.py", /** req.query.v */]);

  process.stdout.on("data", (data) => {
    res.json(data);
  });

  process.stderr.on("data", (data) => {
    res.json(data);
  });
}
