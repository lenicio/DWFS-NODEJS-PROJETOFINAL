const express = require("express");

const router = express.Router();
const userController = require("../../../controller/userController");
const authenticateToken = require("../../../middleware/authenticateToken");

router.post("/auth", userController.login);
router.post("/", userController.create);
router.get("/", authenticateToken, userController.list);
router.get("/:id", authenticateToken, userController.getById);
router.put("/:id", authenticateToken, userController.update);
router.delete("/:id", authenticateToken, userController.delete);

module.exports = router;
