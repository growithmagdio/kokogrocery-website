import React from 'react';
import { ShieldCheck, Award, FileCheck, Globe, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const QualityComplianceSection: React.FC = () => {
  const certIcons = [FileCheck, Globe, ShieldCheck, Award];

  return (
    <section id="quality" className="py-24 bg-[#0B0C0E] border-b border-[#2D303E] relative overflow-hidden">
      
      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F59E0B]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            REGULATORY STANDARDS
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Quality Without Compromise
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Compliant with destination-country food safety regulations, phytosanitary requirements, and international trade standards.
          </p>
        </div>

        {/* OVERVIEW PARAGRAPHS CARD */}
        <div className="bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E] mb-14 max-w-4xl mx-auto text-center space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-[#0B0C0E] text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          {ABOUT_CONTENT.qualityCompliance.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 4 REGISTRATION BADGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CONTENT.qualityCompliance.certifications.map((cert, idx) => {
            const IconComponent = certIcons[idx % certIcons.length];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#16171E] p-6 rounded-xl border border-[#2D303E] hover:border-[#F59E0B] transition-all duration-300 shadow-sm hover:shadow-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B0C0E] text-[#F59E0B] border border-[#2D303E] flex items-center justify-center mb-4 group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-sans font-extrabold text-white tracking-wider uppercase">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-white/75 mt-2 leading-relaxed font-normal">
                    {cert.full}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#2D303E] flex items-center gap-1.5 text-[11px] font-extrabold text-[#F59E0B] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED REGISTRATION</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
