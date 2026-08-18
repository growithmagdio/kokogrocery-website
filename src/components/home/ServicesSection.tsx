import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, ShieldCheck, Truck, Tag, Ship } from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    title: 'GLOBAL PRODUCT SOURCING',
    desc: 'Direct sourcing of premium Indian agricultural produce, rice, spices, millets, and food products from verified farmers and certified processors.',
    icon: Search,
  },
  {
    number: '02',
    title: 'EXPORT MANAGEMENT',
    desc: 'End-to-end export administration, phytosanitary certificates, origin declarations, and customs documentation tailored to destination laws.',
    icon: Globe,
  },
  {
    number: '03',
    title: 'QUALITY ASSURANCE',
    desc: 'Multi-stage laboratory testing, moisture verification, pesticide residue screening, and international food safety compliance inspections.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'INTERNATIONAL LOGISTICS',
    desc: 'Comprehensive sea container freight (FCL/LCL), express temperature-controlled cargo, and reliable multimodal global logistics tracking.',
    icon: Ship,
  },
  {
    number: '05',
    title: 'PRIVATE LABEL SOLUTIONS',
    desc: 'Custom OEM packaging, white-label branding, multilingual compliance labels, and bespoke pouch/box designs for global retail brands.',
    icon: Tag,
  },
  {
    number: '06',
    title: 'IMPORT & DISTRIBUTION',
    desc: 'Assisting international buyers with customs clearance coordination, localized port handling, and regional warehouse dispatch.',
    icon: Truck,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0B0C0E] border-b border-[#2D303E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Comprehensive Global Export Services
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            We provide full-spectrum B2B sourcing and export solutions designed to deliver consistent quality from Indian farms directly to international markets.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#16171E] border border-[#2D303E] hover:border-[#F59E0B] p-8 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-sans font-extrabold text-[#F59E0B]/60 group-hover:text-[#F59E0B] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0B0C0E] border border-[#2D303E] flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-sans font-extrabold text-white uppercase tracking-wide mb-3 group-hover:text-[#F59E0B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#2D303E]">
                  <div className="w-8 h-0.5 bg-[#F59E0B]/40 group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
