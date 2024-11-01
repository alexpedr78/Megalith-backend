// routes/favoriteRoutes.js
const express = require("express");
const router = express.Router();
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");

router.post("/:id", addFavorite); // Add a megalith to favorites
router.get("/:megalithId", getFavorites); // Get all favorites for a specific megalith

module.exports = router;
