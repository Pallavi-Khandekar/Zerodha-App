const mongoose = require("mongoose");

const { OrdersModel } = require("../../model/OrdersModel");
const { HoldingsModel } = require("../../model/HoldingsModel");

async function createOrder(req, res, next) {
  try {
    const { name, qty, price, mode, userId } = req.body;
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "A valid userId is required" });
    }

    const order = await OrdersModel.create({ name, qty, price, mode, userId });

    const holding = await HoldingsModel.findOne({ userId, name });
    const quantity = Number(qty);
    const orderPrice = Number(price);

    if (mode === "BUY") {
      if (holding) {
        const totalCost = holding.avg * holding.qty + orderPrice * quantity;
        holding.qty += quantity;
        holding.avg = totalCost / holding.qty;
        holding.price = orderPrice;
        await holding.save();
      } else {
        await HoldingsModel.create({
          userId,
          name,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
        });
      }
    } else if (mode === "SELL" && holding) {
      holding.qty = Math.max(0, holding.qty - quantity);
      holding.price = orderPrice;
      await holding.save();
    }

    res.status(201).json({
      message: "Order saved!",
      order,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createOrder };
