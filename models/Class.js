import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Class = mongoose.model("Class", ClassSchema);
export default Class;
