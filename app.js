const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const megalithRoutes = require("./routes/megalithRoutes");

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
const corsOptions = {
  origin: "https://megalith.netlify.app", // Your frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use("api/megalith", megalithRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the megalith!");
});

module.exports = app;
