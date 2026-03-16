import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadCSV } from "../controllers/csvController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/upload", protect, upload.single("file"), uploadCSV);

export default router;