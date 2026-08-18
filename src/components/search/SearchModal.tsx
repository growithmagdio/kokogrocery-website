import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/kokoData';
import { Product } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.origin.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative bg-[#0B0C0E] border border-[#2D303E] rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-white">
        
        {/* HEADER & INPUT */}
        <div className="relative flex items-center mb-4">
          <Search className="w-5 h-5 text-[#F59E0B] absolute left-3 pointer-events-none" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products by name, category, or origin..."
            className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-xl py-3 pl-10 pr-10 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 p-1 text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS */}
        <div className="max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-white/50 font-mono">
              Start typing to search KOKO export catalogue...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-white/60 font-mono">
              No export SKUs matching "{query}" found.
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onClose();
                  onSelectProduct(product);
                }}
                className="flex items-center justify-between p-3 bg-[#16171E] hover:bg-[#0B0C0E] rounded-xl border border-[#2D303E] hover:border-[#F59E0B] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    category={product.categorySlug}
                    className="w-12 h-12 object-cover rounded-lg bg-[#0B0C0E]"
                  />
                  <div>
                    <h4 className="text-xs font-sans font-extrabold text-white group-hover:text-[#F59E0B] transition-colors uppercase">
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-white/60 block font-mono">
                      {product.category} • Origin: {product.origin}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#F59E0B] font-extrabold uppercase tracking-wider">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};
