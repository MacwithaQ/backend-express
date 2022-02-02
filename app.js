const express = require("express");
const { param } = require("express/lib/request");
const products = require("./data");

let productData = products;

const app = express();

const PORT = 8000;

app.use(express.json());

app.post("/api/products", (req, res) => {
  const { name, slug, image, description, color, quantity, price } = req.body;
  const chickenProduct = {
    id: Math.floor(Math.random() * 1000),
    name,
    slug,
    image,
    description,
    color,
    quantity,
    price,
  };
  productData.push(chickenProduct);
  res.status(201).json({ msg: "Product is created!", chickenProduct });
  console.log(chickenProduct);
});

app.delete("/api/products/:productId", (req, res) => {
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
});

app.get("/api/products/:productId", (req, res) => {
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
});

app.get("/api/products", (req, res) => {
  res.json(productData);
});

app.listen(PORT, () => {
  console.log("Server is listening!");
});
