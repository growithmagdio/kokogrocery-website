import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Building, Globe, ShieldCheck } from 'lucide-react';
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
    <div className="py-12 bg-[#1C1C1C] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-xs font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
            Global Trade & Enquiry
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            CONTACT KOKO GLOBAL DISTRIBUTOR
          </h1>
          <p className="text-sm text-gray-400">
            Have a business inquiry, bulk product request, or private label partnership in mind? Fill out the form below to connect directly with our export management team.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: CORPORATE CONTACT INFO */}
          <div className="space-y-6 lg:col-span-1">
            
            <div className="bg-[#242424] p-6 rounded-2xl border border-[#333333] space-y-4">
              <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-[#EFA721]" />
                <span>Headquarters</span>
              </h3>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#EFA721] shrink-0 mt-0.5" />
                  <span>KOKO Global Distributor, Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#EFA721] shrink-0" />
                  <span>export@kokoglobaldistributor.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#EFA721] shrink-0" />
                  <span>+91 (0) 44 2800 0000 / International Trade</span>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A] space-y-3">
              <h4 className="text-xs font-bold text-[#EFA721] uppercase tracking-wider">
                Export Registrations
              </h4>
              <ul className="space-y-2 text-xs text-gray-300 font-mono">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EFA721]" />
                  <span>GST Registered</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EFA721]" />
                  <span>IEC Ministry of Commerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EFA721]" />
                  <span>FSSAI Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EFA721]" />
                  <span>APEDA Export Development</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#242424] p-6 rounded-2xl border border-[#333333] text-xs text-gray-400 space-y-2">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Business Hours</h4>
              <p>Monday – Saturday: 09:00 – 18:00 (IST / GMT +5:30)</p>
              <p className="text-[11px] text-[#EFA721]">24/7 Response for Urgent International Container Shipments</p>
            </div>

          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="lg:col-span-2 bg-[#242424] p-8 rounded-2xl border border-[#333333]">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#EFA721]/20 text-[#EFA721] rounded-full flex items-center justify-center mx-auto border-2 border-[#EFA721]">
                  <CheckCircle className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Thank You for Reaching Out!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Your business enquiry has been routed to our global distribution desk. We will contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  Submit a Trade Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Apex Trading Corp"
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@apextrading.com"
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan, USA, UAE..."
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Product Interested In</label>
                    <input
                      type="text"
                      value={formData.productInterestedIn}
                      onChange={(e) => setFormData({ ...formData, productInterestedIn: e.target.value })}
                      placeholder="e.g. Rice, Spices, Millets..."
                      className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1">Message & Order Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your container requirement, preferred packaging, port of delivery, or private label branding..."
                    className="w-full bg-[#1C1C1C] border border-[#333333] focus:border-[#EFA721] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm py-3.5 rounded-lg btn-gold-glow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
