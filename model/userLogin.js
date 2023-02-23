const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Login = mongoose.model("LoginUser", userLoginSchema);
module.exports = Login;
