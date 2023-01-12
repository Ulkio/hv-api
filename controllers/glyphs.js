import Glyph from "../models/Glyph.js";

/* -------------------------------------------------------------------------- */
/*                                    Read                                    */
/* -------------------------------------------------------------------------- */
export const getGlyphs = async (req, res) => {
  try {
    const glyphs = await Glyph.find();
    res.status(200).json(glyphs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const getGlyphById = async (req, res) => {
  try {
    const { glyphId } = req.params;
    const glyphs = await Glyph.findById(glyphId);
    res.status(200).json(glyphs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
