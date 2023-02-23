const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = dbConnect;
