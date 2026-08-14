import React from 'react';
import { ShieldCheck, HeartHandshake, Globe, Briefcase, Award, Truck } from 'lucide-react';
import { WHY_KOKO_FEATURES } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const WhyKokoSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    HeartHandshake,
    Globe,
    Briefcase,
    Award,
    Truck,
  };

  return (
    <section className="py-24 bg-[#1C1C1C] border-b border-[#2A2A2A] relative overflow-hidden">
      
      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFA721]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Strategic Export Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            WHY KOKO
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            We simplify international trade by providing end-to-end export management and trusted sourcing solutions.
          </p>
        </div>

        {/* 6 FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_KOKO_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || ShieldCheck;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#242424] p-8 rounded-2xl border border-[#333333] hover:border-[#EFA721] transition-all duration-300 group hover:-translate-y-2 hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl bg-[#1C1C1C] border border-[#333333] group-hover:border-[#EFA721] group-hover:bg-[#EFA721] flex items-center justify-center mb-6 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-[#EFA721] group-hover:text-[#1C1C1C] transition-colors" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#EFA721] transition-colors tracking-wide">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#333333] flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span>KOKO Core Principle</span>
                  <span className="text-[#EFA721] font-bold">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
