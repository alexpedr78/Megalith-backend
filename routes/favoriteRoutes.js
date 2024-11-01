// routes/favoriteRoutes.js
const express = require("express");
const router = express.Router();
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");

router.post("/:id", addFavorite);
router.get("/:megalithId", getFavorites);

module.exports = router; // Ensure this is using module.exports
