import { useEffect, useState } from 'react';
import { CheckCircle, MessageCircle, Clock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ManualPg = () => {
  const [customerData, setCustomerData] = useState<{ nome: string } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('diagnosticoData');
    if (data) {
      const parsed = JSON.parse(data);
      setCustomerData({ nome: parsed.nome });
    }
  }, []);

  const handleWhatsApp = () => {
    const nome = customerData?.nome || 'Cliente';
    const orderId = Date.now().toString(36).toUpperCase();
    const message = encodeURIComponent(
      `Olá! Sou ${nome}, acabei de adquirir o Manual Definitivo Contra Juros Abusivos (Pedido: ${orderId}) e gostaria de saber mais sobre a assessoria.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Selo de sucesso */}
        <div className="bg-verde-seguranca py-4">
          <div className="container-custom flex items-center justify-center gap-3">
            <CheckCircle className="w-8 h-8 text-white" />
            <span className="font-display font-bold text-xl text-white">Parabéns por sua compra!</span>
          </div>
        </div>
        
        {/* Confirmação */}
        <section className="section bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-cinza-grafite mb-8">
                O seu Manual Definitivo Contra Juros Abusivos será enviado para o seu e-mail em até 24h
              </p>
              
              <div className="card-custom mb-8">
                <div className="flex items-center justify-center gap-2 text-verde-seguranca mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Fique atento à sua caixa de entrada</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upsell - Assessoria */}
        <section className="section bg-cinza-claro">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="card-custom border-2 border-verde-seguranca">
                {/* Título do upsell */}
                <h2 className="font-display font-bold text-2xl text-azul-profundo text-center mb-4">
                  Prefere que especialistas resolvam tudo para você?
                </h2>
                
                <p className="text-lg text-cinza-grafite text-center mb-6">
                  Existe uma opção ainda mais simples e segura: deixar seu caso sob responsabilidade de profissionais que fazem isso todos os dias.
                </p>
                
                {/* Validação */}
                <div className="bg-cinza-claro rounded-lg p-4 mb-6 space-y-3">
                  <p className="text-cinza-grafite">
                    Muitos clientes optam por não correr riscos, não perder tempo com cálculos e não lidar diretamente com bancos.
                  </p>
                  <p className="text-cinza-grafite">
                    Por isso, abrimos uma oferta exclusiva de assessoria financeira, disponível somente agora, logo após a compra do manual.
                  </p>
                </div>
                
                {/* Escassez */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-amarelo-alerta" />
                  <span className="font-semibold text-azul-profundo">Vagas limitadas</span>
                </div>
                <p className="text-sm text-cinza-grafite text-center mb-8">
                  A assessoria é personalizada e não conseguimos atender todos os casos simultaneamente.
                </p>
                
                {/* CTA WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  className="btn-upsell w-full flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quero que a consultoria cuide de tudo para mim
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManualPg;
