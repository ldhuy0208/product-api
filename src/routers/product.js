const express = require("express");
const Product = require("../models/product");

const router = new express.Router();

router.get("/products", (req, res) => {
  Product.find({}).then(products => {
    res.send(products);
  }).catch(err => {
    res.status(500).send(err);
  })
});

router.post("/products", (req, res) => {
  const allowedFields = ["name", "quantity"];
  const isValid = Object.keys(req.body).every((key) =>
    allowedFields.includes(key)
  );

  if (!isValid)
    return res.status(400).send({ message: "creation fields are invalid" });

  
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;