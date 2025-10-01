import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi how are you");
});

app.listen(7890);
