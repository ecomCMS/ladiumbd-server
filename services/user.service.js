const RegisterUser = require("../model/RegisterUser");

//get users
exports.getUserService = async (email, password) => {
  const data = await RegisterUser.where({ email, password });
  return data;
};

//create user
exports.createUserService = async (data) => {
  const result = await RegisterUser.create(data);
  return result;
};

//update user
exports.updateUserService = async (userEmail, userData) => {
  const data = await RegisterUser.updateOne(
    { email: userEmail },
    { $set: userData },
    { runValidators: true }
  );
  return data;
};

//delete user
exports.deleteUserService = async (userEmail) => {
  const data = await RegisterUser.deleteOne({ email: userEmail });
  return data;
};
