const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error in connection DB: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
