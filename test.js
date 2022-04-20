const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");

// deletes files
(async () => {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const files = (await openai.listFiles()).data.data;
  console.log(files);

  for (const { id } of files) {
    openai.deleteFile(id);
  }
})();
