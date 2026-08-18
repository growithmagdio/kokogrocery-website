import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210'; // B2B Export team contact placeholder or existing contact
    const message = encodeURIComponent('Hello KOKO Export Team, I am interested in sourcing products from India and would like to talk to an export specialist.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="group flex items-center gap-2.5 bg-[#16171E] hover:bg-[#0B0C0E] text-white border border-[#F59E0B]/40 hover:border-[#F59E0B] px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Talk to Export Team on WhatsApp"
      >
        <div className="w-7 h-7 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#0B0C0E] font-bold">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span className="text-xs font-extrabold tracking-wide uppercase pr-1">
          TALK TO EXPORT TEAM
        </span>
      </button>
    </div>
  );
};
