import mongoose from "mongoose";

const GlyphSchema = new mongoose.Schema({
  valyrianTranslation: String,
  englishTranslation: String,
  classId: String,
  prefix: String,
  alphabet: String,
  info: String,
  example: String,
  imagePath: String,
  noTranslation: Boolean,
});

const Glyph = mongoose.model("Glyph", GlyphSchema);
export default Glyph;
