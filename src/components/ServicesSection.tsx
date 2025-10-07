const services = [
  "Property hunting",
  "Homebuying advisory",
  "Purchasing power calculation",
  "Property price negotiation",
  "Viewings scheduling",
  "Mortgage Assistance",
  "Paperwork management",
  "Post-purchase support",
];

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-light mb-8 sm:mb-12">All Services Included:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-background border border-border text-center text-xs sm:text-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
