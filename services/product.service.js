const Product = require("../model/product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.where();
  return products;
};
