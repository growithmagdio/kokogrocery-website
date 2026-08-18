import React from 'react';
import { Product } from '../../types';
import { X, Send, MapPin, CheckCircle2, Package, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

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
      
      <div className="relative bg-[#0B0C0E] border border-[#2D303E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#16171E] hover:bg-[#F59E0B] text-white hover:text-[#0B0C0E] flex items-center justify-center border border-[#2D303E] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* LEFT: IMAGE & SPECIFICATIONS */}
          <div className="space-y-4">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-[#16171E] border border-[#2D303E]">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                category={product.categorySlug}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#F59E0B] text-[#0B0C0E] text-xs font-extrabold px-3 py-1 rounded uppercase tracking-wider">
                EXPORT GRADE
              </div>
            </div>

            {/* QUICK SPEC BADGES */}
            <div className="bg-[#16171E] p-4 rounded-xl border border-[#2D303E] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-mono">Origin</span>
                <span className="text-white font-extrabold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  {product.origin}
                </span>
              </div>
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-mono">Product Type</span>
                <span className="text-white font-extrabold mt-0.5 block">{product.productType}</span>
              </div>
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-mono">Colour</span>
                <span className="text-[#F59E0B] font-extrabold mt-0.5 block">{product.colour}</span>
              </div>
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-mono">Pack Sizes</span>
                <span className="text-white font-extrabold mt-0.5 block">{product.packSizes.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS & SPECIFICATIONS */}
          <div className="space-y-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-widest bg-[#16171E] px-3 py-1 rounded border border-[#F59E0B]/40 inline-block">
                {product.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white uppercase mt-2">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-white/85 font-normal mt-2 leading-relaxed">
                {product.description}
              </p>

              {/* PRODUCT BRIEFING */}
              <div className="mt-4 bg-[#16171E] p-4 rounded-lg border border-[#2D303E]">
                <h4 className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Product Briefing
                </h4>
                <p className="text-xs text-white/80 font-normal mt-1 leading-relaxed">
                  {product.briefing}
                </p>
              </div>

              {/* UNIQUE SPECIAL FEATURES */}
              {product.specialFeatures && product.specialFeatures.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                    Special Features
                  </h4>
                  <ul className="space-y-1.5">
                    {product.specialFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/80 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FEATURES OF PACK */}
              {product.packFeatures && product.packFeatures.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-1">
                    <Package className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Packaging Specifications
                  </h4>
                  <ul className="space-y-1 text-xs text-white/80 font-normal">
                    {product.packFeatures.map((pack, idx) => (
                      <li key={idx} className="bg-[#16171E] px-3 py-1.5 rounded border border-[#2D303E]">
                        • {pack}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SENSORY SPECS */}
              <div className="mt-4 pt-4 border-t border-[#2D303E] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {product.aroma && (
                  <div className="bg-[#16171E] p-3 rounded border border-[#2D303E]">
                    <span className="text-white/60 text-[10px] block font-mono">Aroma Profile</span>
                    <span className="text-white font-extrabold">{product.aroma}</span>
                  </div>
                )}
                {product.texture && (
                  <div className="bg-[#16171E] p-3 rounded border border-[#2D303E]">
                    <span className="text-white/60 text-[10px] block font-mono">Texture</span>
                    <span className="text-white font-extrabold">{product.texture}</span>
                  </div>
                )}
              </div>

              {product.usage && (
                <div className="mt-3 bg-[#16171E] p-3 rounded border border-[#2D303E] text-xs">
                  <span className="text-[#F59E0B] font-extrabold block mb-0.5">Culinary & Industrial Usage:</span>
                  <p className="text-white/80 font-normal">{product.usage}</p>
                </div>
              )}

            </div>

            {/* CTA BUTTON */}
            <div className="pt-4 border-t border-[#2D303E]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(product.name);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs py-3.5 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST A QUOTE FOR THIS PRODUCT</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
