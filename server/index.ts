import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API
app.use("/api", routes);

// Healthcheck (Railway)
app.get("/health", (_, res) => {
  res.status(200).send("ok");
});

// Frontend (Vite build)
const distPath = path.resolve(process.cwd(), "dist");
app.use(express.static(distPath));

app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Porta obrigatória Railway
const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
