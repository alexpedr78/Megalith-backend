// controllers/commentController.js
const Comment = require("../models/comment");
const Megalith = require("../models/megalith");

const createComment = async (req, res) => {
  try {
    const { megalithId, text } = req.body;
    const comment = await Comment.create({ text, megalith: megalithId });

    // Add comment to megalith's comments array
    await Megalith.findByIdAndUpdate(megalithId, {
      $push: { comments: comment._id },
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment", details: error });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ megalith: req.params.megalithId });
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve comments", details: error });
  }
};
module.exports = {
  createComment,
  getComments,
};
