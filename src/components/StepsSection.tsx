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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-normal mb-8">
          Steps to Become a Property Owner
        </h2>
        
        <div className="flex items-center gap-3 mb-16">
          <Users className="w-5 h-5" />
          <span className="text-sm tracking-widest uppercase">Buying Process</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`py-6 border-b border-border transition-colors ${
                  index === 2 ? "bg-accent/50" : ""
                }`}
              >
                <div className="text-lg">
                  {index + 1} - {step}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <img 
              src={propertyImage} 
              alt="Modern luxury property" 
              className="w-full h-auto rounded-sm"
            />
            
            <div>
              <div className="text-8xl font-light mb-4">3</div>
              <h3 className="text-3xl font-normal mb-6">
                Find Your Ideal Property & Best Price
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Explore a <span className="font-medium text-foreground">handpicked selection of properties</span> that fit your criteria, all <span className="font-medium text-foreground">at the best market value</span>.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Together, we'll narrow down your top choices and arrange viewings for you or attend on your behalf.
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:gap-4 transition-all">
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
