const express = require("express");
const router = express.Router();
const {
  getMegaliths,
  getMegalithById,
  updateMegalith,
  deleteMegalith,
  createMegalith,
} = require("../controllers/megalithController");

router.get("/", getMegaliths);
router.get("/:id", getMegalithById);
router.put("/:id", updateMegalith); // Update a megalith
router.delete("/:id", deleteMegalith); // Delete a megalith
router.post("/", createMegalith);

module.exports = router;
