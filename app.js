const express = require("express");
const { get } = require("express/lib/response");
const data = require("./data");

const app = express();

const PORT = 8000;

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server is listening!");
});
