const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");

//cuando entramos a /api/products tenemos todos los productos
//cuando entramos a /api/products/id tenemos el producto individual

router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
