import React from 'react';
import { Product } from '../../types';
import { Eye, Send, MapPin, Check } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#16171E] rounded-xl overflow-hidden border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover hover:-translate-y-1">
      
      {/* IMAGE CONTAINER */}
      <div className="relative h-56 w-full overflow-hidden bg-[#0B0C0E]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          category={product.categorySlug}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-80" />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 bg-[#0B0C0E]/95 text-[#F59E0B] text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded uppercase border border-[#F59E0B]/40">
          {product.category}
        </span>

        {/* ORIGIN BADGE */}
        <span className="absolute top-3 right-3 bg-[#0B0C0E]/95 text-white/80 text-[10px] font-mono px-2.5 py-1 rounded flex items-center gap-1 border border-[#2D303E]">
          <MapPin className="w-3 h-3 text-[#F59E0B]" />
          <span>{product.origin.split(',')[0]}</span>
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-sans font-extrabold text-white group-hover:text-[#F59E0B] transition-colors uppercase line-clamp-1">
            {product.name}
          </h3>

          <div className="w-8 h-0.5 bg-[#F59E0B]/40 my-2 group-hover:w-12 transition-all duration-300" />
          
          <p className="text-xs text-white/75 font-normal line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* EXPORT SPECIFICATIONS */}
        <div className="pt-2 border-t border-[#2D303E] flex items-center justify-between text-[11px] text-white/70 font-mono">
          <span className="flex items-center gap-1 text-[#F59E0B] font-bold">
            <Check className="w-3.5 h-3.5" />
            <span>AVAILABLE FOR EXPORT</span>
          </span>
          <span className="text-white/60">Grade A</span>
        </div>

        {/* BUTTON ACTIONS */}
        <div className="pt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="flex items-center justify-center gap-1.5 bg-[#0B0C0E] hover:bg-[#16171E] text-white text-xs font-bold py-2.5 px-3 rounded border border-[#2D303E] hover:border-[#F59E0B] transition-colors uppercase tracking-wider"
          >
            <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>DETAILS</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenQuoteModal(product.name)}
            className="flex items-center justify-center gap-1.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] text-xs font-extrabold py-2.5 px-3 rounded transition-colors shadow-sm uppercase tracking-wider"
          >
            <Send className="w-3.5 h-3.5" />
            <span>QUOTE</span>
          </button>
        </div>
      </div>

    </div>
  );
};
