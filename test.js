const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");

// deletes files
(async () => {
  const configuration = new Configuration({
    apiKey: "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", // woah openai immediately replaced the key after pushing to github
  });
  const openai = new OpenAIApi(configuration);

  const files = (await openai.listFiles()).data.data;
  console.log(files);

  for (const { id } of files) {
    openai.deleteFile(id);
  }
})();
