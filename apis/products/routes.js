const express = require("express");
const {
  getCreateProduct,
  getProductDeleteController,
  getProductController,
  getProductsController,
  getProductUpdate,
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
// UPDATE PRODUCT
productsRouter.put("/:productId", getProductUpdate);

module.exports = productsRouter;
