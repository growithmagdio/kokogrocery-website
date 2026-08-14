import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Building, Mail, Phone, Globe, User, MessageSquare } from 'lucide-react';
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
      
      <div className="relative bg-[#1C1C1C] border border-[#EFA721]/50 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-white">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#242424] hover:bg-[#EFA721] text-gray-300 hover:text-[#1C1C1C] flex items-center justify-center border border-[#333333] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-[#EFA721]/20 text-[#EFA721] rounded-full flex items-center justify-center mx-auto border-2 border-[#EFA721]">
              <CheckCircle className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">Enquiry Received!</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              Thank you for contacting KOKO Global Distributor. Our international trade representative will respond to your request within 24 business hours.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* HEADER */}
            <div>
              <div className="inline-block px-3 py-1 bg-[#242424] text-[#EFA721] font-mono text-[10px] font-bold rounded uppercase tracking-widest border border-[#EFA721]/30">
                B2B Wholesale & Export
              </div>
              <h3 className="text-2xl font-extrabold font-heading text-white mt-2">
                Request a Product Quote
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Fill in your details below for bulk pricing, packaging specifications, and container shipping rates.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 pl-9 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  </div>
                </div>

                {/* COMPANY NAME */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Global Foods LLC"
                      className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 pl-9 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <Building className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* EMAIL */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 pl-9 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 pl-9 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* COUNTRY */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Destination Country *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan, United States, UAE..."
                      className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 pl-9 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <Globe className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                  </div>
                </div>

                {/* PRODUCT INTERESTED IN */}
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Product Interested In
                  </label>
                  <input
                    type="text"
                    value={formData.productInterestedIn}
                    onChange={(e) => setFormData({ ...formData, productInterestedIn: e.target.value })}
                    placeholder="e.g. 1121 Basmati Rice / Guntur Chilli"
                    className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-gray-300 font-medium mb-1">
                  Enquiry Details & Expected Quantity *
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify estimated volume (e.g., 20ft container, 500 kg), packaging preference, or private label requirements..."
                    className="w-full bg-[#242424] border border-[#333333] focus:border-[#EFA721] rounded-md p-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-extrabold text-sm py-3 rounded-md btn-gold-glow transition-all mt-4"
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
