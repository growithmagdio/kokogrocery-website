import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data/kokoData';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16171E] border-b border-[#2D303E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: EDITORIAL IMAGE (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-[#2D303E] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop"
                alt="Indian Food Sourcing & Export Operations"
                category="default"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6 bg-[#0B0C0E]/90 backdrop-blur-md p-5 rounded-xl border border-[#2D303E] shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-[#F59E0B] font-bold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Chennai, Tamil Nadu, India
                  </span>
                  <span className="bg-[#F59E0B] text-[#0B0C0E] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider">
                    EXPORTER
                  </span>
                </div>
                <p className="text-xs text-white/80 font-normal leading-relaxed">
                  Connecting trustworthy Indian producers with international importers, supermarkets, and distributors worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL CONTENT (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
              WHO WE ARE
            </span>

            <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight leading-tight uppercase">
              Your Partner for Reliable Global Sourcing
            </h2>

            <div className="gold-line" />

            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
              {ABOUT_CONTENT.introParagraphs[0]}
            </p>

            {ABOUT_CONTENT.introParagraphs[1] && (
              <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed">
                {ABOUT_CONTENT.introParagraphs[1]}
              </p>
            )}

            {/* FACTUAL SERVICES HIGHLIGHT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_CONTENT.whatWeDo.services.slice(0, 4).map((service) => (
                <div
                  key={service.title}
                  className="bg-[#0B0C0E]/80 p-4 rounded-xl border border-[#2D303E] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{service.title}</h4>
                    <p className="text-[11px] text-white/70 font-normal line-clamp-1 mt-0.5">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs px-8 py-4 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
              >
                <span>DISCOVER KOKO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
