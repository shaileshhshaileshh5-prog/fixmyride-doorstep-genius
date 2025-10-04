import { Link } from "react-router-dom";
import { Wrench, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-6 w-6" />
              <span className="font-bold text-xl">FixMyRide</span>
            </div>
            <p className="text-background/80 text-sm">
              Your trusted doorstep vehicle repair service. Quality service, right where you are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/mechanic-login" className="hover:text-background transition-colors">
                  Mechanic Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70">
          <p>Copyright © 2025 FixMyRide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
