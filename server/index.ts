import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes.js";
import fs from "fs";

console.log("📂 dist existe?", fs.existsSync("dist"));
console.log("📄 index.html existe?", fs.existsSync("dist/index.html"));


const app = express();

app.use(cors());
app.use(express.json());

// API
app.use("/api", routes);

// Frontend buildado
const distPath = path.resolve(process.cwd(), "dist");
app.use(express.static(distPath));

app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
