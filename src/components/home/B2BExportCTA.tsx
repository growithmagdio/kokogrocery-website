import React, { useState } from 'react';
import { Send, CheckCircle2, User, Building, Mail, Phone, Globe, Package, Hash, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface B2BExportCTAProps {
  onOpenQuoteModal: () => void;
}

export const B2BExportCTA: React.FC<B2BExportCTAProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 3500);
  };

  return (
    <section id="enquiry" className="py-24 bg-[#0B0C0E] border-t border-b border-[#2D303E] relative overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F59E0B]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* HEADER */}
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase">
            DIRECT B2B EXPORT ENQUIRY
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans text-white font-extrabold tracking-tight uppercase">
            Looking for Reliable Indian Suppliers?
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-2xl mx-auto">
            Tell us what you need and our export team will help you identify suitable products and sourcing options.
          </p>
        </div>

        {/* ENQUIRY FORM CONTAINER */}
        <div className="bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E] shadow-2xl backdrop-blur-md">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#0B0C0E] border-2 border-[#F59E0B] text-[#F59E0B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-sans font-extrabold text-white uppercase">
                Enquiry Submitted Successfully
              </h3>
              <p className="text-xs text-white/80 max-w-md mx-auto">
                Thank you for contacting KOKO Global Distributor. Our trade manager will contact you within 24 hours with product specifications, pricing, and freight estimates.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              
              {/* ROW 1: NAME & COMPANY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global Foods Ltd"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Building className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* ROW 2: EMAIL & PHONE/WHATSAPP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Business Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@apexglobal.com"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+81 (03) 1234-5678"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* ROW 3: COUNTRY & PRODUCT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Destination Country *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan, Kuwait, USA, UAE..."
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Globe className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Product Required *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      placeholder="e.g. Ponni Boiled Rice / Spices"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Package className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* ROW 4: QUANTITY & MESSAGE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Expected Quantity / Volume
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 1x 20ft container / 5 Metric Tons"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg px-4 py-3 pl-10 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Hash className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-extrabold mb-2 uppercase tracking-wider text-[11px]">
                    Message / Specifications
                  </label>
                  <textarea
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Packaging requirements, private label needs..."
                    className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs py-4 rounded-lg btn-gold-glow transition-all uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND EXPORT ENQUIRY →</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
