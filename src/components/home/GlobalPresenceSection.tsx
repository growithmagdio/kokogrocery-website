import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, ArrowRight, Plane, Ship } from 'lucide-react';
import { GLOBAL_MARKETS } from '../../data/kokoData';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { WorldMapGraphic } from './WorldMapGraphic';

export const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16171E] border-b border-[#2D303E] relative overflow-hidden">
      
      {/* AMBIENT MAP GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F59E0B]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            GLOBAL REACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            From India to the World
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Connecting premium Indian agricultural producers directly with international importers, food service buyers, and distributor networks across key global destinations.
          </p>
        </div>

        {/* ELEGANT WORLD NETWORK MAP REPRESENTATION */}
        <div className="relative bg-[#0B0C0E]/90 border border-[#2D303E] rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-[#2D303E]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0B0C0E] font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-extrabold text-white uppercase">
                  Primary Origin: India
                </h3>
                <p className="text-xs text-[#F59E0B] font-bold">
                  Port of Chennai • Tuticorin • Mundra • JNPT Export Hubs
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-white/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
                Active Export Trade Routes
              </span>
              <span className="flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-[#F59E0B]" /> Sea Freight
              </span>
              <span className="flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-[#FBBF24]" /> Air Express
              </span>
            </div>
          </div>

          {/* VISUAL WORLD MAP SVG CONNECTIVITY GRAPHIC */}
          <WorldMapGraphic />
        </div>

        {/* JAPAN & KUWAIT FEATURED B2B MARKET CARDS */}
        <div className="mb-16 space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white uppercase">
              Key Verified Export Destinations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* JAPAN B2B MARKET CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0B0C0E] rounded-2xl overflow-hidden border border-[#F59E0B]/40 hover:border-[#F59E0B] transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop"
                  alt="India to Japan Export Route"
                  category="default"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#0B0C0E]/90 text-[#F59E0B] text-xs font-extrabold px-3 py-1 rounded border border-[#F59E0B]/40 uppercase tracking-widest">
                  INDIA → JAPAN
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h4 className="text-2xl font-sans text-white font-extrabold uppercase">
                  Japan Export Line
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                  Exporting premium Indian rice varieties (Ponni, Idly Rice, Seeraga Samba), spices, and traditional food products tailored to Japanese phytosanitary and custom labeling standards.
                </p>
                <div className="pt-3 border-t border-[#2D303E] flex items-center justify-between">
                  <span className="text-[11px] text-[#F59E0B] font-extrabold uppercase tracking-wider">
                    ACTIVE B2B MARKET
                  </span>
                  <Link
                    to="/global-presence"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white group-hover:text-[#F59E0B] transition-colors uppercase tracking-wider"
                  >
                    <span>EXPLORE MARKET</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* KUWAIT B2B MARKET CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#0B0C0E] rounded-2xl overflow-hidden border border-[#F59E0B]/40 hover:border-[#F59E0B] transition-all shadow-xl group flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800&auto=format&fit=crop"
                  alt="India to Kuwait Export Route"
                  category="default"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#0B0C0E]/90 text-[#F59E0B] text-xs font-extrabold px-3 py-1 rounded border border-[#F59E0B]/40 uppercase tracking-widest">
                  INDIA → KUWAIT
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h4 className="text-2xl font-sans text-white font-extrabold uppercase">
                  Kuwait Export Line
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                  Bulk shipment of Indian spices, Basmati rice, pulses, and grocery commodities directly to Kuwaiti food distributors, supermarket chains, and food service partners.
                </p>
                <div className="pt-3 border-t border-[#2D303E] flex items-center justify-between">
                  <span className="text-[11px] text-[#F59E0B] font-extrabold uppercase tracking-wider">
                    ACTIVE B2B MARKET
                  </span>
                  <Link
                    to="/global-presence"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white group-hover:text-[#F59E0B] transition-colors uppercase tracking-wider"
                  >
                    <span>EXPLORE MARKET</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ACTIVE GLOBAL MARKETS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {GLOBAL_MARKETS.map((market, idx) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#0B0C0E] p-5 rounded-xl border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 group hover:shadow-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#16171E] border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-white/60 bg-[#16171E] px-2 py-0.5 rounded uppercase">
                    {market.region}
                  </span>
                </div>

                <h4 className="text-base font-sans font-extrabold text-white uppercase group-hover:text-[#F59E0B] transition-colors">
                  {market.country}
                </h4>

                <p className="text-xs text-white/70 mt-1 line-clamp-2 font-normal">
                  {market.highlights}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2D303E] flex items-center gap-1.5 text-[10px] text-[#F59E0B] font-extrabold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                <span>ACTIVE NETWORK</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULL GLOBAL PRESENCE LINK */}
        <div className="mt-12 text-center">
          <Link
            to="/global-presence"
            className="inline-flex items-center gap-2 bg-[#0B0C0E] hover:bg-[#16171E] text-[#F59E0B] font-extrabold text-xs px-8 py-4 rounded-md border border-[#F59E0B]/40 hover:border-[#F59E0B] transition-all uppercase tracking-wider"
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
