import { json } from "express";
import mongoose from "mongoose";
import Class from "../models/Class.js";

/* -------------------------------------------------------------------------- */
/*                                    Read                                    */
/* -------------------------------------------------------------------------- */

export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
export const getClassById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ error: "Invalid id" });
    }
    const classById = await Class.findById(id);
    if (!classById) {
      return res.status(404).json({ error: "Class not found" });
    }
    res.status(200).json(classById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
