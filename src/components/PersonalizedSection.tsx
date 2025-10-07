import { ArrowRight } from "lucide-react";

const PersonalizedSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-8">
                Personalized support for <span className="italic">Homebuyers</span>
              </h2>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:gap-4 transition-all">
                Start Homebuying Journey <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border border-border bg-background p-8 space-y-4">
              <h3 className="text-xl font-normal">Full Support with no Extra Fees</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get expert support from location advice to hassle-free negotiations for a stress-free experience.
              </p>
            </div>
            
            <div className="border border-border bg-background p-8 space-y-4">
              <h3 className="text-xl font-normal">Single Point of Contact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Save valuable time with a single point of contact, providing personalized guidance and eliminating the need to juggle multiple agents.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-8">
                Strategic guidance for <span className="italic">Investors</span>
              </h2>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:gap-4 transition-all">
                Book Investment Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border border-border bg-background p-8 space-y-4">
              <h3 className="text-xl font-normal">Strategic Investment Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get expert analysis and insights to pinpoint high-growth properties, ensuring your portfolio thrives.
              </p>
            </div>
            
            <div className="border border-border bg-background p-8 space-y-4">
              <h3 className="text-xl font-normal">Exclusive Investment Opportunities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access new developments and pre-launches for a competitive market edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSection;
