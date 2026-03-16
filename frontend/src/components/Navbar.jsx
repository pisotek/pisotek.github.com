import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Portfolio' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Same page - scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Different page - navigate then scroll
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="/"
              onClick={handleLogoClick}
              className="font-heading text-xl tracking-wider cursor-pointer"
              data-testid="nav-logo"
            >
              <span className="text-gold-gradient font-semibold">Alessio Pisoni</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#D4AF37] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          data-testid="mobile-menu"
        >
          {/* Solid background */}
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          
          {/* Menu content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-3xl tracking-wider transition-colors duration-300 ${
                  isActive(link.path) ? 'text-[#D4AF37]' : 'text-[#EDEDED] hover:text-[#D4AF37]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Decorative line */}
            <div className="w-16 h-px bg-[#D4AF37]/50 mt-4" />
          </div>
        </div>
      )}
    </>
  );
};
