const express = require("express");

const router = express.Router();
const userController = require("../../controller/userController");
const productController = require("../../controller/productController");

router.get("/", productController.listView);
router.get("/login", userController.loginView);

module.exports = router;
