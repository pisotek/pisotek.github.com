import { X } from 'lucide-react';
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
        className="bg-[#0A0A0A] border border-[#D4AF37]/30 max-w-4xl w-[95vw] max-h-[90vh] p-0 overflow-hidden [&>button]:hidden"
        data-testid="cocktail-modal"
      >
        {/* Scrollable wrapper */}
        <div className="relative max-h-[90vh] overflow-y-auto">
          {/* Sticky Close Button */}
          <div className="sticky top-0 z-50 flex justify-end p-3 bg-gradient-to-b from-[#0A0A0A] to-transparent">
            <button
              onClick={() => onClose(false)}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] bg-[#0A0A0A] rounded-full border border-[#D4AF37]/50 transition-colors shadow-lg"
              data-testid="modal-close-btn"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row -mt-12 md:mt-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="aspect-square md:aspect-auto md:h-full md:min-h-[500px] relative">
                <img
                  src={cocktail.url}
                  alt={cocktail.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#0A0A0A]">
              <DialogHeader className="mb-6 space-y-2">
                <p className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-medium">
                  Signature Creation
                </p>
                <DialogTitle className="font-heading text-2xl md:text-3xl text-[#EDEDED] text-left leading-tight">
                  {cocktail.name}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Details about {cocktail.name} cocktail
                </DialogDescription>
              </DialogHeader>

              {/* Ingredients */}
              <div className="mb-6">
                <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3 font-medium">
                  Ingredients
                </h4>
                <p className="text-[#EDEDED] text-sm leading-relaxed">
                  {cocktail.desc}
                </p>
              </div>

              {/* Flavor Profile */}
              <div className="mb-6">
                <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3 font-medium">
                  Flavor Profile
                </h4>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                  {cocktail.flavorProfile}
                </p>
              </div>

              {/* Tasting Notes */}
              {cocktail.tastingNotes && cocktail.tastingNotes.length > 0 && (
                <div className="pt-6 border-t border-[#D4AF37]/20">
                  <h4 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                    Tasting Notes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cocktail.tastingNotes.map((note, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-xs text-[#EDEDED] bg-[#D4AF37]/10 border border-[#D4AF37]/30 tracking-wide"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
