const mongoose = require("mongoose");

const { HoldingsModel } = require("../../model/HoldingsModel");
const { PositionsModel } = require("../../model/PositionsModel");
const { WatchlistModel } = require("../../model/WatchlistModel");

function getUserId(req, res) {
  const { userId } = req.query;

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: "A valid userId is required" });
    return null;
  }

  return userId;
}

async function getHoldings(req, res, next) {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const holdings = await HoldingsModel.find({ userId });
    res.json(holdings);
  } catch (error) {
    next(error);
  }
}

async function getPositions(req, res, next) {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const positions = await PositionsModel.find({ userId });
    res.json(positions);
  } catch (error) {
    next(error);
  }
}

async function getWatchlist(req, res, next) {
  try {
    const userId = getUserId(req, res);
    if (!userId) return;

    const watchlist = await WatchlistModel.find({ userId });
    res.json(watchlist);
  } catch (error) {
    next(error);
  }
}

module.exports = { getHoldings, getPositions, getWatchlist };
