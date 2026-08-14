import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/kokoData';
import { Product } from '../types';
import { ProductCard } from '../components/product/ProductCard';
import { ArrowLeft, Package } from 'lucide-react';

interface CategoriesPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSlug = searchParams.get('slug') || CATEGORIES[0].slug;

  const currentCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.slug === currentSlug) || CATEGORIES[0];
  }, [currentSlug]);

  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        p.categorySlug === currentSlug ||
        p.category.toLowerCase().includes(currentCategory.name.toLowerCase()) ||
        currentCategory.name.toLowerCase().includes(p.category.toLowerCase())
    );
  }, [currentSlug, currentCategory]);

  return (
    <div className="py-12 bg-[#1C1C1C] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP NAV & BACK LINK */}
        <div className="mb-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-[#EFA721] font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* CATEGORY SELECTOR PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#2A2A2A]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSearchParams({ slug: cat.slug })}
              className={`px-5 py-2.5 rounded-xl font-heading font-extrabold text-xs tracking-wider uppercase transition-all shrink-0 ${
                currentSlug === cat.slug
                  ? 'bg-[#EFA721] text-[#1C1C1C] shadow-gold-sm scale-105'
                  : 'bg-[#242424] text-gray-300 hover:text-white border border-[#333333]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* CATEGORY HEADER BANNER */}
        <div className="relative rounded-2xl overflow-hidden bg-[#242424] border border-[#333333] mb-10 h-64 sm:h-72">
          <img
            src={currentCategory.image}
            alt={currentCategory.name}
            className="w-full h-full object-cover object-center opacity-40 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="text-xs font-mono font-bold text-[#EFA721] uppercase tracking-widest bg-[#1C1C1C]/80 px-2.5 py-1 rounded border border-[#EFA721]/30">
              {currentCategory.count} Export SKUs Available
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {currentCategory.name.toUpperCase()}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* CATEGORY PRODUCT GRID */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#242424] rounded-2xl border border-[#333333] space-y-3">
            <Package className="w-12 h-12 text-gray-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No products in this category yet</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Check back soon or request custom sourcing for {currentCategory.name}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
