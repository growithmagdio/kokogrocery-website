import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { PRODUCTS, CATEGORIES } from '../../data/kokoData';
import { ProductCard } from '../product/ProductCard';
import { ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredProducts = selectedCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === selectedCat || p.category.toLowerCase().includes(selectedCat.toLowerCase()));

  return (
    <section className="py-20 bg-[#141414] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
              Verified Product Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              FROM INDIA, FOR THE WORLD
            </h2>
            <p className="text-sm text-gray-400 max-w-xl">
              Authentic Indian food items sourced directly from certified manufacturing partners across major agricultural regions.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#242424] text-[#EFA721] font-bold text-xs px-5 py-3 rounded-lg border border-[#EFA721]/40 hover:border-[#EFA721] transition-all self-start md:self-auto"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCat('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCat === 'all'
                ? 'bg-[#EFA721] text-[#1C1C1C] shadow-gold-sm'
                : 'bg-[#242424] text-gray-300 hover:text-white border border-[#333333]'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCat(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === cat.slug
                  ? 'bg-[#EFA721] text-[#1C1C1C] shadow-gold-sm'
                  : 'bg-[#242424] text-gray-300 hover:text-white border border-[#333333]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
                onOpenQuoteModal={onOpenQuoteModal}
              />
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL FOOTER CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-8 py-3.5 rounded-lg btn-gold-glow transition-all"
          >
            <span>BROWSE COMPLETE EXPORT CATALOG ({PRODUCTS.length} SKUs)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
