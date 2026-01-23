import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="section-gap" />
        <ProblemSection />
        <div className="section-gap" />
        <HowItWorksSection />
        <div className="section-gap" />
        <BenefitsSection />
        <div className="section-gap" />
        <TestimonialsSection />
        <div className="section-gap" />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
