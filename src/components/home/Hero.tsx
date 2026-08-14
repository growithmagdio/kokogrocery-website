import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1C1C1C] overflow-hidden py-16 lg:py-24 border-b border-[#2A2A2A]">
      
      {/* BACKGROUND IMAGE WITH PREMIUM OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop"
          alt="Indian Spices Background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter contrast-125 saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-transparent to-[#1C1C1C]" />
      </div>

      {/* FLOATING DECORATIVE GLOW SPHERES */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#EFA721]/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EFA721]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#242424] border border-[#EFA721]/40 text-[#EFA721] text-xs font-bold tracking-widest uppercase mb-6 shadow-gold-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>INDIAN FOOD • GLOBAL REACH</span>
        </motion.div>

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          AUTHENTIC INDIAN FOOD.{' '}
          <span className="text-gold-gradient block mt-1">
            CONNECTED TO THE WORLD.
          </span>
        </motion.h1>

        {/* SUPPORTING TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          KOKO Global Distributor connects trusted Indian manufacturers with international buyers through quality sourcing, export management, and reliable global distribution.
        </motion.p>

        {/* HERO BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-8 py-4 rounded-md btn-gold-glow transition-all"
          >
            <span>EXPLORE PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-sm px-8 py-4 rounded-md border-2 border-white/80 transition-all hover:border-[#EFA721] hover:text-[#EFA721]"
          >
            <Send className="w-4 h-4" />
            <span>GET A QUOTE</span>
          </button>
        </motion.div>

        {/* FLOATING SPICE BADGES */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-[#333333]/60">
          <div className="bg-[#242424]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-3 text-center">
            <div className="text-[#EFA721] font-extrabold text-lg">300+</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Product SKUs</div>
          </div>
          <div className="bg-[#242424]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-3 text-center">
            <div className="text-[#EFA721] font-extrabold text-lg">8+</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Global Markets</div>
          </div>
          <div className="bg-[#242424]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-3 text-center">
            <div className="text-[#EFA721] font-extrabold text-lg">100%</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Export Compliant</div>
          </div>
          <div className="bg-[#242424]/80 backdrop-blur-sm border border-[#333333] rounded-lg p-3 text-center">
            <div className="text-[#EFA721] font-extrabold text-lg">End-To-End</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Global Logistics</div>
          </div>
        </div>

      </div>

    </section>
  );
};
