const express = require("express");
const { param } = require("express/lib/request");
const productsRouter = require("./apis/products/routes");

const app = express();

const PORT = 8000;

app.use(express.json());

// APP USE FOR ROUTERS
app.use("/api/products", productsRouter);

// LISTEN TO RUN BACKEND SERVER
app.listen(PORT, () => {
  console.log("Server is listening!");
});
