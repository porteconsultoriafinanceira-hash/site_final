import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '@/assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Não mostrar header nas páginas de checkout
  const isCheckoutPage = location.pathname.includes('checkout');
  
  if (isCheckoutPage) {
    return null;
  }

  const handleCTAClick = () => {
    navigate('/ofdiagnostico');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-header">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src={logoImg} 
            alt="Diagnóstico Financeiro" 
            className="h-10 md:h-12 w-auto"
          />
          <span className="hidden sm:block font-display font-semibold text-azul-profundo text-lg">
            Diagnóstico Financeiro
          </span>
        </a>
        
        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="btn-primary text-sm md:text-base px-4 md:px-6"
        >
          Quero resolver meu caso agora
        </button>
      </div>
    </header>
  );
};

export default Header;
