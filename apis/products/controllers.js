// IMPORTING DATA - To use products data in controller functions
const products = require("../../data");

// Using data to create a variable data set that we can edit in controller functions
let productData = products;

// CREATES a product from a body using json format
const getCreateProduct = (req, res) => {
  const chickenProduct = {
    ...req.body,
    id: Math.floor(Math.random() * 1000),
  };
  productData.push(chickenProduct);
  res.status(201).json({ msg: "Product is created!", chickenProduct });
};

// Deletes a product in the list by filtering the data to not include a given id via url param
const getProductDeleteController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = productData.find(
    (product) => +product.id === +productId
  );
  if (foundProduct) {
    //   204 status for deletion
    productData = productData.filter((product) => +product.id !== +productId);
    res.status(204).end();
  } else {
    //  404 if it cant be found
    res.status(404).json({ msg: "product not found" });
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
const getProductsController = (req, res) => {
  res.json(productData);
};

module.exports = {
  getCreateProduct,
  getProductController,
  getProductsController,
  getProductDeleteController,
};
