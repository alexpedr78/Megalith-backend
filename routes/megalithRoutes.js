const express = require("express");
const router = express.Router();
const {
  getMegaliths,
  getMegalithById,
  updateMegalith,
  deleteMegalith,
  createMegalith,
  getMegalithsForMap,
} = require("../controllers/megalithController");
const {
  createComment,
  getComments,
} = require("../controllers/commentController");
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");

//megalith
router.get("/map", getMegalithsForMap);
router.get("/", getMegaliths);
router.get("/:id", getMegalithById);
router.put("/:id", updateMegalith);
router.delete("/:id", deleteMegalith);
router.post("/", createMegalith);
// comment

router.post("/comment", createComment); // Create a new comment for a megalith
router.get("/comment/:megalithId", getComments); // Get all comments for a specific megalith
// // favorite

// router.post("/favorite/:id", addFavorite); // Add a megalith to favorites
// router.get("/favorite/:megalithId", getFavorites); // Get all favorites for a specific megalith
module.exports = router;
