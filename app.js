const express = require("express");
const { param } = require("express/lib/request");
const productsRouter = require("./apis/products/routes");
const connectDB = require("./database/database");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

// APP USE FOR ROUTERS
app.use("/api/products", productsRouter);

// LISTEN TO RUN BACKEND SERVER
app.listen(PORT, () => {
  console.log("Server is listening to port", PORT);
  connectDB();
});
