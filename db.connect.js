import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connection established");
  } catch (error) {
    console.error(`Error connecting to MongoDB`);
    console.log(error.message);
  }
};

export default connectDB;
