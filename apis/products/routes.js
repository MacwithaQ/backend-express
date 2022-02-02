const express = require("express");
const {
  getCreateProduct,
  getProductDeleteController,
  getProductController,
  getProductsController,
} = require("./controllers");

const productsRouter = express.Router();

// CREATE PRODUCT
productsRouter.post("/", getCreateProduct);
// DELETE PRODUCT
productsRouter.delete("/:productId", getProductDeleteController);
// GET INDIVIDUAL PRODUCT
productsRouter.get("/:productId", getProductController);
// GET ALL PRODUCTS
productsRouter.get("/", getProductsController);

module.exports = productsRouter;
