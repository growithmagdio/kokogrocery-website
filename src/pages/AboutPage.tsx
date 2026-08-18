import React from 'react';
import { ABOUT_CONTENT } from '../data/kokoData';
import { ShieldCheck, Globe, Building2, CheckCircle2, Send } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="py-16 bg-[#0B0C0E] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. SECTION: ABOUT KOKO GLOBAL DISTRIBUTOR */}
        <div className="text-center max-w-4xl mx-auto space-y-4 border-b border-[#2D303E] pb-12">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase block">
            OFFICIAL COMPANY PROFILE
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans text-white font-extrabold uppercase tracking-tight">
            ABOUT KOKO GLOBAL DISTRIBUTOR
          </h1>
          <p className="text-base sm:text-xl text-[#F59E0B] font-bold">
            {ABOUT_CONTENT.tagline}
          </p>
          <div className="text-sm text-white/85 font-normal leading-relaxed max-w-3xl mx-auto space-y-4 pt-2 text-left sm:text-center">
            {ABOUT_CONTENT.introParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 2. SECTION: WHO WE ARE */}
        <div className="bg-[#16171E] p-8 sm:p-12 rounded-2xl border border-[#2D303E] grid grid-cols-1 lg:grid-cols-3 gap-8 items-start shadow-xl">
          <div className="lg:col-span-1 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B0C0E] text-[#F59E0B] flex items-center justify-center border border-[#F59E0B]/40">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white uppercase">
              {ABOUT_CONTENT.whoWeAre.title}
            </h2>
            <span className="text-xs font-mono text-[#F59E0B] block uppercase tracking-wider font-extrabold">
              Strategic Business Partner
            </span>
          </div>
          <div className="lg:col-span-2 text-xs sm:text-sm text-white/85 font-normal space-y-4 leading-relaxed">
            {ABOUT_CONTENT.whoWeAre.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* 3. SECTION: OUR JOURNEY */}
        <div className="bg-[#16171E]/80 p-8 sm:p-12 rounded-2xl border border-[#2D303E] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B0C0E] text-[#F59E0B] flex items-center justify-center border border-[#2D303E]">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#F59E0B] uppercase">
              {ABOUT_CONTENT.ourJourney.title}
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-white/85 font-normal space-y-4 leading-relaxed">
            {ABOUT_CONTENT.ourJourney.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="bg-[#0B0C0E] p-5 rounded-xl border border-[#2D303E]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 4. SECTION: OUR BUSINESS PHILOSOPHY */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-white uppercase">
              {ABOUT_CONTENT.businessPhilosophy.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-normal">
              {ABOUT_CONTENT.businessPhilosophy.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.businessPhilosophy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#16171E] p-8 rounded-xl border border-[#2D303E] hover:border-[#F59E0B] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-sans font-extrabold text-[#F59E0B] block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-sans font-extrabold text-white uppercase">{pillar.title}</h3>
                  <p className="text-xs text-white/80 font-normal mt-2 leading-relaxed">{pillar.description}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#2D303E] text-[10px] font-mono text-[#F59E0B] uppercase tracking-wider font-extrabold">
                  Core Value
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-white/70 italic font-bold">
            "{ABOUT_CONTENT.businessPhilosophy.outro}"
          </p>
        </div>

        {/* 5. SECTION: WHAT WE DO */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-white uppercase">
              {ABOUT_CONTENT.whatWeDo.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-normal">
              {ABOUT_CONTENT.whatWeDo.subtitle}
            </p>
            <p className="text-xs font-mono text-[#F59E0B] uppercase tracking-wider pt-1 font-extrabold">
              {ABOUT_CONTENT.whatWeDo.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CONTENT.whatWeDo.services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-[#16171E] p-6 rounded-xl border border-[#2D303E] space-y-2 hover:border-[#F59E0B] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-[#F59E0B]">0{idx + 1}.</span>
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                </div>
                <h3 className="text-base font-sans font-extrabold text-white uppercase group-hover:text-[#F59E0B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-white/75 font-normal leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SECTION: INDUSTRIES WE SERVE */}
        <div className="bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E] space-y-6">
          <div>
            <h2 className="text-2xl font-sans font-extrabold text-white uppercase">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-xs text-white/75 mt-1 font-normal">
              KOKO Global Distributor supports a wide range of customers across the global food industry:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ABOUT_CONTENT.industriesWeServe.map((ind) => (
              <div
                key={ind}
                className="bg-[#0B0C0E] px-4 py-3 rounded-lg border border-[#2D303E] text-xs font-bold text-white flex items-center gap-2 hover:border-[#F59E0B] transition-colors uppercase"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. SECTION: PRODUCT PORTFOLIO */}
        <div className="space-y-6 bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#F59E0B] uppercase">
              PRODUCT PORTFOLIO
            </h2>
            <p className="text-xs text-white/75 mt-1 font-normal">
              {ABOUT_CONTENT.productPortfolio.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT_CONTENT.productPortfolio.items.map((item) => (
              <div key={item.category} className="bg-[#0B0C0E] p-5 rounded-xl border border-[#2D303E] space-y-1.5">
                <span className="text-xs font-mono font-extrabold text-[#F59E0B] uppercase tracking-wider block">
                  • {item.category}
                </span>
                <p className="text-xs text-white/80 font-normal leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. SECTION: OUR GLOBAL PRESENCE */}
        <div className="bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E] space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white uppercase">
              {ABOUT_CONTENT.globalPresence.title}
            </h2>
            <div className="text-xs text-white/80 font-normal space-y-2 mt-2">
              {ABOUT_CONTENT.globalPresence.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ABOUT_CONTENT.globalPresence.markets.map((country) => (
              <div
                key={country}
                className="bg-[#0B0C0E] p-4 rounded-xl border border-[#2D303E] text-center space-y-1 hover:border-[#F59E0B] transition-all uppercase"
              >
                <Globe className="w-5 h-5 text-[#F59E0B] mx-auto" />
                <h4 className="text-sm font-sans font-extrabold text-white uppercase">{country}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* 9. SECTION: QUALITY & COMPLIANCE */}
        <div className="bg-[#16171E] text-white p-8 sm:p-12 rounded-2xl border border-[#2D303E] space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[#F59E0B]" />
            <h2 className="text-3xl font-sans font-extrabold text-white uppercase">
              {ABOUT_CONTENT.qualityCompliance.title}
            </h2>
          </div>

          <div className="text-xs sm:text-sm text-white/85 font-normal space-y-3 leading-relaxed">
            {ABOUT_CONTENT.qualityCompliance.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {ABOUT_CONTENT.qualityCompliance.certifications.map((c) => (
              <div key={c.name} className="bg-[#0B0C0E] p-4 rounded-xl border border-[#2D303E]">
                <span className="text-xl font-sans font-extrabold text-[#F59E0B] block uppercase">{c.name}</span>
                <span className="text-[11px] text-white/75 font-normal block mt-1">{c.full}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 10. SECTION: OUR COMMITMENT */}
        <div className="bg-[#16171E] p-8 sm:p-12 rounded-2xl border border-[#F59E0B]/50 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-white uppercase">
            {ABOUT_CONTENT.ourCommitment.title}
          </h2>
          
          <div className="text-xs sm:text-sm text-white/85 font-normal max-w-3xl mx-auto space-y-3 leading-relaxed">
            {ABOUT_CONTENT.ourCommitment.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="bg-[#0B0C0E] p-5 rounded-xl border border-[#F59E0B]/40 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm italic font-bold text-[#F59E0B]">
              "{ABOUT_CONTENT.ourCommitment.slogan}"
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs px-8 py-4 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
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
