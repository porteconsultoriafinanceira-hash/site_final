import { useEffect, useState } from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

const CheckoutDiagnostico = () => {
  const [customerData, setCustomerData] = useState<{ nome: string; email: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('diagnosticoData');
    if (data) {
      const parsed = JSON.parse(data);
      setCustomerData({ nome: parsed.nome, email: parsed.email });
    }
  }, []);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:3333/api/checkout/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: customerData?.nome,
          email: customerData?.email,
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert('Erro ao iniciar pagamento.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o Mercado Pago.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cinza-claro flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card-custom animate-fade-in">

          {/* Texto de confiança */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 text-verde-seguranca mb-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-semibold">
                Pagamento seguro processado pelo Mercado Pago
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-cinza-grafite">
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                Ambiente protegido
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                Criptografia ativa
              </span>
            </div>
            <p className="text-sm text-cinza-grafite mt-1">Total confidencialidade</p>
          </div>

          {/* Resumo */}
          <div className="bg-cinza-claro rounded-lg p-4 mb-6">
            <h2 className="font-display font-semibold text-azul-profundo mb-3">
              Resumo do Pedido
            </h2>

            <div className="space-y-2 text-sm">
              {customerData && (
                <>
                  <div className="flex justify-between">
                    <span className="text-cinza-grafite">Nome:</span>
                    <span className="font-medium">{customerData.nome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cinza-grafite">E-mail:</span>
                    <span className="font-medium">{customerData.email}</span>
                  </div>
                </>
              )}

              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-cinza-grafite">Produto:</span>
                  <span className="font-medium">Diagnóstico Financeiro</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-azul-profundo mt-2">
                  <span>Total:</span>
                  <span>R$ 27,00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={handlePayment}
            disabled={loading}
            className="btn-primary w-full text-lg"
          >
            {loading ? 'Redirecionando...' : 'Pagar agora'}
          </button>

          <p className="text-xs text-center text-cinza-grafite mt-4">
            Ao clicar em "Pagar agora", você será redirecionado para o ambiente seguro do Mercado Pago.
          </p>

        </div>
      </div>
    </div>
  );
};

export default CheckoutDiagnostico;
