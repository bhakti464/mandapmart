import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON body parsing

const PORT = process.env.PORT || 4000;

// Define JSON file mapping
const jsonFiles = {
  All: "collectionlist.json",
  Mandaps: "mandaps.json",
  Flowers: "flowers.json",
  Chairs: "chairs.json",
  Statue: "statue.json",
  Decorations: "decorations.json",
};

// API Endpoint to Fetch Decor Based on Category
app.get("/decor", (req, res) => {
  const category = req.query.category || "All"; // Default to "All"
  const filePath = path.join(process.cwd(), "data", jsonFiles[category]);

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Error reading data file" });
      }
      res.json(JSON.parse(data));
    });
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
