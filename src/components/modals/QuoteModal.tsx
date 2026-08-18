import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Building, Mail, Phone, Globe, User } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productInterestedIn: initialProduct,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productInterestedIn: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        productInterestedIn: '',
        message: '',
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative bg-[#0B0C0E] border border-[#2D303E] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-white">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#16171E] hover:bg-[#F59E0B] text-white hover:text-[#0B0C0E] flex items-center justify-center border border-[#2D303E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-[#16171E] text-[#F59E0B] rounded-full flex items-center justify-center mx-auto border-2 border-[#F59E0B]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-sans font-extrabold text-white uppercase">Enquiry Received!</h3>
            <p className="text-xs text-white/80 max-w-md mx-auto font-normal leading-relaxed">
              Thank you for contacting KOKO Global Distributor. Our international trade representative will respond to your request within 24 business hours.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* HEADER */}
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase block">
                B2B EXPORT ENQUIRY
              </span>
              <h3 className="text-2xl font-sans font-extrabold text-white uppercase mt-1">
                Request a Product Quote
              </h3>
              <p className="text-xs text-white/75 font-normal mt-1">
                Fill in your details below for bulk pricing, specifications, and container shipping rates.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 pl-9 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3" />
                  </div>
                </div>

                {/* COMPANY NAME */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Global Foods LLC"
                      className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 pl-9 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Building className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* EMAIL */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Business Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 pl-9 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3" />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 pl-9 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* COUNTRY */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Destination Country *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan, United States, UAE..."
                      className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 pl-9 text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                    <Globe className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3" />
                  </div>
                </div>

                {/* PRODUCT INTERESTED IN */}
                <div>
                  <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                    Product Interested In
                  </label>
                  <input
                    type="text"
                    value={formData.productInterestedIn}
                    onChange={(e) => setFormData({ ...formData, productInterestedIn: e.target.value })}
                    placeholder="e.g. Ponni Rice / Spices"
                    className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md px-3 py-2.5 text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-white font-extrabold mb-1 uppercase tracking-wider text-[10px]">
                  Enquiry Details & Quantity *
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify volume (e.g. 20ft container), packaging preference..."
                    className="w-full bg-[#16171E] border border-[#2D303E] focus:border-[#F59E0B] rounded-md p-3 text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs py-3.5 rounded-md btn-gold-glow transition-all uppercase tracking-wider mt-4"
              >
                <Send className="w-4 h-4" />
                <span>SEND ENQUIRY</span>
              </button>

            </form>

          </div>
        )}

      </div>

    </div>
  );
};
