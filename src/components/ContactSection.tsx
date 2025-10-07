import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
              Book your <span className="italic">Free</span> and <span className="italic">Personalized</span> Property Consultation!
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Fill in your details, so one of our advisors can contact you to discuss your needs and help you find your perfect home or investment.
            </p>
          </div>
          
          <div className="bg-background/60 backdrop-blur-sm p-6 sm:p-8 rounded-sm space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm">First Name *</label>
                <Input placeholder="John" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm">Last Name *</label>
                <Input placeholder="Doe" className="bg-background" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm">Email adress *</label>
                <Input type="email" placeholder="johndoe@gmail.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm">Phone *</label>
                <div className="flex gap-2">
                  <div className="w-12 h-10 flex items-center justify-center border border-input rounded-md bg-background text-base sm:text-lg flex-shrink-0">
                    🇮🇳
                  </div>
                  <Input placeholder="e.g. 98765 43210" className="flex-1 bg-background" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs sm:text-sm">What is your primary reason for contacting? *</label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buying">Buying a property</SelectItem>
                  <SelectItem value="investing">Investment opportunity</SelectItem>
                  <SelectItem value="consultation">General consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 py-5 sm:py-6 tracking-widest uppercase text-xs sm:text-sm">
              Get Free Consultation
            </Button>
            
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are committed to protecting and respecting your privacy, and we will never share your data. One of our agents will contact you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
