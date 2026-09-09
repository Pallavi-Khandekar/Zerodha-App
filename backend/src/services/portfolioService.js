const { HoldingsModel } = require("../../model/HoldingsModel");
const { PositionsModel } = require("../../model/PositionsModel");
const { WatchlistModel } = require("../../model/WatchlistModel");
const { holdings, positions, watchlist } = require("../data/defaultPortfolio");

async function ensureUserPortfolio(userId) {
  const holdingsCount = await HoldingsModel.countDocuments({ userId });

  if (holdingsCount > 0) {
    return;
  }

  await Promise.all([
    HoldingsModel.insertMany(holdings.map((item) => ({ ...item, userId }))),
    PositionsModel.insertMany(positions.map((item) => ({ ...item, userId }))),
    WatchlistModel.insertMany(watchlist.map((item) => ({ ...item, userId }))),
  ]);
}

module.exports = { ensureUserPortfolio };
