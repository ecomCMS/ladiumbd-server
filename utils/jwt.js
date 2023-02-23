require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.createToken = (user) => {
  jwt.verify(process.env.JWT_SECRET, "wrong secret", (err, decoded) => {
    // decoded email
  });
};
