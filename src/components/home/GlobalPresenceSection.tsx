import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import { GLOBAL_MARKETS } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#141414] border-b border-[#2A2A2A] relative overflow-hidden">
      
      {/* AMBIENT MAP GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EFA721]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Global Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            INDIA TO THE WORLD
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Building strong relationships with buyers, importers, and distributors across key international markets.
          </p>
        </div>

        {/* INTERACTIVE GLOBAL MARKETS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {GLOBAL_MARKETS.map((market, idx) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#1C1C1C] p-6 rounded-2xl border border-[#333333] hover:border-[#EFA721] transition-all duration-300 group hover:shadow-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EFA721]/10 border border-[#EFA721]/40 flex items-center justify-center text-[#EFA721] group-hover:bg-[#EFA721] group-hover:text-[#1C1C1C] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-[#242424] px-2 py-0.5 rounded uppercase">
                    {market.region}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#EFA721] transition-colors">
                  {market.country}
                </h3>

                <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {market.highlights}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2A2A2A] flex items-center gap-1.5 text-[11px] text-[#EFA721] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#EFA721] animate-ping" />
                <span>Active Export Line</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULL GLOBAL PRESENCE LINK */}
        <div className="mt-12 text-center">
          <Link
            to="/global-presence"
            className="inline-flex items-center gap-2 bg-[#242424] hover:bg-[#2A2A2A] text-[#EFA721] font-bold text-xs px-6 py-3.5 rounded-lg border border-[#EFA721]/40 hover:border-[#EFA721] transition-all"
          >
            <Globe className="w-4 h-4" />
            <span>EXPLORE FULL GLOBAL DISTRIBUTION NETWORK</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
