import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface B2BExportCTAProps {
  onOpenQuoteModal: () => void;
}

export const B2BExportCTA: React.FC<B2BExportCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-[#141414] border-t border-b border-[#2A2A2A] relative overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#EFA721]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#242424] border border-[#EFA721]/40 text-[#EFA721] text-xs font-bold tracking-widest uppercase shadow-gold-sm">
          <Globe className="w-4 h-4" />
          <span>Global B2B Wholesale & Export</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto">
          LOOKING FOR A RELIABLE INDIAN FOOD SUPPLIER?
        </h2>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal">
          Let's build a reliable global sourcing partnership.
        </p>

        {/* BUTTONS */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-9 py-4 rounded-lg btn-gold-glow transition-all"
          >
            <Send className="w-4 h-4" />
            <span>REQUEST A QUOTE</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#242424] hover:bg-[#2A2A2A] text-white font-bold text-sm px-9 py-4 rounded-lg border border-[#333333] hover:border-[#EFA721] transition-all"
          >
            <Mail className="w-4 h-4 text-[#EFA721]" />
            <span>CONTACT KOKO</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
