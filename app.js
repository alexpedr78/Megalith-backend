const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const megalithRoutes = require("./routes/megalithRoutes"); // Imported as default export
const favoriteRoutes = require("./routes/favoriteRoutes"); // Imported as default export
connectDB(); // Connect to MongoDB
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

// Use the routes as middleware functions
app.use("/api/megalith", megalithRoutes);
app.use("/api/favorite", favoriteRoutes); // Corrected path

app.get("/", (req, res) => {
  res.send("Hello from the megalith!");
});

module.exports = app;
