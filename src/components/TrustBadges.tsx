import { Lock, Shield, Clock } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md';
}

const TrustBadges = ({ variant = 'horizontal', size = 'md' }: TrustBadgesProps) => {
  const badges = [
    { icon: Lock, text: 'Dados protegidos' },
    { icon: Shield, text: '100% confidencial' },
    { icon: Clock, text: 'Resultado rápido' },
  ];

  const containerClass = variant === 'horizontal' 
    ? 'flex flex-wrap justify-center gap-3 md:gap-4' 
    : 'flex flex-col gap-2';
  
  const badgeClass = size === 'sm' 
    ? 'badge-trust text-xs' 
    : 'badge-trust';

  return (
    <div className={containerClass}>
      {badges.map((badge, index) => (
        <div key={index} className={badgeClass}>
          <badge.icon className="w-4 h-4 text-verde-seguranca" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
