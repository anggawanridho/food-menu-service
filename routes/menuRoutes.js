const express = require("express");
const menuController = require("../controllers/menuController");

const router = express.Router();

router.get("/menu", menuController.getMenuItems);
router.post("/calculate-price", menuController.calculatePrice);

module.exports = router;
