import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/kokoData';
import { Product } from '../types';
import { ProductCard } from '../components/product/ProductCard';
import { ArrowLeft, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

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
    <div className="py-16 bg-[#0B0C0E] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP NAV & BACK LINK */}
        <div className="mb-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B] font-extrabold hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Export Products</span>
          </Link>
        </div>

        {/* CATEGORY SELECTOR PILLS */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 border-b border-[#2D303E]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSearchParams({ slug: cat.slug })}
              className={`px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 ${
                currentSlug === cat.slug
                  ? 'bg-[#F59E0B] text-[#0B0C0E] shadow-gold-sm scale-105'
                  : 'bg-[#16171E] text-white/80 hover:text-white border border-[#2D303E]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* CATEGORY HEADER BANNER */}
        <div className="relative rounded-2xl overflow-hidden bg-[#16171E] border border-[#2D303E] mb-12 h-64 sm:h-72 shadow-2xl">
          <ImageWithFallback
            src={currentCategory.image}
            alt={currentCategory.name}
            category={currentCategory.slug}
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="text-xs font-mono font-extrabold text-[#F59E0B] uppercase tracking-widest bg-[#0B0C0E]/90 px-3 py-1 rounded border border-[#F59E0B]/40 inline-block">
              {currentCategory.count} Export SKUs Available
            </span>
            <h1 className="text-3xl sm:text-5xl font-sans text-white font-extrabold uppercase tracking-tight">
              {currentCategory.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/85 max-w-xl font-normal leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* CATEGORY PRODUCT GRID */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#16171E] rounded-2xl border border-[#2D303E] space-y-3">
            <Package className="w-12 h-12 text-[#F59E0B]/60 mx-auto" />
            <h3 className="text-xl font-sans font-extrabold text-white uppercase">No products in this category yet</h3>
            <p className="text-xs text-white/70 max-w-sm mx-auto font-normal">
              Check back soon or request custom sourcing for {currentCategory.name}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
