import { Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm tracking-widest uppercase">About Us</span>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 sm:mb-12">
            Who We Are
          </h2>

          <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base sm:text-lg">
              <span className="font-medium text-foreground">REITO</span> is a premier real estate consulting firm established by a team of MBA graduates who are passionate about transforming the home buying journey. As trusted channel partners, we provide comprehensive one-stop solutions that simplify complex real estate transactions.
            </p>

            <p className="text-base sm:text-lg">
              Our expertise spans across residential and commercial properties, offering personalized guidance from property selection to final documentation. With deep market insights and strong industry relationships, we ensure our clients make informed decisions while securing the best deals.
            </p>

            <p className="text-base sm:text-lg">
              Our commitment to excellence and client satisfaction has made us a preferred choice for discerning property investors and homebuyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
