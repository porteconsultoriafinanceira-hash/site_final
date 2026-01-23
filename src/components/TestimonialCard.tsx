interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location: string;
}

const TestimonialCard = ({ quote, name, role, location }: TestimonialCardProps) => {
  return (
    <div className="card-custom h-full flex flex-col">
      {/* Quote */}
      <blockquote className="text-cinza-grafite text-base leading-relaxed flex-grow">
        "{quote}"
      </blockquote>
      
      {/* Author */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="font-semibold text-azul-profundo">{name}</p>
        <p className="text-sm text-cinza-grafite">
          {role}, {location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
