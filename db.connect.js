import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://paterson221:paterson221@cluster0.odeh4hu.mongodb.net/foodmandu?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("db connection established");
  } catch (error) {
    console.error(`Error connecting to MongoDB`);
    console.log(error.message);
  }
};

export default connectDB;
