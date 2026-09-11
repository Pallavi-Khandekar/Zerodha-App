require("dotenv").config();

const app = require("./src/app");
const connectDatabase = require("./src/config/database");

const PORT = process.env.PORT || 3002;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend server listening on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Unable to start backend server:", error.message);
  process.exitCode = 1;
});
