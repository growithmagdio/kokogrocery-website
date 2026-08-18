import React from 'react';
import { motion } from 'framer-motion';
import { FileText, SearchCheck, ShieldAlert, FileCheck2, Container, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'REQUIREMENT',
    desc: 'Tell us what you need.',
    detail: 'Product specifications, grade, and container volume.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'SOURCING',
    desc: 'We identify suitable Indian suppliers.',
    detail: 'Matching trusted producers in Cauvery delta & key agro hubs.',
    icon: SearchCheck,
  },
  {
    step: '03',
    title: 'QUALITY',
    desc: 'Products are checked.',
    detail: 'Moisture, purity, and batch compliance testing.',
    icon: ShieldAlert,
  },
  {
    step: '04',
    title: 'DOCUMENTATION',
    desc: 'Export documentation is coordinated.',
    detail: 'Phytosanitary certificates, APEDA & customs filings.',
    icon: FileCheck2,
  },
  {
    step: '05',
    title: 'LOGISTICS',
    desc: 'Air or sea shipment is arranged.',
    detail: 'Secure port container loading & sea freight booking.',
    icon: Container,
  },
  {
    step: '06',
    title: 'DELIVERY',
    desc: 'Products reach the destination.',
    detail: 'On-time arrival at destination port or distribution facility.',
    icon: CheckCircle2,
  },
];

export const ExportProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16171E] border-b border-[#2D303E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            END-TO-END EXECUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Our Export & Sourcing Process
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            A transparent 6-step export workflow designed for international buyers seeking reliable procurement from India.
          </p>
        </div>

        {/* TIMELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-[#0B0C0E] border border-[#2D303E] hover:border-[#F59E0B] p-6 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-sans font-extrabold text-[#F59E0B]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#16171E] flex items-center justify-center text-[#F59E0B] border border-[#2D303E]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-extrabold tracking-wider text-white mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F59E0B] mb-2 leading-snug">
                    {item.desc}
                  </p>

                  <p className="text-[11px] text-white/70 font-normal leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* CONNECTOR FOR DESKTOP */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-0.5 bg-[#F59E0B]/40 group-hover:bg-[#F59E0B] transition-colors" />
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
