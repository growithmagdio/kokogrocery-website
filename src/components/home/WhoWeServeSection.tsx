import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Hotel, Utensils, Warehouse, Sparkles, Layers, ShieldCheck, ShoppingBag } from 'lucide-react';

const SEGMENTS = [
  { title: 'IMPORTERS', desc: 'Direct container shipments and customized import management.', icon: Building2 },
  { title: 'WHOLESALERS', desc: 'Bulk supply of premium Indian grains, rice, and spices.', icon: Warehouse },
  { title: 'RETAIL CHAINS', desc: 'High-frequency packaging and shelf-ready product supply.', icon: Store },
  { title: 'SUPERMARKETS', desc: 'Consistent inventory delivery and private label branding.', icon: ShoppingBag },
  { title: 'HOTELS', desc: 'Bulk institutional packaging for luxury hospitality chains.', icon: Hotel },
  { title: 'RESTAURANTS', desc: 'Premium grade basmati rice, lentils, and authentic masalas.', icon: Utensils },
  { title: 'FOOD SERVICE', desc: 'Catering and institutional grade Indian food commodities.', icon: Layers },
  { title: 'DISTRIBUTORS', desc: 'Regional sole-distribution & master partner arrangements.', icon: Sparkles },
  { title: 'PRIVATE LABEL BRANDS', desc: 'Complete OEM sourcing, custom packing, and export labeling.', icon: ShieldCheck },
];

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16171E] border-b border-[#2D303E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            TARGET CLIENTELE
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Who We Serve Globally
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            We partner with international trade entities, commercial buyers, and retail enterprises across global markets.
          </p>
        </div>

        {/* B2B CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEGMENTS.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#0B0C0E] border border-[#2D303E] hover:border-[#F59E0B] p-6 rounded-xl transition-all duration-300 group hover:shadow-card-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#16171E] border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold tracking-widest text-white mb-1 uppercase group-hover:text-[#F59E0B] transition-colors">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-white/75 font-normal leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
