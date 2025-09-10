import express from "express";

const app = express();
const PORT = 3002;

app.get("/", (_req, res) => {
  res.send("Hi from HTTP server (TypeScript)!,, my cicd pipeline");
});

app.listen(PORT, () => console.log(`HTTP server running on port ${PORT}`));
