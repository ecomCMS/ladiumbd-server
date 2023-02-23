const Products = require("../model/Products");

// get all products
exports.getAllProducts = async () => {
  const data = await Products.find({});
  return data;
};

// get single product
exports.getProductByIds = async (id) => {
  const data = await Products.where({ _id: id });
  return data;
};

// create single product
exports.createProducts = async (item) => {
  const data = await Products.create(item);
  return data;
};

// update single product
exports.updateProducts = async (id, item) => {
  const data = Products.updateOne({ _id: id }, item);
  return data;
};

// delete single product
exports.deleteProducts = async (id) => {
  const data = Products.deleteOne({ _id: id });
  return data;
};
