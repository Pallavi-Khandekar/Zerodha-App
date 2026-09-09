const mongoose = require("mongoose");

async function connectDatabase() {
  const databaseUrl = process.env.MONGO_URL;

  if (!databaseUrl) {
    throw new Error("MONGO_URL is not configured");
  }

  await mongoose.connect(databaseUrl);
  console.log("Database connected");
}

module.exports = connectDatabase;
