import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/kokoData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] text-white border-t border-[#2D303E] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2D303E]">
          
          {/* LEFT COL: BRAND & POSITIONING */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group" onClick={scrollToTop}>
              <div className="flex items-center gap-1">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors leading-none">
                  KoKo
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block mb-1 group-hover:scale-125 transition-transform" />
              </div>
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-white/80 uppercase block mt-1">
                GLOBAL DISTRIBUTOR
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-sm">
              Connecting India to Global Markets. Quality products, reliable sourcing, and end-to-end export management for international buyers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/80">
              <div className="flex items-center gap-1.5 bg-[#16171E] px-3 py-1.5 rounded border border-[#2D303E]">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>GST • IEC • FSSAI • APEDA Registered</span>
              </div>
            </div>
          </div>

          {/* COL 2: PRODUCTS */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-normal">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/categories?slug=${cat.slug}`}
                    onClick={scrollToTop}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-normal">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/global-presence" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: SUPPORT & CONTACT */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-[0.2em] text-[#F59E0B] uppercase">
              SUPPORT
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-normal">
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">FAQ & Export Enquiries</Link></li>
              <li><Link to="/global-presence" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">Shipping & Freight</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-[#F59E0B] transition-colors">Export Process</Link></li>
            </ul>

            <div className="pt-4 space-y-2 text-xs text-white/70 font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>export@kokoglobaldistributor.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-normal">
          <p>© 2026 KOKO Global Distributor. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-[#F59E0B] uppercase tracking-widest font-extrabold">
              Connecting India to Global Markets
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F59E0B] hover:text-[#FBBF24] font-extrabold uppercase tracking-wider text-[11px]"
            >
              <span>BACK TO TOP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
