import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { CocktailCard } from '../components/CocktailCard';
import { CocktailModal } from '../components/CocktailModal';

const cocktails = [
  {
    url: "https://images.unsplash.com/photo-1773188243511-2eb85126f08b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "The Obsidian Martini",
    desc: "Gin, Dry Vermouth, Black Olive Brine, Activated Charcoal.",
    flavorProfile: "A bold, savory martini with an alluring dark mystique. The activated charcoal creates a striking visual while adding subtle mineral notes that complement the botanical gin and briny olive undertones.",
    tastingNotes: ["Savory", "Botanical", "Mineral", "Briny"]
  },
  {
    url: "https://images.unsplash.com/photo-1643005497643-0c11084ca835?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Golden Hour Sour",
    desc: "Whiskey, Lemon, Egg White, Gold Leaf Garnish.",
    flavorProfile: "A luxurious twist on the classic whiskey sour. Silky egg white foam meets bright citrus and smooth bourbon, crowned with delicate gold leaf for an unforgettable presentation.",
    tastingNotes: ["Citrus", "Smooth", "Velvety", "Warm"]
  },
  {
    url: "https://images.unsplash.com/photo-1643005498149-c7684a669bcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Velvet Merlot",
    desc: "Red Wine Reduction, Cognac, Spiced Berry Smoke.",
    flavorProfile: "An opulent fusion of wine country elegance and cocktail craftsmanship. The concentrated merlot reduction brings deep berry richness, while cognac adds warmth and subtle smoke lingers on the finish.",
    tastingNotes: ["Berry", "Smoky", "Rich", "Complex"]
  },
  {
    url: "https://images.unsplash.com/photo-1625608343997-d53dca75aa09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Crystal Clear",
    desc: "Clarified Milk Punch, Pineapple, Rum, Coconut Water.",
    flavorProfile: "A tropical escape refined through milk clarification, yielding a crystal-clear elixir with impossibly smooth texture. Bright pineapple and coconut transport you to paradise with every sip.",
    tastingNotes: ["Tropical", "Silky", "Refreshing", "Clean"]
  },
  {
    url: "https://images.unsplash.com/photo-1683027922895-8022e129ae08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Nightshade",
    desc: "Blackberry Liqueur, Vodka, Thyme, Lemon Twist.",
    flavorProfile: "A mysterious garden-inspired creation where ripe blackberry meets aromatic thyme. The herbal complexity unfolds gradually, revealing layers of dark fruit and citrus brightness.",
    tastingNotes: ["Fruity", "Herbal", "Dark", "Aromatic"]
  },
  {
    url: "https://images.unsplash.com/photo-1638022380139-00dd53630102?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Amber Old Fashioned",
    desc: "Aged Rum, Maple Syrup, Angostura Bitters, Orange Peel.",
    flavorProfile: "A sophisticated reimagining of the timeless classic. Aged rum brings caramel depth while pure maple syrup adds an autumnal sweetness, balanced by aromatic bitters and bright citrus oils.",
    tastingNotes: ["Caramel", "Spiced", "Warm", "Balanced"]
  },
  {
    url: "https://images.unsplash.com/photo-1543924483-97317fc27712?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Gilded Cage",
    desc: "Champagne, Elderflower St. Germain, Gold Dust.",
    flavorProfile: "Pure celebration in a glass. Effervescent champagne lifts delicate elderflower notes while shimmering gold dust catches the light, creating an ethereal drinking experience fit for royalty.",
    tastingNotes: ["Floral", "Effervescent", "Elegant", "Light"]
  },
  {
    url: "https://images.unsplash.com/photo-1679685806190-7fd75c150c38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Midnight Espresso",
    desc: "Espresso, Kahlua, Vodka, Vanilla Bean.",
    flavorProfile: "The perfect after-dinner indulgence. Freshly pulled espresso meets velvety Kahlua and smooth vodka, finished with real vanilla bean for a coffee experience that transcends the ordinary.",
    tastingNotes: ["Coffee", "Sweet", "Creamy", "Bold"]
  }
];

export const HomePage = () => {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
    setIsModalOpen(true);
  };

  const scrollToGallery = () => {
    const gallery = document.getElementById('signature-creations');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" data-testid="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBiYXJ0ZW5kZXIlMjBwb3VyaW5nJTIwY29ja3RhaWwlMjBkYXJrJTIwbW9vZHxlbnwwfHx8fDE3NzM0ODEyMDR8MA&ixlib=rb-4.1.0&q=85"
            alt="Professional bartender crafting a cocktail"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p 
            className={`text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Bartender Mixologist
          </p>
          
          <h1
            className={`font-heading text-4xl sm:text-5xl lg:text-7xl text-[#EDEDED] mb-6 leading-tight transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-testid="hero-title"
          >
            Crafting{' '}
            <span className="italic text-gold-gradient">Liquid Art</span>
          </h1>
          
          <p 
            className={`text-[#A0A0A0] text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Where precision meets passion. Every cocktail tells a story, every pour is a performance. 
            Experience the art of bespoke mixology.
          </p>

          <button
            onClick={scrollToGallery}
            className={`btn-primary transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-testid="explore-btn"
          >
            Explore Creations
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ease-out delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={scrollToGallery}
            className="text-[#D4AF37] cursor-pointer animate-bounce"
            aria-label="Scroll to gallery"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Signature Creations Gallery */}
      <section 
        id="signature-creations" 
        className="py-24 lg:py-32 px-6 lg:px-12"
        data-testid="gallery-section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">
              The Collection
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#EDEDED]">
              Signature Creations
            </h2>
          </div>

          {/* Cocktail Grid - 4 columns on desktop, 2 rows of 4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {cocktails.map((cocktail, index) => (
              <CocktailCard
                key={cocktail.name}
                cocktail={cocktail}
                index={index}
                onClick={() => handleCocktailClick(cocktail)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 marble-overlay" data-testid="cta-section">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#EDEDED] mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-[#A0A0A0] text-base lg:text-lg mb-10 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, let&apos;s create an unforgettable 
            cocktail experience tailored to your vision.
          </p>
          <a href="#/contact" className="btn-primary" data-testid="cta-contact-btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Cocktail Modal */}
      <CocktailModal
        cocktail={selectedCocktail}
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
      />
    </main>
  );
};

export default HomePage;
