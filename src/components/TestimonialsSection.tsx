import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  { name: "Masira", initial: "M", color: "bg-blue-400" },
  { name: "Nancy", initial: "N", color: "bg-amber-800" },
  { name: "Oojaa's", initial: "O", color: "bg-green-600" },
  { name: "Harry", initial: "H", color: "bg-blue-600" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-normal mb-16">
          What our clients say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-sm transition-all ${
                  index === 0 ? "bg-accent/50" : ""
                }`}
              >
                <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xl font-light`}>
                  {testimonial.initial}
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-muted-foreground text-muted-foreground" />
                    ))}
                  </div>
                  <div className="font-normal">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              "We had a great experience with Ibrahim. It was our first home purchase and having a neutral buyer's agent who has no conflicting agenda made a huge difference. Ibrahim was extremely proactive, endlessly patient and helped us with critical things like securing finance, property survey and property handover that weren't even part of his job scope. I cannot recommend him enough."
            </p>
            
            <a href="#" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:gap-4 transition-all">
              Read More Reviews <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
