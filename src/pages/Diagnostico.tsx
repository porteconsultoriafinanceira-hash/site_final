import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, AlertTriangle, TrendingDown, FileWarning, Calculator } from 'lucide-react';

const Diagnostico = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/checkoutmanual');
  };

  const irregularidades = [
    { icon: Calculator, text: 'CET inflacionado e tarifas embutidas' },
    { icon: FileWarning, text: 'Cláusulas confusas ou pouco transparentes' },
    { icon: TrendingDown, text: 'Renegociações que aumentam o saldo devedor' },
    { icon: AlertTriangle, text: 'Capitalização excessiva de juros' },
  ];

  const beneficios = [
    'Onde o contrato costuma esconder cobranças abusivas',
    'Como identificar irregularidades com segurança',
    'Como agir de forma correta para recuperar o controle financeiro',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {/* Selo de sucesso */}
        <div className="bg-verde-seguranca py-3">
          <div className="container-custom flex items-center justify-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Pagamento bem sucedido</span>
          </div>
        </div>
        
        {/* Resultado do diagnóstico */}
        <section className="section bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Título da análise */}
              <h1 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo text-center mb-8 animate-fade-in">
                Identificamos fortes indícios de irregularidades em seus contratos
              </h1>
              
              {/* Texto explicativo */}
              <p className="text-lg text-cinza-grafite mb-6">
                Com base nas informações fornecidas, seu contrato apresenta sinais consistentes de práticas que frequentemente caracterizam juros abusivos, como:
              </p>
              
              {/* Lista de irregularidades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {irregularidades.map((item, index) => (
                  <div key={index} className="card-custom flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amarelo-alerta/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amarelo-alerta" />
                    </div>
                    <span className="text-cinza-grafite">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de transição para venda */}
        <section className="section bg-cinza-claro">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo mb-4">
                Existe um método claro para interromper essas cobranças
              </h2>
              <p className="text-lg text-cinza-grafite leading-relaxed">
                É possível identificar o erro, impedir que a dívida continue crescendo e voltar a pagar apenas o que é justo — sem depender da boa vontade do banco e sem gastar com consultorias caras.
              </p>
            </div>
          </div>
        </section>
        
        {/* Bloco de valor */}
        <section className="section bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card-custom">
                <h3 className="font-display font-semibold text-xl text-azul-profundo mb-4">
                  Um método com valor de consultoria profissional
                </h3>
                <p className="text-cinza-grafite mb-4">Você aprende, passo a passo:</p>
                <ul className="space-y-3 mb-6">
                  {beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-verde-seguranca flex-shrink-0 mt-0.5" />
                      <span className="text-cinza-grafite">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gatilho de urgência */}
        <section className="section bg-azul-profundo text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg font-semibold">Se você não agir agora, a dívida continua aumentando.</p>
              <p className="text-white/90">Os bancos lucram com a confusão, com termos técnicos e taxas que você nunca aprovou conscientemente.</p>
              <p className="text-white/90">Quanto mais você demora, mais o banco lucra.</p>
              <p className="text-lg font-semibold text-amarelo-alerta">Cada mês sem ação é dinheiro saindo do seu bolso.</p>
            </div>
          </div>
        </section>
        
        {/* CTA Final */}
        <section className="section bg-background">
          <div className="container-custom text-center">
            <button
              onClick={handleCTAClick}
              className="btn-primary text-lg px-10 py-4"
            >
              Quero o método completo para eliminar juros abusivos agora
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Diagnostico;
