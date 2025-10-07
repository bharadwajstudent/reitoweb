import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-light tracking-tight">
          nomad<span className="font-normal">homes</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm tracking-wide hover:text-primary transition-colors uppercase">
            About Us
          </a>
          <a href="#how-we-work" className="text-sm tracking-wide hover:text-primary transition-colors uppercase">
            How We Work
          </a>
          <a href="#private-client" className="text-sm tracking-wide hover:text-primary transition-colors uppercase">
            Private Client
          </a>
          <a href="#testimonials" className="text-sm tracking-wide hover:text-primary transition-colors uppercase">
            Client Testimonials
          </a>
        </nav>
        
        <Button variant="outline" className="gap-2 border-foreground hover:bg-foreground hover:text-background">
          <MessageSquare className="w-4 h-4" />
          <span className="uppercase tracking-wide text-xs">Chat With Us</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
