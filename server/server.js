// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// ✅ Use async IIFE (Immediately Invoked Function Expression)
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
};

startServer();
