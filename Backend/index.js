import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";


import decorRoute from "./route/decor.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json()); // Enable JSON body parsing

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


// connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
connectDB();

// defining routes
app.use("/decor", decorRoute);
app.use("/user", userRoute);
app.use("/api/contact", contactRoute)

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

