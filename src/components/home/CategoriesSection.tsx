import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/kokoData';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0C0E] border-b border-[#2D303E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            WHAT WE EXPORT
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Indian Export Product Portfolio
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Explore our core export categories prepared for international distribution, bulk supply, and private labeling.
          </p>
        </div>

        {/* 8 EDITORIAL CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="group relative block bg-[#16171E] rounded-xl overflow-hidden border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-card-hover flex flex-col h-full justify-between"
              >
                {/* CATEGORY IMAGE */}
                <div className="relative h-60 w-full overflow-hidden">
                  <ImageWithFallback
                    src={cat.image}
                    alt={cat.name}
                    category={cat.slug}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
                  
                  {/* EXPORT BADGE */}
                  <div className="absolute top-4 left-4 bg-[#0B0C0E]/90 backdrop-blur-md text-[#F59E0B] text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded border border-[#F59E0B]/40">
                    AVAILABLE FOR EXPORT
                  </div>

                  <div className="absolute bottom-3 right-4 text-[11px] font-mono text-white/70">
                    {cat.count} SKUs
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-sans font-extrabold text-white uppercase group-hover:text-[#F59E0B] transition-colors">
                      {cat.name}
                    </h3>

                    <div className="w-8 h-0.5 bg-[#F59E0B]/40 my-3 group-hover:w-16 transition-all duration-300" />

                    <p className="text-xs text-white/75 font-normal leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-extrabold text-[#F59E0B] uppercase tracking-wider group-hover:text-[#FBBF24]">
                    <span>VIEW CATEGORY</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
