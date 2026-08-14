import React from 'react';
import { Product } from '../../types';
import { Eye, Send, MapPin, PackageCheck } from 'lucide-react';

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
    <div className="bg-[#242424] rounded-xl overflow-hidden border border-[#333333] hover:border-[#EFA721] transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover">
      
      {/* IMAGE & BADGES */}
      <div className="relative h-56 w-full overflow-hidden bg-[#1C1C1C]">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent opacity-60" />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 bg-[#1C1C1C]/90 backdrop-blur-md text-[#EFA721] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded uppercase border border-[#EFA721]/30">
          {product.category}
        </span>

        {/* ORIGIN BADGE */}
        <span className="absolute top-3 right-3 bg-[#141414]/90 text-gray-300 text-[10px] font-mono px-2.5 py-1 rounded flex items-center gap-1 border border-[#333333]">
          <MapPin className="w-3 h-3 text-[#EFA721]" />
          <span>{product.origin.split(',')[0]}</span>
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-[#EFA721] transition-colors line-clamp-1 font-heading">
            {product.name}
          </h3>
          
          <p className="text-xs text-gray-400 line-clamp-2 mt-1.5 leading-relaxed font-sans">
            {product.description}
          </p>
        </div>

        {/* SPEC HIGHLIGHTS */}
        <div className="pt-2 border-t border-[#333333] flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span className="flex items-center gap-1">
            <PackageCheck className="w-3.5 h-3.5 text-[#EFA721]" />
            <span>Type: {product.productType.split(' ')[0]}</span>
          </span>
          <span className="text-[#EFA721] font-bold">Export Grade</span>
        </div>

        {/* BUTTON ACTIONS */}
        <div className="pt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            className="flex items-center justify-center gap-1.5 bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white text-xs font-bold py-2.5 px-3 rounded border border-[#333333] hover:border-[#EFA721] transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#EFA721]" />
            <span>DETAILS</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenQuoteModal(product.name)}
            className="flex items-center justify-center gap-1.5 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] text-xs font-extrabold py-2.5 px-3 rounded transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>QUOTE</span>
          </button>
        </div>
      </div>

    </div>
  );
};
