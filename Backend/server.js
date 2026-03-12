import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("Fintech AI Backend Running");
});

// Extra test route
app.post("/test", (req, res) => {
  console.log("POST /test hit", req.body);
  res.json({ message: "POST works" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});