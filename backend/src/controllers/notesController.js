import Note from "../models/Note.js";

export async function getAllnotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const noteSaved = await newNote.save();
    res.status(201).json({
      noteSaved,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in Creating Note Controller!",
    });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updatedNote)
      return res.status(404).json({
        message: "Note Not Found!",
      });

    res.status(201).json({
      updatedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in Updating Note Controller!",
    });
  }
}

export async function deleteNotes(req, res) {
  try {
    const { title, content } = req.body;
    const deleteNote = await Note.findByIdAndDelete(req.params.id, {
      title,
      content,
    });
    if (!deleteNote)
      return res.status(404).json({ message: "Not Found This note!" });
    res.status(200).json({ message: "Delete Done" });
  } catch (error) {
    res.status(500).json({
      message: "Error in Deleting Note!",
    });
  }
}

export async function viewNote(req, res) {
  try {
    const { title, content } = req.body;
    const viewNote = await Note.findById(req.params.id);
    if (!viewNote)
      return res.status(404).json({ message: "Not Found This note!" });
    res.status(200).json({ viewNote });
  } catch (error) {
    res.status(500).json({
      message: "Error in Viewing Note!",
    });
  }
}
