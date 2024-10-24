const mongoose = require("mongoose");
// Connect to your MongoDB Atlas cluster
mongoose
  .connect(
    "mongodb+srv://alexismoreauavila:HMBOot40n9QkVj0B@megalithcluster.tb818.mongodb.net/megalith",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      // Access the "megaliths" collection
      const collection = mongoose.connection.collection("megaliths");
      // Drop the index "id_1"
      await collection.dropIndex("id_1");
      console.log("Index id_1 dropped successfully");
    } catch (error) {
      console.error("Error dropping index:", error.message);
    } finally {
      // Close the connection
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error("Connection error:", err.message);
  });
