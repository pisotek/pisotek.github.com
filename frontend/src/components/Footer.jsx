import { Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open('mailto:contact@alexsterling.com', '_blank');
  };

  return (
    <footer className="relative py-16 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl text-gold-gradient font-semibold mb-2">
              Alessio Pisoni
            </h3>
            <p className="text-[#666666] text-sm tracking-wide">
              The Art of Mixology
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              data-testid="footer-instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              data-testid="footer-linkedin"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-[#666666] text-sm"
            data-testid="footer-copyright"
          >
            &copy; {currentYear} Alessio Pisoni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
