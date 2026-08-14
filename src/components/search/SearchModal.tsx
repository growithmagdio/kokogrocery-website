import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/kokoData';
import { Product } from '../../types';

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
      
      <div className="relative bg-[#1C1C1C] border border-[#EFA721]/40 rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-white">
        
        {/* HEADER & INPUT */}
        <div className="relative flex items-center mb-4">
          <Search className="w-5 h-5 text-[#EFA721] absolute left-3 pointer-events-none" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products by name, category, or origin (e.g., Basmati, Chilli, Guntur)..."
            className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 p-1 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS */}
        <div className="max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-gray-500 font-mono">
              Start typing to search KOKO export catalog...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-gray-400 font-mono">
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
                className="flex items-center justify-between p-3 bg-[#242424] hover:bg-[#2A2A2A] rounded-xl border border-[#333333] hover:border-[#EFA721] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg bg-[#141414]"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#EFA721] transition-colors font-heading">
                      {product.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 block font-mono">
                      {product.category} • Origin: {product.origin}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#EFA721] font-bold">
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
