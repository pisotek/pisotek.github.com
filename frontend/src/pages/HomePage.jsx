import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { CocktailCard } from '../components/CocktailCard';
import { CocktailModal } from '../components/CocktailModal';

const cocktails = [
  {
    url: "https://images.unsplash.com/photo-1773188243511-2eb85126f08b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Chocolate Negroni",
    desc: "Cacao-infused Gin, Campari, Sweet Red Vermouth, Chocolate Bitters.",
    flavorProfile: "An indulgent reimagining of a classic. The gin is fat-washed or infused for 48 hours with toasted cacao nibs, delivering a deep dark chocolate aroma. Finished with a flamed orange peel to release essential oils that brighten the palate.",
    tastingNotes: ["Indulgent", "Bitter", "Roasted", "Citrus"]
  },
  {
    url: "https://images.unsplash.com/photo-1643005497643-0c11084ca835?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Mastiha Sunrise",
    desc: "Tequila Blanco, Mastiha Liqueur, Fresh Orange Juice, Hibiscus & Pomegranate Syrup.",
    flavorProfile: "The Mediterranean in a glass. The herbal notes of Mastiha resin pair perfectly with the earthy agave of the tequila. Complemented by a homemade hibiscus and pomegranate syrup for a deep ruby hue and a sophisticated floral finish.",
    tastingNotes: ["Herbal", "Resinous", "Fresh", "Floral"]
  },
  {
    url: "https://images.unsplash.com/photo-1643005498149-c7684a669bcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHxfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Cosmo-Reims",
    desc: "Vodka Citron, Champagne Syrup, Cointreau, Lime, Cranberry.",
    flavorProfile: "A high-class evolution of the Cosmopolitan. The addition of Champagne syrup elevates the cranberry's natural acidity, while a delicate mist of rose essence over the surface creates an enchanting olfactory experience.",
    tastingNotes: ["Elegant", "Tart", "Floral", "Vibrant"]
  },
  {
    url: "https://images.unsplash.com/photo-1625608343997-d53dca75aa09?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxmYW5jeSUyMGNvY2t0YWlsJTIwY2xvc2UlMjB1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3MzQ4MTIxNXww&ixlib=rb-4.1.0&q=85",
    name: "Allorum Sour",
    desc: "Gin, Allspice Syrup, Lemon, Egg White (or Aquafaba), Fresh Nutmeg.",
    flavorProfile: "Spiced and silky. The powerful warmth of Allspice is expertly balanced against the botanical freshness of gin. A velvet-textured foam is topped with freshly grated nutmeg to echo the syrup’s aromatic depth.",
    tastingNotes: ["Spiced", "Silky", "Warm", "Botanical"]
  },
  {
    url: "https://images.unsplash.com/photo-1679685806190-7fd75c150c38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4Nj01ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Espresso Midnight",
    desc: "Vodka or Dark Rum, Espresso, Coffee Liqueur, Sea Salt, Tonka Bean Syrup.",
    flavorProfile: "A bold, modern Espresso Martini. A pinch of sea salt heightens the roasted coffee notes, while tonka bean syrup replaces standard sugar to introduce complex layers of vanilla and bitter almond.",
    tastingNotes: ["Intense", "Roasted", "Savory", "Complex"]
  },
  {
    url: "https://images.unsplash.com/photo-1683027922895-8022e129ae08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Rumshack",
    desc: "Rum Blend, Raspberry & Passion Fruit Purée, Lemon, Fresh Mint.",
    flavorProfile: "A refined crowd-pleaser that is both tropical and vibrant. A perfect balance of tart passion fruit and sweet raspberry, served with a fresh mint sprig rubbed on the rim for an immediate aromatic impact.",
    tastingNotes: ["Tropical", "Fruity", "Fresh", "Zesty"]
  },
  {
    url: "https://images.unsplash.com/photo-1638022380139-00dd53630102?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Golden Hive Fashioned",
    desc: "Bourbon or Rye Whiskey, Honey Syrup, Angostura Bitters, Smoked Rosemary.",
    flavorProfile: "A timeless classic reimagined with earthy, pastoral notes. Cold-diluted honey syrup melds with the warmth of the bourbon, while a smoked rosemary garnish adds a profound olfactory dimension.",
    tastingNotes: ["Honeyed", "Smoky", "Robust", "Woody"]
  },
  {
    url: "https://images.unsplash.com/photo-1543924483-97317fc27712?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBkYXJrJTIwY29ja3RhaWwlMjBnb2xkJTIwYWVzdGhldGljfGVufDB8fHx8MTc3MzQ4MTIwMnww&ixlib=rb-4.1.0&q=85",
    name: "Sakura Sake Martini",
    desc: "Sake Junmai Ginjo, Roku Gin, Cherry or Lychee Syrup, Hibiscus Flower.",
    flavorProfile: "Japanese minimalism in its purest form. The delicacy of Junmai Ginjo sake meets the unique botanicals of Roku Gin. A candied hibiscus flower rests at the bottom, offering an ethereal visual and a subtle sweet finish.",
    tastingNotes: ["Delicate", "Floral", "Dry", "Sophisticated"]
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
