import { Ban, FileText, Scale, Clock, Coins } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Ban,
      text: 'Evite continuar pagando valores indevidos',
    },
    {
      icon: FileText,
      text: 'Entenda exatamente o que está no seu contrato',
    },
    {
      icon: Scale,
      text: 'Tenha clareza antes de qualquer ação judicial',
    },
    {
      icon: Clock,
      text: 'Processo rápido, seguro e confidencial',
    },
    {
      icon: Coins,
      text: 'Custo acessível perto do valor que pode estar sendo perdido',
    },
  ];

  return (
    <section className="section bg-cinza-claro">
      <div className="container-custom">
        {/* Título */}
        <h2 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo text-center mb-10">
          Por que fazer o diagnóstico agora?
        </h2>
        
        {/* Benefits Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-card"
            >
              <div className="w-10 h-10 rounded-full bg-verde-seguranca/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-verde-seguranca" />
              </div>
              <p className="text-cinza-grafite font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
