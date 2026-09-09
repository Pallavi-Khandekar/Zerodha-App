const holdings = [
  ["BHARTIARTL", 2, 538.05, 541.15, "+0.58%", "+2.99%", false],
  ["HDFCBANK", 2, 1383.4, 1522.35, "+10.04%", "+0.11%", false],
  ["HINDUNILVR", 1, 2335.85, 2417.4, "+3.49%", "+0.21%", false],
  ["INFY", 1, 1350.5, 1555.45, "+15.18%", "-1.60%", true],
  ["ITC", 5, 202, 207.9, "+2.92%", "+0.80%", false],
  ["KPITTECH", 5, 250.3, 266.45, "+6.45%", "+3.54%", false],
  ["M&M", 2, 809.9, 779.8, "-3.72%", "-0.01%", true],
  ["RELIANCE", 1, 2193.7, 2112.4, "-3.71%", "+1.44%", false],
  ["SBIN", 4, 324.35, 430.2, "+32.63%", "-0.34%", true],
  ["SGBMAY29", 2, 4727, 4719, "-0.17%", "+0.15%", false],
  ["TATAPOWER", 5, 104.2, 124.15, "+19.15%", "-0.24%", true],
  ["TCS", 1, 3041.7, 3194.8, "+5.03%", "-0.25%", true],
  ["WIPRO", 4, 489.3, 577.75, "+18.08%", "+0.32%", false],
].map(([name, qty, avg, price, net, day, isLoss]) => ({
  name, qty, avg, price, net, day, isLoss,
}));

const positions = [
  ["EVEREADY", 2, 316.27, 312.35, "+0.58%", "-1.24%"],
  ["JUBLFOOD", 1, 3124.75, 3082.65, "+10.04%", "-1.35%"],
].map(([name, qty, avg, price, net, day]) => ({
  product: "CNC", name, qty, avg, price, net, day, isLoss: true,
}));

const watchlist = [
  ["INFY", 1555.45, "-1.60%", true],
  ["ONGC", 116.8, "-0.09%", true],
  ["TCS", 3194.8, "-0.25%", true],
  ["KPITTECH", 266.45, "3.54%", false],
  ["QUICKHEAL", 308.55, "-0.15%", true],
  ["WIPRO", 577.75, "0.32%", false],
  ["M&M", 779.8, "-0.01%", true],
  ["RELIANCE", 2112.4, "1.44%", false],
  ["HUL", 512.4, "1.04%", false],
].map(([name, price, percent, isDown]) => ({
  name, price, percent, isDown,
}));

module.exports = { holdings, positions, watchlist };
