import { useNavigate } from 'react-router-dom';

const FinalCTASection = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/ofdiagnostico');
  };

  return (
    <section className="section bg-azul-profundo text-white">
      <div className="container-custom text-center py-12 md:py-16">
        {/* Título */}
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
          Você não precisa continuar na dúvida
        </h2>
        
        {/* Texto */}
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Quanto mais tempo passa, mais você pode estar pagando além do que deveria. O diagnóstico é o primeiro passo para recuperar o controle da sua vida financeira.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="btn-primary bg-verde-seguranca hover:bg-verde-hover text-white text-lg px-8 py-4"
        >
          Quero fazer meu diagnóstico agora
        </button>
      </div>
    </section>
  );
};

export default FinalCTASection;
