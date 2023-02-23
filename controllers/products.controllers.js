const { getAllProducts } = require("../services/product.service");

exports.getAllProducts = async (req, res) => {
  try {
    const results = await getAllProducts();
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        results,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
