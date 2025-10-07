import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="text-xl sm:text-2xl font-light tracking-tight mb-4 sm:mb-6">
              REITO
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Your trusted partner for premium real estate solutions in Hyderabad. We make property investment simple, transparent, and profitable.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Property Advisory</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Legal Support</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Off-Market Access</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Investment Strategy</a></li>
            </ul>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Contact Us</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Hyderabad, Telangana</p>
              <p className="text-xs sm:text-sm text-muted-foreground">India</p>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6">Speak to an advisor today!</h3>
              <Button 
                variant="outline" 
                className="gap-2 border-foreground hover:bg-foreground hover:text-background w-full sm:w-auto text-sm sm:text-base transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 REITO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
