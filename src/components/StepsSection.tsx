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
        
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={propertyImage} 
                  alt="Modern luxury property" 
                  className="w-full h-auto rounded-sm"
                />
                
                <div>
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-light mb-3 sm:mb-4">{index + 1}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 sm:mb-6">
                    {step}
                  </h3>
                  
                  {index === 0 && (
                    <>
                      <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        Begin your property journey with <span className="font-medium text-foreground">REITO's seamless onboarding process</span>. Share your requirements, budget, and preferences with us.
                      </p>
                      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        Our team will understand your vision and create a <span className="font-medium text-foreground">personalized property search strategy</span> tailored to your needs.
                      </p>
                    </>
                  )}
                  
                  {index === 1 && (
                    <>
                      <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        Get matched with a <span className="font-medium text-foreground">dedicated property consultant</span> who will guide you through every step of your journey.
                      </p>
                      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        Your advisor brings <span className="font-medium text-foreground">deep market knowledge and negotiation expertise</span> to secure the best deals for you.
                      </p>
                    </>
                  )}
                  
                  {index === 2 && (
                    <>
                      <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        Explore a <span className="font-medium text-foreground">handpicked selection of properties</span> that fit your criteria, all <span className="font-medium text-foreground">at the best market value</span>.
                      </p>
                      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        Together, we'll narrow down your top choices and arrange viewings for you or attend on your behalf.
                      </p>
                    </>
                  )}
                  
                  {index === 3 && (
                    <>
                      <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        Once you've found your perfect property, <span className="font-medium text-foreground">we handle all the documentation and legal formalities</span>.
                      </p>
                      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        From registration to loan processing, our team ensures a <span className="font-medium text-foreground">smooth and hassle-free closing</span>.
                      </p>
                    </>
                  )}
                  
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase hover:gap-4 transition-all">
                    Get Started Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className={`flex items-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`py-4 sm:py-6 border-b border-border transition-colors bg-accent/30 px-3 sm:px-4 w-full`}>
                  <div className="text-base sm:text-lg font-medium">
                    Step {index + 1}: {step}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
