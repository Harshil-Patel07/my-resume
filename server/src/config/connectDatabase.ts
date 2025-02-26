import mongoose from "mongoose";
import { DATABASE_URI } from "./env";

export const connectDatabase = async () => {
  try {
    if (!DATABASE_URI) return console.log("Please provide database uri!!!!");

    await mongoose.connect(DATABASE_URI, {
      appName: "My Resume",
    });

    console.log(`✅ MongoDB connected successfully`);
  } catch (error) {
    console.log("Error while connecting database:", error);
  }
};
