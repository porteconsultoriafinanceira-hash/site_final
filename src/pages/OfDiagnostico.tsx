import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OfDiagnostico = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/diagnosticoform');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="min-h-[70vh] flex items-center justify-center bg-background">
          <div className="container-custom text-center py-12 md:py-20">
            {/* Título Principal */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-azul-profundo leading-tight mb-6 animate-fade-in">
              Cansado de juros abusivos? Verifique agora.
            </h1>
            
            {/* Subtítulo explicativo */}
            <div className="max-w-3xl mx-auto mb-10 space-y-4 animate-slide-up">
              <p className="text-lg md:text-xl text-cinza-grafite leading-relaxed">
                Muitos contratos escondem tarifas, encargos e formas de cálculo que elevam os juros sem transparência.
              </p>
              <p className="text-lg md:text-xl text-cinza-grafite leading-relaxed">
                Nosso diagnóstico identifica indícios de irregularidades com base nas informações do seu empréstimo — de forma simples, rápida e segura.
              </p>
            </div>
            
            {/* CTA */}
            <button
              onClick={handleCTAClick}
              className="btn-primary text-lg px-10 py-4 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Quero verificar meu caso agora
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OfDiagnostico;
