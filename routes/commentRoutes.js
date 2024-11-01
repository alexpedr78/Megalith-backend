const express = require("express");
const router = express.Router();
const {
  createComment,
  getComments,
} = require("../controllers/commentController.js");

router.post("/commment/:id", createComment);
router.get("/:megalithId", getComments);

module.exports = router; // Ensure this is using module.exports
