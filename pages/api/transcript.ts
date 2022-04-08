import type { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const process = spawn("python", ["./scripts/transcript.py"]);

  process.stdout.on("data", (data) => {
    console.log(data.toString("utf8"));
  });

  process.stderr.on("data", (data) => {
    console.log(data.toString("utf8"));
  });

  process.stderr.on("close", () => {
    console.log("Closed");
  });
  
  res.json({ captions: "hi" });
}
