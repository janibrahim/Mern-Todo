import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";

dotenv.config();

// Debug env
console.log("Loaded MONGO_URI:", !!process.env.MONGO_URI);
const PORT = process.env.PORT || 7000;

const app = express();


// middleware
app.use(express.json());
app.use(
  cors({
    // In development allow the Vite dev server origin or any origin (true echoes request origin)
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL || "http://localhost:5174"
        : process.env.CLIENT_URL || true,
  })
);

app.use("/api/notes", router);
connectDb().then(() => {
  app.listen(PORT, () => console.log("Server running on port", PORT));
});
