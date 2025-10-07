import { Users, ArrowRight } from "lucide-react";
import propertyImage from "@/assets/property-villa.jpg";

const steps = [
  "Sign Up & Start Your Journey",
  "Meet Your Dedicated Property Advisor",
  "Find Your Ideal Property at the Best Price",
  "Leave the Paperwork to Us",
];

const StepsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 sm:mb-8">
          Steps to Become a Property Owner
        </h2>
        
        <div className="flex items-center gap-3 mb-8 sm:mb-12 lg:mb-16">
          <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm tracking-widest uppercase">Buying Process</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`py-4 sm:py-6 border-b border-border transition-colors ${
                  index === 2 ? "bg-accent/50 px-3 sm:px-4" : ""
                }`}
              >
                <div className="text-base sm:text-lg">
                  {index + 1} - {step}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <img 
              src={propertyImage} 
              alt="Modern luxury property" 
              className="w-full h-auto rounded-sm"
            />
            
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-light mb-3 sm:mb-4">3</div>
              <h3 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6">
                Find Your Ideal Property & Best Price
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Explore a <span className="font-medium text-foreground">handpicked selection of properties</span> that fit your criteria, all <span className="font-medium text-foreground">at the best market value</span>.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Together, we'll narrow down your top choices and arrange viewings for you or attend on your behalf.
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase hover:gap-4 transition-all">
                Get Started Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
