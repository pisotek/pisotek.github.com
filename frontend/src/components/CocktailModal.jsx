import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export const CocktailModal = ({ cocktail, isOpen, onClose }) => {
  if (!cocktail) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-[#121212] border border-[#D4AF37]/30 max-w-3xl w-[95vw] p-0 overflow-hidden rounded-none [&>button]:text-[#A0A0A0] [&>button]:hover:text-[#D4AF37] [&>button]:top-5 [&>button]:right-5 [&>button]:z-20"
        data-testid="cocktail-modal"
      >
        <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <img
              src={cocktail.url}
              alt={cocktail.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#121212]/30" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <DialogHeader className="mb-6 space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase"
              >
                Signature Creation
              </motion.p>
              <DialogTitle className="font-heading text-2xl md:text-3xl text-[#EDEDED] text-left">
                {cocktail.name}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Details about {cocktail.name} cocktail
              </DialogDescription>
            </DialogHeader>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5"
            >
              <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2">
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
              className="mb-6"
            >
              <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2">
                Flavor Profile
              </h4>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">
                {cocktail.flavorProfile}
              </p>
            </motion.div>

            {/* Tasting Notes */}
            {cocktail.tastingNotes && cocktail.tastingNotes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-5 border-t border-white/10"
              >
                <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3">
                  Tasting Notes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cocktail.tastingNotes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs text-[#EDEDED] bg-[#D4AF37]/10 border border-[#D4AF37]/20"
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
