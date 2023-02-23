const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();
const products = require("./routers/v1/products.router");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// database connection
dbConnect();

// routes
// products api
app.use("/api/v1/products", products);

// users api
/* app.use("/api/v1/users", usersRouter); */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
