const jwt = require("jsonwebtoken");
const service = require("../services/user.service");

// login user
exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await service.getUserService(email, password);

    const token = jwt.sign(email, process.env.JWT);

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: result,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// register user
exports.createUser = async (req, res) => {
  try {
    const result = await service.createUserService(req.body);

    const token = jwt.sign(result.email, process.env.JWT);

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully!",
      data: result,
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User already exist",
      error: error.message,
    });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await service.updateUserService(email, req.body);
    res.status(200).json({
      status: "success",
      message: "Data is updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not Updated",
      error: error.message,
    });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await service.deleteUserService(email);
    res.status(200).json({
      status: "success",
      message: "success Data is deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not deleted",
      error: error.message,
    });
  }
};
