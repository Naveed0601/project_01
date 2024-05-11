const mongoose = require("mongoose");
const URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB connection failed");
    process.exit(0);
  }
};
module.exports = connectDB;
