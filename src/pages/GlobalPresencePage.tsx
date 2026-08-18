import React from 'react';
import { GLOBAL_MARKETS } from '../data/kokoData';
import { Globe, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface GlobalPresencePageProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const GlobalPresencePage: React.FC<GlobalPresencePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="py-16 bg-[#0B0C0E] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto space-y-4 border-b border-[#2D303E] pb-12">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase block">
            INTERNATIONAL EXPORT NETWORK
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans text-white font-extrabold tracking-tight uppercase">
            Our Global Presence
          </h1>
          <p className="text-sm sm:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed">
            KOKO Global Distributor connects Indian agricultural processing excellence with importers, supermarket chains, and wholesale distributors across international markets.
          </p>
        </div>

        {/* WORLD MAP VISUAL CARD */}
        <div className="relative rounded-2xl overflow-hidden bg-[#16171E] border border-[#2D303E] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-[#0B0C0E] text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center mx-auto">
            <Globe className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-white uppercase max-w-3xl mx-auto">
            Active Export Destinations & Market Channels
          </h2>

          <p className="text-xs sm:text-sm text-white/80 font-normal max-w-2xl mx-auto leading-relaxed">
            Every destination market has unique customs, labeling, pesticide residue limits, and packaging requirements. Our logistics team handles complete export documentation for seamless import clearance.
          </p>
        </div>

        {/* 8 GLOBAL MARKETS DETAILED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_MARKETS.map((market) => (
            <div
              key={market.country}
              className="bg-[#16171E] p-6 rounded-xl border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 group hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0B0C0E] text-[#F59E0B] flex items-center justify-center border border-[#2D303E] group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#F59E0B] bg-[#0B0C0E] px-2 py-0.5 rounded border border-[#F59E0B]/30 font-extrabold">
                    {market.region}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-extrabold text-white group-hover:text-[#F59E0B] transition-colors uppercase">
                  {market.country}
                </h3>

                <p className="text-xs text-white/75 font-normal mt-2 leading-relaxed">
                  {market.highlights}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D303E] space-y-2 text-[11px] text-white/70">
                <div className="flex items-center gap-1.5 text-[#F59E0B] font-extrabold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Customs & Labeling Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>FCL/LCL Sea & Air Logistics</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#16171E] p-8 sm:p-12 rounded-2xl border border-[#F59E0B]/40 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-white uppercase">
            Expand Your Sourcing Line With KOKO
          </h2>
          <p className="text-xs sm:text-sm text-white/80 font-normal max-w-xl mx-auto">
            Looking to import authentic Indian rice, spices, millets, or grocery products into your country? Let's discuss distribution terms and container schedules.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs px-8 py-4 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
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
