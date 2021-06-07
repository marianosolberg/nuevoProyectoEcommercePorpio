require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose connection Success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
//configuramos base de datos e importamos en el server

module.exports = connectDB;
