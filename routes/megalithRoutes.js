const express = require("express");
const router = express.Router();
const {
  getMegaliths,
  getMegalithById,
  updateMegalith,
  deleteMegalith,
  createMegalith,
} = require("../controllers/megalithController");
router.get("/map", getMegalithsForMap);
router.get("/", getMegaliths);
router.get("/:id", getMegalithById);
router.put("/:id", updateMegalith);
router.delete("/:id", deleteMegalith);
router.post("/", createMegalith);

module.exports = router;
