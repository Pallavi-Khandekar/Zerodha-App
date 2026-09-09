const express = require("express");

const {
  getHoldings,
  getPositions,
  getWatchlist,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/allHoldings", getHoldings);
router.get("/allPositions", getPositions);
router.get("/watchlist", getWatchlist);

module.exports = router;
