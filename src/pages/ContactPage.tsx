import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Building, ShieldCheck } from 'lucide-react';
import { QuoteFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productInterestedIn: '',
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
        companyName: '',
        email: '',
        phone: '',
        country: '',
        productInterestedIn: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="py-16 bg-[#0B0C0E] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#F59E0B] uppercase block">
            GLOBAL TRADE & SOURCING ENQUIRY
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans text-white font-extrabold tracking-tight uppercase">
            Contact Export Desk
          </h1>
          <p className="text-sm text-white/85 font-normal leading-relaxed">
            Connect directly with our export management team for bulk commodity quotes, container schedules, product specifications, and private label partnerships.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: CORPORATE CONTACT INFO */}
          <div className="space-y-6 lg:col-span-1">
            
            <div className="bg-[#16171E] p-6 rounded-2xl border border-[#2D303E] space-y-4 shadow-xl">
              <h3 className="text-lg font-sans font-extrabold text-white flex items-center gap-2 uppercase">
                <Building className="w-5 h-5 text-[#F59E0B]" />
                <span>Global Headquarters</span>
              </h3>

              <div className="space-y-3 text-xs text-white/85 font-normal">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span>KOKO Global Distributor, Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>export@kokoglobaldistributor.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>+91 (0) 44 2800 0000 / Export Operations Desk</span>
                </div>
              </div>
            </div>

            <div className="bg-[#16171E] p-6 rounded-2xl border border-[#2D303E] space-y-3">
              <h4 className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-wider">
                Confirmed Registrations
              </h4>
              <ul className="space-y-2 text-xs text-white/85 font-mono">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>GST Registered</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>IEC Ministry of Commerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>FSSAI Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>APEDA Export Authority</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#16171E] p-6 rounded-2xl border border-[#2D303E] text-xs text-white/80 space-y-2 font-normal">
              <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">Operating Hours</h4>
              <p>Monday – Saturday: 09:00 – 18:00 (IST / GMT +5:30)</p>
              <p className="text-[11px] text-[#F59E0B] font-extrabold">Priority 24/7 Response for Active Shipping Containers</p>
            </div>

          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="lg:col-span-2 bg-[#16171E] p-8 sm:p-10 rounded-2xl border border-[#2D303E] shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#0B0C0E] text-[#F59E0B] rounded-full flex items-center justify-center mx-auto border-2 border-[#F59E0B]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-sans font-extrabold text-white uppercase">Thank You for Contacting KOKO</h3>
                <p className="text-xs text-white/80 max-w-md mx-auto font-normal">
                  Your business enquiry has been assigned to an export trade specialist. We will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <h3 className="text-2xl font-sans font-extrabold text-white uppercase mb-2">
                  Submit Export Trade Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Global Trading"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@apextrading.com"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan, USA, UAE, Kuwait..."
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Product Required</label>
                    <input
                      type="text"
                      value={formData.productInterestedIn}
                      onChange={(e) => setFormData({ ...formData, productInterestedIn: e.target.value })}
                      placeholder="e.g. Rice, Spices, Millets..."
                      className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[11px]">Message & Volume Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify container requirements, packaging preference, target port..."
                    className="w-full bg-[#0B0C0E] border border-[#2D303E] focus:border-[#F59E0B] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs py-4 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT EXPORT ENQUIRY →</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
