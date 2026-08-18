import React from 'react';
import { ShieldCheck, HeartHandshake, Users, Globe, Briefcase, Award, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const EDITORIAL_PILLARS = [
  {
    title: 'TRUST',
    headline: 'Transparent Relationships',
    desc: 'Ethical, clear, and dependable commercial practices built on integrity, honest communication, and transparent trade terms.',
    icon: HeartHandshake,
  },
  {
    title: 'QUALITY',
    headline: 'Reliable Products & Sourcing',
    desc: 'Strict multi-tier batch inspections, moisture control, and lab verification ensuring products meet stringent destination standards.',
    icon: ShieldCheck,
  },
  {
    title: 'PARTNERSHIP',
    headline: 'Long-Term Global Relationships',
    desc: 'Working closely with international buyers, importers, and retail distributors to foster multi-year growth and dependable supply.',
    icon: Users,
  },
];

export const WhyKokoSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0C0E] border-b border-[#2D303E] relative overflow-hidden">
      
      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F59E0B]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            OUR CORE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Why KOKO Global Distributor
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Founded on three fundamental pillars that define every trade engagement and long-term buyer relationship.
          </p>
        </div>

        {/* 3 LARGE EDITORIAL BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#16171E] p-8 rounded-2xl border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 group hover:-translate-y-2 hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase">
                      PILLAR 0{idx + 1}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0B0C0E] border border-[#2D303E] text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-sans font-extrabold text-white mb-2 tracking-wide uppercase">
                    {pillar.title}
                  </h3>

                  <h4 className="text-sm font-bold text-[#F59E0B] mb-4">
                    {pillar.headline}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2D303E]">
                  <div className="w-8 h-0.5 bg-[#F59E0B]/40 group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
