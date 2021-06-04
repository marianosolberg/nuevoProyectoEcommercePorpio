require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const routes = require("./routes");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 8000;

connectDB();
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
