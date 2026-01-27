import { Router } from "express";
import { createDiagnosticoCheckout, createManualCheckout } from "./mercadopago";

const router = Router();

// Checkout Diagnóstico (R$ 27)
router.post("/checkout/diagnostico", createDiagnosticoCheckout);

// Checkout Manual (R$ 167)
router.post("/checkout/manual", createManualCheckout);

export default router;
