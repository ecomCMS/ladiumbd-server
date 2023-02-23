const express = require("express");
const router = express.Router();

router.get("/", product.getAllProducts).post("/", product.createProduct);

router
  .get("/:id", product.getProductById)
  .put("/:id", product.updateProduct)
  .delete("/:id", product.deleteProduct);
