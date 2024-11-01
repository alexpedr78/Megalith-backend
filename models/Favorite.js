// models/Favorite.js
const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  megalith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Megalith",
    required: true,
  },
  addedAt: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", favoriteSchema, "favorites");
module.exports = Favorite;
