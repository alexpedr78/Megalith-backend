const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const megalithRoutes = require("./routes/megalithRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
// const commentRoutes = require("./routes/commentRoutes");
// const favoriteRoutes = require("./routes/favor");
connectDB(); // Connect to MongoDB

const app = express();

const allowedOrigins = [
  "https://megalith.netlify.app", // Production URL
  "http://localhost:5173", // Development URL
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/megalith", megalithRoutes);

// Routes
app.use("/api/favorite", favoriteRoutes);
app.get("/", (req, res) => {
  res.send("Hello from the megalith!");
});

module.exports = app;
