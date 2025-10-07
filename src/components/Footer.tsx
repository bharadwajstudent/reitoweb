import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="text-xl sm:text-2xl font-light tracking-tight mb-6 sm:mb-8">
              nomad<span className="font-normal">homes</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Legal Notice</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Personal Data</a></li>
                </ul>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">New Developments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">All New Developments</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">ALTUS at Dubai Creek Harbour</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Greenville at Emaar South</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Skyscape Avenue at Sobha Hartland</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Greenway 2 at Emaar South</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Millennium Talia at Al Furjan</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Greenridge at Emaar South</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">SARIA at Dubai Maritime City</a></li>
            </ul>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Arenco Tower, Al Sufouh 2</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Dubai, UAE</p>
            </div>
            
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal mb-4 sm:mb-6">Speak to an advisor today!</h3>
              <Button 
                variant="outline" 
                className="gap-2 border-foreground hover:bg-foreground hover:text-background w-full sm:w-auto text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>+971 4 558 6176</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Nomad Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
