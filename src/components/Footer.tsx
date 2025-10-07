import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-2xl font-light tracking-tight mb-8">
              nomad<span className="font-normal">homes</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Legal Notice</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Personal Data</a></li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">New Developments</h4>
            <ul className="space-y-2 text-muted-foreground">
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
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Arenco Tower, Al Sufouh 2</p>
              <p className="text-sm text-muted-foreground">Dubai, UAE</p>
            </div>
            
            <div>
              <h3 className="text-3xl font-normal mb-6">Speak to an advisor today!</h3>
              <Button 
                variant="outline" 
                className="gap-2 border-foreground hover:bg-foreground hover:text-background"
              >
                <Phone className="w-4 h-4" />
                <span>+971 4 558 6176</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Nomad Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
