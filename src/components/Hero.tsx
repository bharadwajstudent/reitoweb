import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dubai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 sm:mb-6 leading-tight px-2">
          A <span className="italic">Smarter Way</span> to Buy a Property in Dubai
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-12 px-2">
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            One-stop solution for all your property purchase needs.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light">
            Get access to exclusive properties and buy confidently with end-to-end support.
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-all duration-300 px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-base tracking-widest uppercase"
        >
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
