const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-azul-profundo text-white py-8 mt-auto">
      <div className="container-custom">
        <div className="text-center space-y-4">
          {/* Nome da empresa */}
          <p className="font-display font-semibold text-lg">
            Diagnóstico Financeiro
          </p>
          
          {/* Aviso legal */}
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Este site não substitui aconselhamento jurídico. O diagnóstico é informativo.
          </p>
          
          {/* Direitos reservados */}
          <p className="text-sm text-white/60">
            © {currentYear} Diagnóstico Financeiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
