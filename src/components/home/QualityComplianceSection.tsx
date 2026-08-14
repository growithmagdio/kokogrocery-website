import React from 'react';
import { ShieldCheck, Award, FileCheck, Globe, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data/kokoData';
import { motion } from 'framer-motion';

export const QualityComplianceSection: React.FC = () => {
  const certIcons = [FileCheck, Globe, ShieldCheck, Award];

  return (
    <section className="py-24 bg-white text-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#1C1C1C] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest">
            Regulatory Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#1C1C1C] tracking-tight">
            QUALITY YOU CAN TRUST
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Compliant with destination-country food safety standards and international trade regulations.
          </p>
        </div>

        {/* COMPLIANCE OVERVIEW CONTENT */}
        <div className="bg-[#F4F4F5] p-8 sm:p-10 rounded-2xl border border-gray-200 mb-12 max-w-4xl mx-auto text-center space-y-4">
          <ShieldCheck className="w-12 h-12 text-[#EFA721] mx-auto" />
          {ABOUT_CONTENT.qualityCompliance.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-sm sm:text-base text-gray-800 leading-relaxed font-sans max-w-3xl mx-auto">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 4 SPECIFIC REGISTRATION CARDS */}
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
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#EFA721] transition-all duration-300 shadow-sm hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C1C] text-[#EFA721] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-[#1C1C1C] tracking-wider">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed font-medium">
                    {cert.full}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] font-bold text-[#EFA721]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Officially Registered</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
