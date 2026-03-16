import express from "express";
import { getFinancialHealth } from "../controllers/financialHealthController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/financial-health", authMiddleware, getFinancialHealth);

export default router;