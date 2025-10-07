import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyCarousel from "@/components/PropertyCarousel";
import AboutSection from "@/components/AboutSection";
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
      <main id="home">
        <Hero />
        <PropertyCarousel />
        <AboutSection />
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
