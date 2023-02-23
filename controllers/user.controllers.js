exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await service.getUserService(email, password);

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
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
