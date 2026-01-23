import { Users, ShieldCheck } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-cinza-grafite">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-verde-seguranca" />
        <span>Mais de 2.500 diagnósticos financeiros realizados</span>
      </div>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-verde-seguranca" />
        <span>Processo 100% confidencial e protegido</span>
      </div>
    </div>
  );
};

export default SocialProof;
