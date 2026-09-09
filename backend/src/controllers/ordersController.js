const mongoose = require("mongoose");

const { OrdersModel } = require("../../model/OrdersModel");

async function getOrders(req, res, next) {
  try {
    const { userId } = req.query;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "A valid userId is required" });
    }

    const orders = await OrdersModel.find({ userId }).sort({ createdAt: -1 });
    return res.json(orders);
  } catch (error) {
    next(error);
  }
}

module.exports = { getOrders };
