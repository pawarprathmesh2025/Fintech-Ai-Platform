// routes/dashboardRoutes.js

import express from "express";
import { getDashboard, getDashboardSummary } from "../controllers/dashboardController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Full dashboard  →  GET /api/dashboard
router.get("/", protect, getDashboard);

// Summary only   →  GET /api/dashboard/summary
router.get("/summary", protect, getDashboardSummary);

export default router;