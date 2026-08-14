import React from 'react';
import { Product } from '../../types';
import { X, Send, MapPin, CheckCircle2, Package, Sparkles, Droplets, Flame, Tag } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative bg-[#1C1C1C] border border-[#EFA721]/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#242424] hover:bg-[#EFA721] text-gray-300 hover:text-[#1C1C1C] flex items-center justify-center border border-[#333333] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* LEFT: IMAGE & GALLERY */}
          <div className="space-y-4">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-[#141414] border border-[#333333]">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#EFA721] text-[#1C1C1C] text-xs font-extrabold px-3 py-1 rounded">
                EXPORT GRADE
              </div>
            </div>

            {/* QUICK SPEC BADGES */}
            <div className="bg-[#242424] p-4 rounded-xl border border-[#333333] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono">Origin</span>
                <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EFA721]" />
                  {product.origin}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono">Product Type</span>
                <span className="text-white font-bold mt-0.5 block">{product.productType}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono">Colour</span>
                <span className="text-[#EFA721] font-bold mt-0.5 block">{product.colour}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-mono">Pack Sizes</span>
                <span className="text-white font-bold mt-0.5 block">{product.packSizes.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS & EXCEL SPECIFICATIONS */}
          <div className="space-y-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#EFA721] uppercase tracking-wider bg-[#242424] px-2.5 py-1 rounded border border-[#EFA721]/30">
                {product.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-2">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* PRODUCT BRIEFING */}
              <div className="mt-4 bg-[#242424] p-3.5 rounded-lg border border-[#333333]">
                <h4 className="text-xs font-bold text-[#EFA721] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Product Briefing
                </h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {product.briefing}
                </p>
              </div>

              {/* UNIQUE SPECIAL FEATURES */}
              {product.specialFeatures && product.specialFeatures.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Unique Special Features
                  </h4>
                  <ul className="space-y-1.5">
                    {product.specialFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#EFA721] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FEATURES OF PACK */}
              {product.packFeatures && product.packFeatures.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Package className="w-3.5 h-3.5 text-[#EFA721]" />
                    Features of Pack
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    {product.packFeatures.map((pack, idx) => (
                      <li key={idx} className="bg-[#242424] px-2.5 py-1.5 rounded border border-[#333333]">
                        • {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SENSORY SPECS (AROMA, TEXTURE, USAGE) */}
              <div className="mt-4 pt-4 border-t border-[#333333] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {product.aroma && (
                  <div className="bg-[#141414] p-2.5 rounded border border-[#2A2A2A]">
                    <span className="text-gray-400 text-[10px] block font-mono">Aroma Profile</span>
                    <span className="text-white font-medium">{product.aroma}</span>
                  </div>
                )}
                {product.texture && (
                  <div className="bg-[#141414] p-2.5 rounded border border-[#2A2A2A]">
                    <span className="text-gray-400 text-[10px] block font-mono">Texture</span>
                    <span className="text-white font-medium">{product.texture}</span>
                  </div>
                )}
              </div>

              {product.usage && (
                <div className="mt-3 bg-[#141414] p-3 rounded border border-[#2A2A2A] text-xs">
                  <span className="text-[#EFA721] font-bold block mb-0.5">Recommended Culinary Usage:</span>
                  <p className="text-gray-300">{product.usage}</p>
                </div>
              )}

            </div>

            {/* CTA BUTTON */}
            <div className="pt-4 border-t border-[#333333]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(product.name);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm py-3.5 rounded-lg btn-gold-glow transition-all"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST A B2B QUOTE FOR THIS PRODUCT</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
