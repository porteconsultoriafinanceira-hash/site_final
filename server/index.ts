import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes";

// Necessário por causa do "type": "module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Rotas da API
 * Ex: /api/checkout/diagnostico
 */
app.use("/api", routes);

/**
 * Servir o frontend buildado pelo Vite
 * dist/ fica na raiz do projeto
 */
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

/**
 * SPA fallback
 * Qualquer rota que não seja /api
 * carrega o index.html do frontend
 */
app.get("*", (_req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
