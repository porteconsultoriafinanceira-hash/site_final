import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes.js"; // 👈 EXTENSÃO OBRIGATÓRIA

const app = express();

app.use(cors());
app.use(express.json());

// API
app.use("/api", routes);

// Frontend (Vite build)
const distPath = path.resolve(process.cwd(), "dist");
app.use(express.static(distPath));

// SPA fallback
app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3333;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
