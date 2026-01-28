import { Request, Response } from "express";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN as string,
});

const preference = new Preference(client);

const FRONTEND_URL = process.env.FRONTEND_URL as string;

/**
 * Checkout – Diagnóstico Financeiro (R$ 27)
 */
export const createDiagnosticoCheckout = async (_: Request, res: Response) => {
  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: "diagnostico-financeiro-001", // ✅ ID adicionado
            title: "Diagnóstico Financeiro",
            quantity: 1,
            unit_price: 27,
            currency_id: "BRL",
          },
        ],
        back_urls: {
          success: `${FRONTEND_URL}/sucesso`,
          failure: `${FRONTEND_URL}/erro`,
          pending: `${FRONTEND_URL}/pendente`,
        },
      },
    });

    res.json({ init_point: result.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar checkout diagnóstico" });
  }
};

/**
 * Checkout – Manual Financeiro (R$ 167)
 */
export const createManualCheckout = async (_: Request, res: Response) => {
  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: "manual-financeiro-002", // ✅ ID adicionado
            title: "Manual Financeiro Completo",
            quantity: 1,
            unit_price: 167,
            currency_id: "BRL",
          },
        ],
        back_urls: {
          success: `${FRONTEND_URL}/sucesso`,
          failure: `${FRONTEND_URL}/erro`,
          pending: `${FRONTEND_URL}/pendente`,
        },
      },
    });

    res.json({ init_point: result.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar checkout manual" });
  }
};
