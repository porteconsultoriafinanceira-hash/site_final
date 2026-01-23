import { useNavigate } from 'react-router-dom';
import SocialProof from '@/components/SocialProof';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/ofdiagnostico');
  };

  return (
    <section className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-background pt-20">
      <div className="container-custom text-center py-12 md:py-20">
        {/* H1 */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-azul-profundo leading-tight mb-6 animate-fade-in">
          Você pode estar pagando juros abusivos sem sequer perceber
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-cinza-grafite max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up">
          Descubra agora se as parcelas do seu empréstimo estão acima do que a lei permite — de forma segura, confidencial e profissional.
        </p>
        
        {/* CTA Button */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <button
            onClick={handleCTAClick}
            className="btn-primary text-base md:text-lg px-8 py-4"
          >
            Verificar se estou pagando juros abusivos
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <SocialProof />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
