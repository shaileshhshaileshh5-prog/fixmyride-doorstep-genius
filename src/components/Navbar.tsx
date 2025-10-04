import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <Wrench className="h-6 w-6" />
            <span>FixMyRide</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link to="/mechanic-login" className="text-foreground hover:text-primary transition-colors font-medium">
              Mechanic Login
            </Link>
            <Button asChild className="rounded-full">
              <Link to="/#booking">Book a Mechanic</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              to="/"
              className="block px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/#services"
              className="block px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/#about"
              className="block px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="block px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/mechanic-login"
              className="block px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Mechanic Login
            </Link>
            <Button asChild className="w-full rounded-full">
              <Link to="/#booking" onClick={() => setIsOpen(false)}>
                Book a Mechanic
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
