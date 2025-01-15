// const mongoose = require("mongoose");
import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/adminBoard";
const URI =
  "mongodb+srv://dnath7537:unA9ZPyOiGcp9rd9@clustertest.p4sio.mongodb.net/adminDB?retryWrites=true&w=majority&appName=ClusterTest";

// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// // Use the environment variable for the URI
// const URI = process.env.MONGO_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to db");
  } catch (error) {
    console.error("database connection failed");
    process.exit(1);
  }
};
// unA9ZPyOiGcp9rd9

export default connectDb;
