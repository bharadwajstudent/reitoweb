import { Button } from "@/components/ui/button";
import { MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-light tracking-tight">
          nomad<span className="font-normal">homes</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="outline" className="gap-2 border-foreground hover:bg-foreground hover:text-background h-9 sm:h-10 px-3 sm:px-4">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline uppercase tracking-wide text-xs">Chat With Us</span>
          </Button>
          
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-sm tracking-wide hover:text-primary transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#how-we-work" 
              className="text-sm tracking-wide hover:text-primary transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How We Work
            </a>
            <a 
              href="#private-client" 
              className="text-sm tracking-wide hover:text-primary transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Private Client
            </a>
            <a 
              href="#testimonials" 
              className="text-sm tracking-wide hover:text-primary transition-colors uppercase py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Testimonials
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
