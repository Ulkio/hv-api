import express from "express";
import { getGlyphs, getGlyphById } from "../controllers/glyphs.js";

const router = express.Router();

router.get("/", getGlyphs);
router.get("/:id", getGlyphById);

export default router;
