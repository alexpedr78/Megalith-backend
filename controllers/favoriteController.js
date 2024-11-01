// controllers/favoriteController.js
const Favorite = require("../models/Favorite");
const Megalith = require("../models/megalith");

exports.addFavorite = async (req, res) => {
  try {
    const { megalithId } = req.params.id;
    const favorite = await Favorite.create({ megalith: megalithId });

    // Add favorite to megalith's favorites array
    await Megalith.findByIdAndUpdate(megalithId, {
      $push: { favorites: favorite._id },
    });

    res.status(201).json(favorite);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add to favorites", details: error });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ megalith: req.params.megalithId });
    res.status(200).json(favorites);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve favorites", details: error });
  }
};
