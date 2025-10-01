import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // console.log("Loaded URI:", process.env.MONGO_URI); // 🔍 Debug

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo DB Connected");
  } catch (error) {
    console.error("❌ Error occurred in MongoDB connection", error);
  }
};
