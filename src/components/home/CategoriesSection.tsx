import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1C1C1C] border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Export Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            EXPLORE OUR PRODUCTS
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Premium Indian food products sourced for global markets.
          </p>
        </div>

        {/* 8 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Link
                to={`/categories?slug=${cat.slug}`}
                className="group relative block bg-[#242424] rounded-xl overflow-hidden border border-[#333333] hover:border-[#EFA721] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-card-hover"
              >
                {/* CATEGORY IMAGE CONTAINER */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent" />
                  
                  {/* COUNT BADGE */}
                  <div className="absolute top-3 right-3 bg-[#1C1C1C]/90 backdrop-blur-md text-[#EFA721] text-xs font-mono font-bold px-2.5 py-1 rounded border border-[#EFA721]/40">
                    {cat.count} SKUs
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#EFA721] transition-colors font-heading">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-1 mt-1 font-sans">
                      {cat.description}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#333333] group-hover:border-[#EFA721] group-hover:bg-[#EFA721] flex items-center justify-center transition-all duration-300 shrink-0 ml-2">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#1C1C1C] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* BOTTOM GOLD HOVER BORDER STRIP */}
                <div className="h-1 w-0 bg-[#EFA721] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
