import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              aria-label="Sakhr Software home"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Sakhr Software
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Partners
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Partners
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
