import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3333;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
