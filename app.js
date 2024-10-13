const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const megalithRoutes = require("./routes/megalithRoutes");

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/megalith", megalithRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the megalith!");
});

module.exports = app;
