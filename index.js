const express = require("express");
const { resolve } = require("path");
require("dotenv").config();

const app = express();
const port = 7584;

const config = {
  apiKey: process.env.API_KEY,

  serverSecret: process.env.SERVER_SECRET,

  isKalvian: process.env.IS_KALVIAN === "true",
};

console.log(config);

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

