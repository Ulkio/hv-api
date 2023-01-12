import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Glyph from "./models/Glyph.js";
import Class from "./models/Class.js";
import { glyphs, classes } from "./data/index.js";
import glyphRoutes from "./routes/glyphs.js";
import classRoutes from "./routes/classes.js";

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

app.use("/glyphs", glyphRoutes);
app.use("/classes", classRoutes);

/* -------------------------------------------------------------------------- */
/*                                  MOONGOSE                                  */
/* -------------------------------------------------------------------------- */
const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running at ${PORT}`));
    /* -------------------------------------------------------------------------- */
    /*                                  Add data                                  */
    /* -------------------------------------------------------------------------- */

    // Glyph.insertMany(glyphs);
    // Class.insertMany(classes);
  });
