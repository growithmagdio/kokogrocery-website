import React from 'react';
import { ABOUT_CONTENT } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const BusinessPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#1C1C1C] border-b border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Core Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            OUR BUSINESS PHILOSOPHY
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {ABOUT_CONTENT.businessPhilosophy.intro}
          </p>
        </div>

        {/* 3 LARGE PREMIUM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_CONTENT.businessPhilosophy.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#242424] p-8 sm:p-10 rounded-2xl border border-[#333333] hover:border-[#EFA721] transition-all duration-300 group hover:-translate-y-2 hover:shadow-card-hover flex flex-col justify-between"
            >
              <div>
                {/* NUMBER */}
                <div className="text-5xl sm:text-6xl font-extrabold font-heading text-[#EFA721] tracking-wider mb-6 group-hover:scale-105 transition-transform">
                  {pillar.number}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-extrabold font-heading text-white tracking-wide group-hover:text-[#EFA721] transition-colors">
                  {pillar.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-300 mt-4 leading-relaxed font-sans">
                  "{pillar.description}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#333333] flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>FOUNDATIONAL PILLAR</span>
                <span className="w-2 h-2 rounded-full bg-[#EFA721]"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
