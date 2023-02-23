const mongoose = require("mongoose");

const userRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    maxLength: [100, "Name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    trim: true,
    minLength: [6, "Password must be at least 6 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
    trim: true,
    maxLength: [11, "Phone number cannot exceed 11 characters"],
  },
});

const Register = mongoose.model("RegisterUser", userRegisterSchema);
module.exports = Register;
