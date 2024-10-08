const mongoose = require("mongoose");

const megalithSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  position: {
    lat: { type: Number },
    long: { type: Number },
  },
  state: { type: String },
  village: { type: String },
});

const Megalith = mongoose.model("Megalith", megalithSchema, "megaliths");
module.exports = Megalith;
