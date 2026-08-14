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
    <div className="py-12 bg-[#1C1C1C] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#2A2A2A] pb-8 mb-8">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30 mb-3">
            Complete Export Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            KOKO PRODUCT CATALOG
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl">
            Sourced directly from verified Indian agricultural manufacturers and compliant with international export standards.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-[#242424] p-4 sm:p-6 rounded-2xl border border-[#333333] mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name or origin..."
                className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-[#EFA721] absolute left-3.5 top-3" />
            </div>

            {/* CATEGORY FILTER */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Categories ({PRODUCTS.length} SKUs)</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name} ({cat.count} SKUs)
                  </option>
                ))}
              </select>
              <Filter className="w-4 h-4 text-[#EFA721] absolute right-3 top-3 pointer-events-none" />
            </div>

            {/* SORT BY */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-xl py-2.5 px-3 text-xs text-white focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="name">Sort by Name (A-Z)</option>
                <option value="category">Sort by Category</option>
                <option value="origin">Sort by Region / Origin</option>
              </select>
              <SlidersHorizontal className="w-4 h-4 text-[#EFA721] absolute right-3 top-3 pointer-events-none" />
            </div>

          </div>

          <div className="flex items-center justify-between pt-2 text-xs font-mono text-gray-400 border-t border-[#333333]">
            <span>Showing {visibleProducts.length} of {filteredProducts.length} matched SKUs</span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#EFA721] hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#242424] rounded-2xl border border-[#333333] space-y-3">
            <Package className="w-12 h-12 text-gray-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              No products match your current search terms or filter selection. Try clearing filters or searching for another term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setDisplayCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-[#242424] hover:bg-[#2A2A2A] text-[#EFA721] font-bold text-xs px-8 py-3.5 rounded-lg border border-[#EFA721]/40 hover:border-[#EFA721] transition-all shadow-md"
            >
              <span>LOAD MORE PRODUCTS ({filteredProducts.length - displayCount} REMAINING)</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
