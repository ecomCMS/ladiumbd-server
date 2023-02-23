const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  brand: {
    type: String,
    required: [true, "Please enter product brand"],
    trim: true,
    maxLength: [100, "Product brand cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Product price cannot exceed 5 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  color: {
    type: String,
    required: [true, "Please enter product color type"],
  },
  size: {
    type: String,
    required: [true, "Please enter product size"],
  },
  images: {},
});

module.exports = mongoose.model("Product", productSchema);
