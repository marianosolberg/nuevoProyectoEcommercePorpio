require("dotenv").config();
//esto lo ejecutamos desde el package.json con el npm run data
const products = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Data import successesfuly");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
importData();
