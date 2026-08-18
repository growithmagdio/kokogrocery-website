import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, Sparkles, Container } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#0B0C0E] py-12 sm:py-16 lg:py-20 border-b border-[#2D303E] overflow-hidden min-h-[70vh] flex items-center">
      
      {/* SPICE TEXTURE BACKGROUND IMAGE WITH VIBRANT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Authentic Indian Spices & Food Sourcing Background"
          className="w-full h-full object-cover object-center opacity-45 filter brightness-90 contrast-110"
        />
        {/* Soft Vignette & Smooth Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-[#0B0C0E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/60 to-transparent" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#F59E0B]/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center sm:text-left">
        <div className="max-w-3xl space-y-6">
          
          {/* TOP PILL BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16171E]/90 border border-[#F59E0B]/50 text-[#F59E0B] text-[11px] font-extrabold tracking-[0.18em] uppercase backdrop-blur-md shadow-lg shadow-black/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>INDIAN FOOD · GLOBAL REACH</span>
          </motion.div>

          {/* MAIN HEADLINE (Smaller & Sleek) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-extrabold text-white tracking-tight uppercase leading-[1.1]"
          >
            AUTHENTIC INDIAN FOOD <br className="hidden sm:inline" />
            <span className="text-[#FEF08A]">CONNECTED</span>{' '}
            <span className="text-[#F59E0B]">TO THE WORLD</span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-2xl"
          >
            KOKO Global Distributor connects trusted Indian manufacturers with international buyers through quality sourcing, export management, and reliable global distribution.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs px-6 py-3.5 rounded-md btn-gold-glow transition-all uppercase tracking-wider text-center"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 bg-[#0B0C0E]/80 hover:bg-white/10 text-white font-extrabold text-xs px-6 py-3.5 rounded-md border border-white/80 hover:border-white transition-all uppercase tracking-wider text-center backdrop-blur-sm"
            >
              <Send className="w-4 h-4 text-white" />
              <span>GET A QUOTE</span>
            </button>
          </motion.div>

          {/* STATS STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#2D303E]/80 max-w-2xl"
          >
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B]">300+</div>
              <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Export SKUs</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B]">8+</div>
              <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Global Markets</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B]">100%</div>
              <div className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Compliance</div>
            </div>
            <div className="space-y-0.5 flex items-center">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-white/80 uppercase tracking-wider bg-[#16171E] px-2.5 py-1.5 rounded-lg border border-[#2D303E]">
                <Container className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>APEDA & FSSAI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
