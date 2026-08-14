import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../../data/kokoData';
import { ArrowRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductPortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].slug);

  const activeCategory = CATEGORIES.find((c) => c.slug === activeTab) || CATEGORIES[0];
  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === activeTab || p.category.toLowerCase().includes(activeCategory.name.toLowerCase()));

  return (
    <section className="py-24 bg-[#1C1C1C] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Export Range
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            PRODUCT PORTFOLIO
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            High quality agricultural products processed, sorted, and packed for global food importers.
          </p>
        </div>

        {/* HORIZONTAL CATEGORY SELECTOR TABS */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#333333]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.slug)}
              className={`px-6 py-3 rounded-xl font-heading font-extrabold text-sm tracking-wider uppercase transition-all duration-300 shrink-0 ${
                activeTab === cat.slug
                  ? 'bg-[#EFA721] text-[#1C1C1C] shadow-gold-sm scale-105'
                  : 'bg-[#242424] text-gray-300 hover:text-white border border-[#333333]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* DISPLAY SHOWCASE */}
        <div className="bg-[#242424] rounded-2xl border border-[#333333] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* IMAGE */}
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-[#1C1C1C] border border-[#333333]">
            <img
              src={activeCategory.image}
              alt={activeCategory.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 bg-[#1C1C1C]/90 text-[#EFA721] font-mono text-xs font-bold px-3 py-1.5 rounded border border-[#EFA721]/30">
              {activeCategory.count} Verified SKUs
            </div>
          </div>

          {/* DETAILS & DESCRIPTION */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#EFA721] uppercase tracking-widest block mb-1">
                Category Overview
              </span>
              <h3 className="text-3xl font-extrabold font-heading text-white">
                {activeCategory.name}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            {/* FEATURED PRODUCTS IN THIS CATEGORY */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Sample Featured SKUs:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryProducts.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="bg-[#1C1C1C] p-3 rounded-lg border border-[#333333] flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-white line-clamp-1">{p.name}</span>
                    <span className="text-[#EFA721] font-mono shrink-0 ml-2">{p.origin.split(',')[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION */}
            <div className="pt-4">
              <Link
                to={`/categories?slug=${activeCategory.slug}`}
                className="inline-flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-xs px-6 py-3 rounded-lg btn-gold-glow transition-all"
              >
                <span>EXPLORE ALL {activeCategory.name.toUpperCase()} PRODUCTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
