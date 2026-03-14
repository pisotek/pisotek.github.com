import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CocktailCard } from '../components/CocktailCard';

const cocktails = [
  {
    url: "https://images.unsplash.com/photo-1773188243511-2eb85126f08b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "The Obsidian Martini",
    desc: "Gin, Dry Vermouth, Black Olive Brine, Activated Charcoal."
  },
  {
    url: "https://images.unsplash.com/photo-1643005497643-0c11084ca835?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Golden Hour Sour",
    desc: "Whiskey, Lemon, Egg White, Gold Leaf Garnish."
  },
  {
    url: "https://images.unsplash.com/photo-1643005498149-c7684a669bcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Velvet Merlot",
    desc: "Red Wine Reduction, Cognac, Spiced Berry Smoke."
  },
  {
    url: "https://images.unsplash.com/photo-1625608343997-d53dca75aa09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Crystal Clear",
    desc: "Clarified Milk Punch, Pineapple, Rum, Coconut Water."
  },
  {
    url: "https://images.unsplash.com/photo-1683027922895-8022e129ae08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Nightshade",
    desc: "Blackberry Liqueur, Vodka, Thyme, Lemon Twist."
  },
  {
    url: "https://images.unsplash.com/photo-1638022380139-00dd53630102?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Amber Old Fashioned",
    desc: "Aged Rum, Maple Syrup, Angostura Bitters, Orange Peel."
  },
  {
    url: "https://images.unsplash.com/photo-1543924483-97317fc27712?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Gilded Cage",
    desc: "Champagne, Elderflower St. Germain, Gold Dust."
  },
  {
    url: "https://images.unsplash.com/photo-1679685806190-7fd75c150c38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Midnight Espresso",
    desc: "Espresso, Kahlua, Vodka, Vanilla Bean."
  }
];

export const HomePage = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById('signature-creations');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg" data-testid="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBiYXJ0ZW5kZXIlMjBwb3VyaW5nJTIwY29ja3RhaWwlMjBkYXJrJTIwbW9vZHxlbnwwfHx8fDE3NzM0ODEyMDR8MA&ixlib=rb-4.1.0&q=85"
            alt="Professional bartender crafting a cocktail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6"
          >
            Master Mixologist
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl text-[#EDEDED] mb-6 leading-tight"
            data-testid="hero-title"
          >
            Crafting{' '}
            <span className="italic text-gold-gradient">Liquid Art</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#A0A0A0] text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Where precision meets passion. Every cocktail tells a story, every pour is a performance. 
            Experience the art of bespoke mixology.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToGallery}
            className="btn-primary"
            data-testid="explore-btn"
          >
            Explore Creations
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#D4AF37] cursor-pointer"
            onClick={scrollToGallery}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Signature Creations Gallery */}
      <section 
        id="signature-creations" 
        className="py-24 lg:py-32 px-6 lg:px-12"
        data-testid="gallery-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">
              The Collection
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#EDEDED]">
              Signature Creations
            </h2>
          </motion.div>

          {/* Cocktail Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cocktails.map((cocktail, index) => (
              <CocktailCard
                key={cocktail.name}
                cocktail={cocktail}
                index={index}
                isLarge={index === 0 || index === 5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 marble-overlay" data-testid="cta-section">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#EDEDED] mb-6">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-[#A0A0A0] text-base lg:text-lg mb-10 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, let&apos;s create an unforgettable 
              cocktail experience tailored to your vision.
            </p>
            <a href="/contact" className="btn-primary" data-testid="cta-contact-btn">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
