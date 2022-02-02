const products = require("../../data");

let productData = products;

const getCreateProduct = (req, res) => {
  const chickenProduct = {
    ...req.body,
    id: Math.floor(Math.random() * 1000),
  };
  productData.push(chickenProduct);
  res.status(201).json({ msg: "Product is created!", chickenProduct });
};

const getProductDeleteController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = productData.find(
    (product) => +product.id === +productId
  );
  if (foundProduct) {
    productData = productData.filter((product) => +product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "product not found" });
  }
};

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

const getProductsController = (req, res) => {
  res.json(productData);
};

module.exports = {
  getCreateProduct,
  getProductController,
  getProductsController,
  getProductDeleteController,
};
