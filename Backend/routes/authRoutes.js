import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// SIGNUP
router.post("/signup", signup);

// LOGIN
router.post("/login", login);

// PROFILE (protected)
router.get("/profile", authMiddleware, getProfile);

export default router;



