import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import csvRoutes from "./routes/csvRoutes.js";
import bankRoutes from "./routes/bankRoutes.js";
import aiInsightRoutes from "./routes/aiInsightRoutes.js";
import financeRoutes from "./routes/financeRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import aiCopilotRoutes from "./routes/aiCopilotRoutes.js";
import financialHealthRoutes from "./routes/financialHealthRoutes.js";


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/csv", csvRoutes);
app.use("/api/bank", bankRoutes);
app.use("/api/ai", aiInsightRoutes);
// Protect finance routes with JWT
app.use("/api/finance", authMiddleware, financeRoutes);
app.use("/api/ai", aiCopilotRoutes);
app.use("/api", financialHealthRoutes);

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