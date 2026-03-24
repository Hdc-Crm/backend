import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
     if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI not defined in environment variables!');
  }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
