import express from "express";
import { aiCopilot } from "../controllers/aiCopilotController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// POST /api/ai/copilot
router.post("/copilot", authMiddleware, aiCopilot);

export default router;