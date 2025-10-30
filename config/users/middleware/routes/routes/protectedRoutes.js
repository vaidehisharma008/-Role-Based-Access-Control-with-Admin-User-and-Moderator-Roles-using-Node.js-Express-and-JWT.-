import express from "express";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin Dashboard 👑" });
});

router.get("/moderator", verifyToken, authorizeRoles("moderator", "admin"), (req, res) => {
  res.json({ message: "Moderator Management Area 🧩" });
});

router.get("/user", verifyToken, authorizeRoles("user", "moderator", "admin"), (req, res) => {
  res.json({ message: "User Profile Zone 🙌" });
});

export default router;
