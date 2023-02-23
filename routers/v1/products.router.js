const express = require("express");
const product = require("../../controllers/products.controllers");
const router = express.Router();

router.route("/").get(product.getAllProducts).post(product.createProduct);

router
  .route("/:id")
  .get(product.getProductById)
  .patch(product.updateProduct)
  .delete(product.deleteProduct);

module.exports = router;
