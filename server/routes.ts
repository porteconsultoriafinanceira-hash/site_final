import { Router } from "express";
import {
  createDiagnosticoCheckout,
  createManualCheckout,
} from "./mercadopago.js"; 

const router = Router();

router.post("/checkout/diagnostico", createDiagnosticoCheckout);
router.post("/checkout/manual", createManualCheckout);

export default router;
