// models/Comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  megalith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Megalith",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema, "comments");
module.exports = Comment;
