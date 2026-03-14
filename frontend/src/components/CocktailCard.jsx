import { motion } from 'framer-motion';

export const CocktailCard = ({ cocktail, index, isLarge = false, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`card-glass group cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
      onClick={onClick}
      data-testid={`cocktail-card-${index}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isLarge ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
        <img
          src={cocktail.url}
          alt={cocktail.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#D4AF37]/0 transition-all duration-300 group-hover:bg-[#D4AF37]/10" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-lg md:text-xl text-[#EDEDED] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {cocktail.name}
        </h3>
        <p className="text-[#A0A0A0] text-sm font-light leading-relaxed">
          {cocktail.desc}
        </p>
      </div>
    </motion.div>
  );
};
