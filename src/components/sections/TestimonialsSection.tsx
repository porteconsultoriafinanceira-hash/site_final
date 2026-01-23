import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Achei que minha parcela era normal, mas o diagnóstico mostrou cobranças que eu nunca tinha percebido. Valeu cada centavo.',
      name: 'Carlos M.',
      role: 'Servidor público',
      location: 'Bahia',
    },
    {
      quote: 'O relatório foi claro e direto. Finalmente consegui entender meu contrato sem juridiquês.',
      name: 'Ana P.',
      role: 'Aposentada',
      location: 'São Paulo',
    },
    {
      quote: 'Descobri que estava pagando juros acima do permitido. O método realmente funciona.',
      name: 'Roberto S.',
      role: 'Autônomo',
      location: 'Rio de Janeiro',
    },
  ];

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-azul-profundo mb-3">
            O que dizem pessoas que realizaram o diagnóstico
          </h2>
          <p className="text-cinza-grafite text-lg">
            Resultados reais de quem decidiu entender o próprio contrato
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
