import { CreditCard, AlertCircle, FileQuestion } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: CreditCard,
      text: 'Possui empréstimo consignado, pessoal ou financiamento ativo',
    },
    {
      icon: AlertCircle,
      text: 'Sente que paga parcelas altas demais para o valor que recebeu',
    },
    {
      icon: FileQuestion,
      text: 'Nunca verificou se as taxas e encargos do contrato estão dentro da lei',
    },
  ];

  return (
    <section className="section bg-cinza-claro">
      <div className="container-custom">
        {/* Título */}
        <h2 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo text-center mb-10 max-w-3xl mx-auto leading-snug">
          Milhares de brasileiros enfrentam juros abusivos sem saber — você pode estar entre eles se:
        </h2>
        
        {/* Lista de problemas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="card-custom flex flex-col items-center text-center p-6"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-verde-seguranca/10 flex items-center justify-center">
                <problem.icon className="w-7 h-7 text-verde-seguranca" />
              </div>
              <p className="text-cinza-grafite leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
