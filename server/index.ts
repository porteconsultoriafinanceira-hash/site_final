import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

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

// ⚠️ IMPORTANTE: Railway exige isso
const PORT = Number(process.env.PORT);

if (!PORT) {
  throw new Error("PORT não definida pelo ambiente");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
