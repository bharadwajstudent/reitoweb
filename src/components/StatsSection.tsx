import { Sparkles, Building2, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    title: "OVER 10 YEARS",
    description: "of Real Estate Expertise",
  },
  {
    icon: Building2,
    title: "5,000+ VILLAS SOLD",
    description: "across Dubai",
  },
  {
    icon: Star,
    title: "5/5 · GOOGLE RATING",
    description: "Trusted by homebuyers",
  },
  {
    icon: Award,
    title: "CERTIFIED CONSULTANTS",
    description: "with local market expertise",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-6 sm:mb-8 leading-tight">
              Helping you make <span className="italic">confident</span> property decisions
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-foreground flex items-center justify-center flex-shrink-0">
                <span className="text-xs">📋</span>
              </div>
              <span className="text-xs sm:text-sm tracking-widest uppercase">Why Choose Nomad Homes?</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-l border-border pl-4 sm:pl-6 space-y-2"
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-foreground/60" strokeWidth={1} />
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
