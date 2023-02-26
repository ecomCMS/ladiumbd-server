const User = require("../model/User");
const bcrypt = require("bcryptjs");

//get users
exports.getUserService = async (email, password) => {
  const data = await User.where({ email });
  const comperePassword = await bcrypt.compare(password, data[0].password);
  if (!comperePassword) throw new Error("wrong user credentials");
  return data;
};

//create user
exports.createUserService = async (data) => {
  let { name, email, password, phone } = data;

  password = bcrypt.hashSync(password);

  const result = await User.create({
    name,
    password,
    phone,
    email,
  });

  return result;
};

//update user
exports.updateUserService = async (userEmail, userData) => {
  const data = await User.updateOne(
    { email: userEmail },
    { $set: userData },
    { runValidators: true }
  );
  return data;
};

//delete user
exports.deleteUserService = async (userEmail) => {
  const data = await User.deleteOne({ email: userEmail });
  return data;
};
