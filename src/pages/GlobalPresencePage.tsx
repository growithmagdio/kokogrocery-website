import React from 'react';
import { GLOBAL_MARKETS } from '../data/kokoData';
import { Globe, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GlobalPresencePageProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const GlobalPresencePage: React.FC<GlobalPresencePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="py-12 bg-[#1C1C1C] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-4 border-b border-[#2A2A2A] pb-12">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            International Supply Network
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            OUR GLOBAL PRESENCE
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            KOKO Global Distributor connects Indian food processing excellence with importers, supermarket chains, and wholesale distributors in key international markets.
          </p>
        </div>

        {/* WORLD MAP VISUAL CARD */}
        <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#333333] p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#EFA721]/10 text-[#EFA721] border border-[#EFA721]/40 flex items-center justify-center mx-auto">
            <Globe className="w-8 h-8 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white max-w-3xl mx-auto">
            ACTIVE EXPORT DESTINATIONS & COMPLIANT MARKET CHANNELS
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Every destination market has unique customs, labeling, pesticide residue limits, and packaging requirements. Our logistics team handles complete documentation for smooth import clearance.
          </p>
        </div>

        {/* 8 GLOBAL MARKETS DETAILED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_MARKETS.map((market) => (
            <div
              key={market.country}
              className="bg-[#242424] p-6 rounded-2xl border border-[#333333] hover:border-[#EFA721] transition-all duration-300 group hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] text-[#EFA721] flex items-center justify-center border border-[#333333] group-hover:border-[#EFA721] group-hover:bg-[#EFA721] group-hover:text-[#1C1C1C] transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#EFA721] bg-[#1C1C1C] px-2 py-0.5 rounded border border-[#EFA721]/30">
                    {market.region}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold font-heading text-white group-hover:text-[#EFA721] transition-colors">
                  {market.country}
                </h3>

                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  {market.highlights}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#333333] space-y-2 text-[11px] text-gray-400">
                <div className="flex items-center gap-1.5 text-[#EFA721] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Customs & Labeling Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sea & Air Freight Door/Port</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#242424] p-8 sm:p-12 rounded-2xl border border-[#EFA721]/50 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            EXPAND YOUR MARKET WITH KOKO
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Looking to import authentic Indian rice, spices, millets, or grocery products into your country? Let's discuss distribution terms.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-8 py-3.5 rounded-lg btn-gold-glow transition-all"
            >
              <span>INQUIRE ABOUT DISTRIBUTION FOR YOUR COUNTRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
