const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.get("/search", productController.product);

module.exports = router;
