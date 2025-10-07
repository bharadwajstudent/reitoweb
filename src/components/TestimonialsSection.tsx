import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  { 
    name: "Rajesh Kumar", 
    initial: "R", 
    color: "bg-blue-400",
    text: "REITO made my first property purchase incredibly smooth. Their team's expertise and transparency gave me complete confidence throughout the process."
  },
  { 
    name: "Priya Sharma", 
    initial: "P", 
    color: "bg-amber-800",
    text: "Excellent service! The advisors helped me find the perfect investment property and handled all the paperwork efficiently. Highly recommended!"
  },
  { 
    name: "Mohammed Ali", 
    initial: "M", 
    color: "bg-green-600",
    text: "Professional and trustworthy. REITO's market insights helped me secure a fantastic deal on a commercial property. Best decision I made!"
  },
  { 
    name: "Ananya Reddy", 
    initial: "A", 
    color: "bg-blue-600",
    text: "From property hunting to final registration, REITO was with us every step. Their personalized approach made the entire experience stress-free."
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 sm:mb-12 lg:mb-16">
          What our clients say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-4 sm:space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 sm:p-5 rounded-sm transition-all hover:bg-accent/30 ${
                  index === 0 ? "bg-accent/50" : "bg-accent/10"
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full ${testimonial.color} flex items-center justify-center text-white text-lg sm:text-xl font-light`}>
                    {testimonial.initial}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <div className="font-medium text-sm sm:text-base mb-1">{testimonial.name}</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-6 sm:space-y-8 flex flex-col justify-center">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground mb-4">
                "REITO transformed our property buying experience. Their team's professionalism, market knowledge, and dedication to finding us the perfect home was exceptional. From our first consultation to final handover, they handled everything seamlessly."
              </p>
              <p className="text-sm sm:text-base font-medium">— Featured Client Review</p>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase hover:gap-4 transition-all">
              Share Your Experience <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
