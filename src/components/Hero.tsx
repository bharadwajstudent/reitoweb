import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dubai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
          A <span className="italic">Smarter Way</span> to Buy a Property in Dubai
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <p className="text-xl md:text-2xl font-light">
            One-stop solution for all your property purchase needs.
          </p>
          <p className="text-lg md:text-xl font-light">
            Get access to exclusive properties and buy confidently with end-to-end support.
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-foreground backdrop-blur-sm transition-all duration-300 px-12 py-6 text-base tracking-widest uppercase"
        >
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
