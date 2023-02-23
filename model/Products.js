const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter quantity"],
    trim: true,
    maxLength: [100, "quantity cannot exceed 100 characters"],
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
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  images: {
    type: String,
    required: [true, "Please enter product image"],
  },
});

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
