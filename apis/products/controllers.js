// IMPORTING DATA - To use products data in controller functions
const products = require("../../data");
const { create } = require("../../database/models/Product");
const Product = require("../../database/models/Product");

// Using data to create a variable data set that we can edit in controller functions
let productData = products;

// CREATES a product from a body using json format
const getCreateProduct = async (req, res) => {
  try {
    const product = req.body;
    const createdProduct = await Product.create(product);
    res
      .status(201)
      .json({ msg: "Product is created!", payload: createdProduct });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Deletes a product in the list by filtering the data to not include a given id via url param
const getProductDeleteController = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete(productId);
    if (foundProduct) {
      //   204 status for deletion
      res.status(204).end();
    } else {
      //  404 if it cant be found
      res.status(404).json({ msg: "product not found" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// Gets individual product via ID input in url params
const getProductController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = productData.find(
    (product) => +product.id === +productId
  );
  if (foundProduct) {
    const product = productData.find(
      (someProduct) => +someProduct.id === +productId
    );
    res.json(product);
  } else {
    res.status(404).json({ msg: "product not found" });
  }
};

// Gets entire data list of products
const getProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getProductUpdate = async (req, res) => {
  const { productId } = req.params;
  const productupdate = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productupdate
    );
    res
      .status(200)
      .json({ msg: "Updated successfully", payload: updatedProduct });
  } catch (error) {
    res.status(400).json({ msg: error.msg });
  }
};

module.exports = {
  getCreateProduct,
  getProductController,
  getProductsController,
  getProductDeleteController,
  getProductUpdate,
};
