import { FileText, Search, FileCheck } from 'lucide-react';
import StepCard from '@/components/StepCard';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Você envia as informações do contrato',
      description: 'Preencha um formulário simples com os dados do seu empréstimo. Não solicitamos informações sensíveis além do necessário.',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Análise técnica especializada',
      description: 'Nossa equipe analisa seu contrato com base na legislação vigente e práticas bancárias permitidas.',
      icon: Search,
    },
    {
      number: 3,
      title: 'Relatório claro e objetivo',
      description: 'Você recebe um diagnóstico direto ao ponto, indicando se há ou não indícios de cobrança abusiva.',
      icon: FileCheck,
    },
  ];

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Título */}
        <h2 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo text-center mb-10">
          Como funciona o diagnóstico financeiro
        </h2>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
