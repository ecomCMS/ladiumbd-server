const {
  getAllProducts,
  createProducts,
  getProductByIds,
  updateProducts,
  deleteProducts,
} = require("../services/product.service");

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const results = await getAllProducts();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//get single product
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const results = await getProductByIds(id);
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//create single product
exports.createProduct = async (req, res) => {
  try {
    const results = await createProducts(req.body);
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//update single product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await updateProducts(id, req.body);
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

//delete single product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await deleteProducts(id);
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
