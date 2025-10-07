import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PersonalizedSection from "@/components/PersonalizedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StepsSection />
        <ServicesSection />
        <StatsSection />
        <PersonalizedSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
