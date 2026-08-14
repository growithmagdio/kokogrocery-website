import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#141414] border-b border-[#2A2A2A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden border border-[#333333] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
                alt="Indian Food Export Quality"
                className="w-full h-full object-cover object-center filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

              {/* OVERLAY BADGE */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C1C]/90 backdrop-blur-md p-5 rounded-xl border border-[#EFA721]/40 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-[#EFA721] font-mono font-bold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Headquartered in Chennai, Tamil Nadu
                  </span>
                  <span className="bg-[#EFA721] text-[#1C1C1C] px-2 py-0.5 rounded text-[10px]">
                    ESTABLISHED BRAND
                  </span>
                </div>
                <p className="text-xs text-gray-300">
                  Bridging India's leading manufacturers with international importers, supermarket chains, and distributors worldwide.
                </p>
              </div>
            </div>

            {/* DECORATIVE CORNER BADGE */}
            <div className="absolute -top-6 -right-6 hidden sm:flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-[#EFA721] text-[#1C1C1C] font-extrabold text-center p-2 shadow-gold-md animate-float">
              <span className="text-2xl font-heading leading-none">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-tight mt-1">Export Quality Sourced</span>
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
              About KOKO Global Distributor
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              CONNECTING INDIA TO GLOBAL MARKETS
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              {ABOUT_CONTENT.introParagraphs[0]}
            </p>

            {/* WHAT WE DO KEY SERVICES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_CONTENT.whatWeDo.services.slice(0, 4).map((service) => (
                <div
                  key={service.title}
                  className="bg-[#1C1C1C] p-3.5 rounded-xl border border-[#2A2A2A] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#EFA721] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white font-heading">{service.title}</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-8 py-3.5 rounded-lg btn-gold-glow transition-all"
              >
                <span>READ OUR STORY & BUSINESS PHILOSOPHY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
