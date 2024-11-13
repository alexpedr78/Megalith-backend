const express = require("express");
const router = express.Router();
const {
  createComment,
  getComments,
} = require("../controllers/commentController.js");

router.post("/commments", createComment);
router.get("/:megalithId", getComments);

module.exports = router;
