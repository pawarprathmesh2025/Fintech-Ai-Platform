import express from "express";
import { getAIInsights } from "../controllers/aiInsightController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/ai-insights", authMiddleware, getAIInsights);

export default router;