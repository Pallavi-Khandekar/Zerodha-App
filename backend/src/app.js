const cors = require("cors");
const express = require("express");

const orderRoutes = require("./routes/orderRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const authRoutes = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/", portfolioRoutes);
app.use("/", orderRoutes);
app.use("/", authRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
