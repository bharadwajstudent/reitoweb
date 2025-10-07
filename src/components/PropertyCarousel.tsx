import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import Autoplay from "embla-carousel-autoplay";

const properties = [
  { id: 1, image: property1, title: "Luxury Apartments" },
  { id: 2, image: property2, title: "Premium Villas" },
  { id: 3, image: property3, title: "Commercial Spaces" },
];

const PropertyCarousel = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {properties.map((property) => (
              <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative overflow-hidden rounded-sm group">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                      <h3 className="text-white text-xl sm:text-2xl font-normal">
                        {property.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4" />
          <CarouselNext className="right-2 sm:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default PropertyCarousel;
