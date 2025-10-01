import express from "express";
import {
  createNotes,
  deleteNotes,
  getAllnotes,
  updateNotes,
  viewNote
} from "../controllers/notesController.js";

const router = express.Router();


router.get("/", getAllnotes);
router.get("/", viewNote); //mean get notes by id , mean view note
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
