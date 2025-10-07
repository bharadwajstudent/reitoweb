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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-light mb-12">All Services Included:</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-full bg-background border border-border text-center text-sm"
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
