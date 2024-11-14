require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const megalithRoutes = require("./routes/megalithRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const commentRoutes = require("./routes/commentRoutes");
connectDB();
const app = express();

const allowedOrigins = [
  "https://megalith.netlify.app",
  "http://localhost:5173",
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

app.use("/api/megalith", megalithRoutes);
app.use("/api/favorite", favoriteRoutes);
app.use("/api/comments", commentRoutes);

// test
app.get("/", (req, res) => {
  res.send("Hello from the megalith!");
});
app.get("/api/users", (req, res) => {
  res.send("User data");
});

module.exports = app;
