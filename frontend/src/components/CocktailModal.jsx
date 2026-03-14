import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { X } from 'lucide-react';

export const CocktailModal = ({ cocktail, isOpen, onClose }) => {
  if (!cocktail) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-[#121212] border border-[#D4AF37]/30 max-w-2xl p-0 overflow-hidden"
        data-testid="cocktail-modal"
      >
        {/* Close Button */}
        <button
          onClick={() => onClose(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
          data-testid="modal-close-btn"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img
              src={cocktail.url}
              alt={cocktail.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <DialogHeader className="mb-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-2"
              >
                Signature Creation
              </motion.p>
              <DialogTitle className="font-heading text-2xl md:text-3xl text-[#EDEDED]">
                {cocktail.name}
              </DialogTitle>
            </DialogHeader>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3">
                Ingredients
              </h4>
              <p className="text-[#EDEDED] text-sm leading-relaxed">
                {cocktail.desc}
              </p>
            </motion.div>

            {/* Flavor Profile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3">
                Flavor Profile
              </h4>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {cocktail.flavorProfile}
              </p>
            </motion.div>

            {/* Tasting Notes */}
            {cocktail.tastingNotes && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-white/10"
              >
                <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3">
                  Tasting Notes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cocktail.tastingNotes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs text-[#EDEDED] bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
