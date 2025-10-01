import mongoose, { model } from "mongoose";

// 1-- create schema for that model and 2nd add model in last and export it

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Notes", noteSchema);

export default Note;
