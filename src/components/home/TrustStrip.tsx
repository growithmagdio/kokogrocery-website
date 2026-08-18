import React from 'react';
import { ShieldCheck, Globe, Handshake, Truck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { label: 'QUALITY SOURCING', icon: ShieldCheck },
    { label: 'GLOBAL EXPORT', icon: Globe },
    { label: 'TRUSTED PARTNERS', icon: Handshake },
    { label: 'INTERNATIONAL LOGISTICS', icon: Truck },
  ];

  return (
    <div className="bg-[#0B0C0E] border-b border-[#2D303E] py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 p-3 bg-[#16171E] border border-[#2D303E] rounded-md hover:border-[#F59E0B]/60 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#F59E0B] group-hover:text-[#0B0C0E] transition-colors" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase group-hover:text-[#F59E0B] transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
