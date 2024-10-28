const Megalith = require("../models/megalith.js");
// Update a megalith by ID
const updateMegalith = async (req, res) => {
  console.log(req.body);
  try {
    const updatedMegalith = await Megalith.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!updatedMegalith) {
      return res.status(404).json({ message: "Megalith not found" });
    }

    res.status(200).json(updatedMegalith);
  } catch (error) {
    console.error("Error updating megalith:", error);
    res.status(500).json({ message: "Error updating megalith", error });
  }
};
// Delete a megalith by ID
const deleteMegalith = async (req, res) => {
  try {
    const deletedMegalith = await Megalith.findOneAndDelete({
      id: req.params.id,
    });

    if (!deletedMegalith) {
      return res.status(404).json({ message: "Megalith not found" });
    }

    res.status(200).json({ message: "Megalith deleted successfully" });
  } catch (error) {
    console.error("Error deleting megalith:", error);
    res.status(500).json({ message: "Error deleting megalith", error });
  }
};
// Obtain all megaliths
const getMegaliths = async (req, res) => {
  try {
    const { _limit = 25, _page = 1, name, state, type } = req.query;
    const limit = parseInt(_limit);
    const page = parseInt(_page);
    const skip = (page - 1) * limit;

    if (isNaN(limit) || isNaN(page) || limit < 1 || page < 1) {
      return res.status(400).json({ message: "Invalid pagination parameters" });
    }

    const query = {};
    // If a name is provided, search by name (using case-insensitive regex)
    if (name) {
      query.name = { $regex: name, $options: "i" }; // Case-insensitive search
    }
    // Filter by state if provided
    if (state && state !== "-1") {
      query.state = state;
    }
    // Filter by type if provided
    if (type && type !== "-1") {
      query.type = type;
    }
    // Execute the query with pagination
    const data = await Megalith.find(query).limit(limit).skip(skip);
    const count = await Megalith.countDocuments(query);
    res.status(200).json({
      data,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};
// get megalith for the map
const getMegalithsForMap = async (req, res) => {
  try {
    const { name, state, type } = req.query;

    const query = {};
    // If a name is provided, search by name (using case-insensitive regex)
    if (name) {
      query.name = { $regex: name, $options: "i" }; // Case-insensitive search
    }
    // Filter by state if provided
    if (state && state !== "-1") {
      query.state = state;
    }
    // Filter by type if provided
    if (type && type !== "-1") {
      query.type = type;
    }
    // Execute the query with pagination
    const data = await Megalith.find(query).limit(limit).skip(skip);
    const count = await Megalith.countDocuments(query);
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};
// obtain one megalith with his id
const getMegalithById = async (req, res) => {
  try {
    const megalithItem = await Megalith.findOne({ id: req.params.id });
    if (!megalithItem) {
      return res.status(404).json({ message: "Megalith not found" });
    }
    res.status(200).json(megalithItem);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};
// create one megalith
const createMegalith = async (req, res) => {
  try {
    const newMegalith = new Megalith(req.body);
    await newMegalith.save();
    res.status(201).json(newMegalith);
  } catch (error) {
    console.error("Error creating megalith:", error);
    res.status(500).json({ message: "Error creating megalith", error });
  }
};

module.exports = {
  createMegalith,
  getMegaliths,
  getMegalithById,
  updateMegalith,
  deleteMegalith,
  getMegalithsForMap,
};
