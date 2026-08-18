import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/kokoData';
import { Product } from '../types';
import { ProductCard } from '../components/product/ProductCard';
import { Search, Filter, SlidersHorizontal, Package, RefreshCw } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'category' | 'origin'>('name');
  const [displayCount, setDisplayCount] = useState(12);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        product.categorySlug === selectedCategory ||
        product.category.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      if (sortBy === 'origin') return a.origin.localeCompare(b.origin);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const visibleProducts = filteredProducts.slice(0, displayCount);

  return (
    <div className="py-16 bg-[#0B0C0E] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#2D303E] pb-8 mb-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase block mb-2">
            INDIAN EXPORT CATALOGUE
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans text-white font-extrabold tracking-tight uppercase">
            Indian Product Catalogue
          </h1>
          <p className="text-sm text-white/80 mt-2 max-w-2xl font-normal leading-relaxed">
            Sourced directly from verified Indian agricultural manufacturers and compliant with international export & phytosanitary standards.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-[#16171E] p-6 rounded-2xl border border-[#2D303E] mb-10 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name or origin..."
                className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
            </div>

            {/* CATEGORY FILTER */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Export Categories ({PRODUCTS.length} SKUs)</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name} ({cat.count} SKUs)
                  </option>
                ))}
              </select>
              <Filter className="w-4 h-4 text-[#F59E0B] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            {/* SORT BY */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-xl py-3 px-4 text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="name">Sort by Product Name (A-Z)</option>
                <option value="category">Sort by Category</option>
                <option value="origin">Sort by Region / Origin</option>
              </select>
              <SlidersHorizontal className="w-4 h-4 text-[#F59E0B] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

          </div>

          <div className="flex items-center justify-between pt-3 text-xs font-mono text-white/70 border-t border-[#2D303E]">
            <span>Showing {visibleProducts.length} of {filteredProducts.length} matched export SKUs</span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#F59E0B] hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px] font-extrabold"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#16171E] rounded-2xl border border-[#2D303E] space-y-3">
            <Package className="w-12 h-12 text-[#F59E0B]/60 mx-auto" />
            <h3 className="text-xl font-sans text-white font-extrabold uppercase">No matching export products found</h3>
            <p className="text-xs text-white/70 max-w-sm mx-auto font-normal">
              No items match your current filter parameters. Reset your search or select another product category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {displayCount < filteredProducts.length && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setDisplayCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-[#16171E] hover:bg-[#0B0C0E] text-[#F59E0B] font-extrabold text-xs px-8 py-4 rounded-md border border-[#F59E0B]/40 hover:border-[#F59E0B] transition-all uppercase tracking-wider shadow-md"
            >
              <span>LOAD MORE PRODUCTS ({filteredProducts.length - displayCount} REMAINING)</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
