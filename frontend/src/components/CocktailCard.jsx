import { motion } from 'framer-motion';

export const CocktailCard = ({ cocktail, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card-glass group cursor-pointer overflow-hidden"
      onClick={onClick}
      data-testid={`cocktail-card-${index}`}
    >
      {/* Image Container - Same aspect ratio for all */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={cocktail.url}
          alt={cocktail.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-[#D4AF37]/0 transition-colors duration-300 group-hover:bg-[#D4AF37]/5" />
        
        {/* View Details Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 text-xs tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/50 bg-[#0A0A0A]/80 backdrop-blur-sm">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading text-base lg:text-lg text-[#EDEDED] mb-1 group-hover:text-[#D4AF37] transition-colors duration-300 truncate">
          {cocktail.name}
        </h3>
        <p className="text-[#A0A0A0] text-xs lg:text-sm font-light leading-relaxed line-clamp-2">
          {cocktail.desc}
        </p>
      </div>
    </motion.div>
  );
};
