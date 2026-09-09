const express = require("express");

const { createOrder } = require("../controllers/orderController");
const { getOrders } = require("../controllers/ordersController");

const router = express.Router();

router.post("/newOrder", createOrder);
router.get("/orders", getOrders);

module.exports = router;
