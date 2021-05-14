require("dotenv").config();
const express = require("express");
const app = express();

// app.use("/api", routes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
