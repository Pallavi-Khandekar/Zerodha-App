const cors = require("cors");
const express = require("express");

const orderRoutes = require("./routes/orderRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const authRoutes = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
  : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Zerodha API", status: "ok" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "backend" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "backend" });
});

app.use("/", portfolioRoutes);
app.use("/", orderRoutes);
app.use("/", authRoutes);
app.use("/api", portfolioRoutes);
app.use("/api", orderRoutes);
app.use("/api", authRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
