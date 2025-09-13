import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("📌 MongoDB Connected successfully 🗳️");
  } catch (error) {
    console.log("MongoDB Connection Error", error);
  }
};

export default connectDB;
