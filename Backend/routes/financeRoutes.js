import express from "express";
import { simulateGoal, compareGoals } from "../controllers/financeController.js";

const router = express.Router();

// Existing simulate API
router.post("/simulate", simulateGoal);

// New multi-goal compare API
router.post("/compare-goals", compareGoals);

export default router;