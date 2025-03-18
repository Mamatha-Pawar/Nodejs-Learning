const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("MONGO_URL:", process.env.MONGO_URL);

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(` Database Connection Error: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

module.exports = { connectDB }; // Export the function
