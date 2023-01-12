import express from "express";
import { getClasses, getClassById } from "../controllers/classes.js";

const router = express.Router();

router.get("/", getClasses);
router.get("/:id", getClassById);

export default router;
