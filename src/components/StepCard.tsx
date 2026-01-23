import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const StepCard = ({ number, title, description, icon: Icon }: StepCardProps) => {
  return (
    <div className="card-custom text-center">
      {/* Step Number */}
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-verde-seguranca text-white flex items-center justify-center font-display font-bold text-xl">
        {number}
      </div>
      
      {/* Icon */}
      <div className="w-12 h-12 mx-auto mb-4 text-azul-profundo">
        <Icon className="w-full h-full" strokeWidth={1.5} />
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-azul-profundo mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-cinza-grafite text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
