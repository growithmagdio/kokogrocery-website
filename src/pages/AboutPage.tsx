import React from 'react';
import { ABOUT_CONTENT, GLOBAL_MARKETS } from '../data/kokoData';
import { ShieldCheck, Award, Globe, Building2, CheckCircle2, HeartHandshake, Truck, Send, PackageCheck, Layers, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="py-12 bg-[#1C1C1C] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. SECTION: ABOUT KOKO GLOBAL DISTRIBUTOR */}
        <div className="text-center max-w-4xl mx-auto space-y-4 border-b border-[#2A2A2A] pb-12">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Official Company Profile
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            ABOUT KOKO GLOBAL DISTRIBUTOR
          </h1>
          <p className="text-base sm:text-xl text-[#EFA721] font-semibold">
            {ABOUT_CONTENT.tagline}
          </p>
          <div className="text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto space-y-4 pt-2 text-left sm:text-center">
            {ABOUT_CONTENT.introParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 2. SECTION: WHO WE ARE */}
        <div className="bg-[#242424] p-8 sm:p-12 rounded-2xl border border-[#333333] grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFA721]/20 text-[#EFA721] flex items-center justify-center border border-[#EFA721]/40">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {ABOUT_CONTENT.whoWeAre.title}
            </h2>
            <span className="text-xs font-mono text-[#EFA721] block uppercase tracking-wider">
              Strategic Business Partner
            </span>
          </div>
          <div className="lg:col-span-2 text-sm text-gray-300 space-y-4 leading-relaxed">
            {ABOUT_CONTENT.whoWeAre.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 3. SECTION: OUR JOURNEY */}
        <div className="bg-[#141414] p-8 sm:p-12 rounded-2xl border border-[#2A2A2A] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#242424] text-[#EFA721] flex items-center justify-center border border-[#333333]">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#EFA721]">
              {ABOUT_CONTENT.ourJourney.title}
            </h2>
          </div>

          <div className="text-sm text-gray-300 space-y-4 leading-relaxed">
            {ABOUT_CONTENT.ourJourney.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="bg-[#1C1C1C] p-4 rounded-xl border border-[#2A2A2A]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 4. SECTION: OUR BUSINESS PHILOSOPHY */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-white">
              {ABOUT_CONTENT.businessPhilosophy.title.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {ABOUT_CONTENT.businessPhilosophy.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.businessPhilosophy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#242424] p-8 rounded-xl border border-[#333333] hover:border-[#EFA721] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-5xl font-extrabold text-[#EFA721] font-heading block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white">{pillar.title}</h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">{pillar.description}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#333333] text-[10px] font-mono text-[#EFA721] uppercase">
                  Core Value
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 font-mono italic">
            "{ABOUT_CONTENT.businessPhilosophy.outro}"
          </p>
        </div>

        {/* 5. SECTION: WHAT WE DO */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold font-heading text-white">
              {ABOUT_CONTENT.whatWeDo.title.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              {ABOUT_CONTENT.whatWeDo.subtitle}
            </p>
            <p className="text-xs font-mono text-[#EFA721] uppercase tracking-wider pt-1">
              {ABOUT_CONTENT.whatWeDo.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CONTENT.whatWeDo.services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-[#242424] p-6 rounded-xl border border-[#333333] space-y-2 hover:border-[#EFA721] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#EFA721]">0{idx + 1}.</span>
                  <div className="w-2 h-2 rounded-full bg-[#EFA721]" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#EFA721] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SECTION: INDUSTRIES WE SERVE */}
        <div className="bg-[#242424] p-8 sm:p-10 rounded-2xl border border-[#333333] space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold font-heading text-white">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              KOKO Global Distributor supports a wide range of customers across the global food industry:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ABOUT_CONTENT.industriesWeServe.map((ind) => (
              <div
                key={ind}
                className="bg-[#1C1C1C] px-3.5 py-3 rounded-lg border border-[#333333] text-xs font-medium text-gray-300 flex items-center gap-2 hover:border-[#EFA721] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#EFA721] shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. SECTION: PRODUCT PORTFOLIO */}
        <div className="space-y-6 bg-[#141414] p-8 sm:p-10 rounded-2xl border border-[#2A2A2A]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#EFA721]">
              PRODUCT PORTFOLIO
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {ABOUT_CONTENT.productPortfolio.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT_CONTENT.productPortfolio.items.map((item) => (
              <div key={item.category} className="bg-[#1C1C1C] p-5 rounded-xl border border-[#333333] space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#EFA721] uppercase tracking-wider block">
                  • {item.category}
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. SECTION: OUR GLOBAL PRESENCE */}
        <div className="bg-[#242424] p-8 sm:p-10 rounded-2xl border border-[#333333] space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {ABOUT_CONTENT.globalPresence.title.toUpperCase()}
            </h2>
            <div className="text-xs text-gray-300 space-y-2 mt-2">
              {ABOUT_CONTENT.globalPresence.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ABOUT_CONTENT.globalPresence.markets.map((country) => (
              <div
                key={country}
                className="bg-[#1C1C1C] p-4 rounded-xl border border-[#333333] text-center space-y-1 hover:border-[#EFA721] transition-all"
              >
                <Globe className="w-5 h-5 text-[#EFA721] mx-auto" />
                <h4 className="text-sm font-bold text-white">{country}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 9. SECTION: QUALITY & COMPLIANCE */}
        <div className="bg-white text-[#1C1C1C] p-8 sm:p-12 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#EFA721]" />
            <h2 className="text-3xl font-extrabold font-heading text-[#1C1C1C]">
              {ABOUT_CONTENT.qualityCompliance.title.toUpperCase()}
            </h2>
          </div>

          <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
            {ABOUT_CONTENT.qualityCompliance.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {ABOUT_CONTENT.qualityCompliance.certifications.map((c) => (
              <div key={c.name} className="bg-[#F4F4F5] p-4 rounded-xl border border-gray-300">
                <span className="text-xl font-extrabold text-[#1C1C1C] font-heading block">{c.name}</span>
                <span className="text-[11px] text-gray-600 font-medium block mt-1">{c.full}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 10. SECTION: OUR COMMITMENT */}
        <div className="bg-[#242424] p-8 sm:p-12 rounded-2xl border border-[#EFA721]/50 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            {ABOUT_CONTENT.ourCommitment.title.toUpperCase()}
          </h2>
          
          <div className="text-sm text-gray-300 max-w-3xl mx-auto space-y-3 leading-relaxed">
            {ABOUT_CONTENT.ourCommitment.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="bg-[#1C1C1C] p-4 rounded-xl border border-[#EFA721]/40 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-bold text-[#EFA721] font-heading">
              "{ABOUT_CONTENT.ourCommitment.slogan}"
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm px-8 py-3.5 rounded-lg btn-gold-glow transition-all"
            >
              <Send className="w-4 h-4" />
              <span>CONNECT WITH KOKO GLOBAL DISTRIBUTOR</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
