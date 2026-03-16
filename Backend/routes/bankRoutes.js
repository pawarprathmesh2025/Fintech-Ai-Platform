import express from "express";
import { syncBankTransactions } from "../controllers/bankController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/sync", authMiddleware, syncBankTransactions);

export default router;