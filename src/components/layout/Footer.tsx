import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { CATEGORIES, GLOBAL_MARKETS } from '../../data/kokoData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-white border-t border-[#333333] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2A2A]">
          
          {/* COL 1: BRAND & ABOUT */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group" onClick={scrollToTop}>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-3xl tracking-wider text-[#EFA721] font-heading drop-shadow-[0_2px_8px_rgba(239,167,33,0.3)]">
                  KoKo
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EFA721] animate-pulse"></span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFFFFF] uppercase -mt-1 block">
                INDIAN GROCERY STORE & GLOBAL DISTRIBUTOR
              </span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Connecting India to global markets. KOKO Global Distributor delivers authentic Indian food products to importers, wholesalers, retailers, and private label brands worldwide.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-gray-300">
              <div className="flex items-center gap-1.5 bg-[#242424] px-3 py-1.5 rounded border border-[#333333]">
                <ShieldCheck className="w-4 h-4 text-[#EFA721]" />
                <span>FSSAI & APEDA Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#242424] px-3 py-1.5 rounded border border-[#333333]">
                <Award className="w-4 h-4 text-[#EFA721]" />
                <span>GST & IEC Registered</span>
              </div>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#EFA721] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-[#EFA721] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={scrollToTop} className="hover:text-[#EFA721] transition-colors">
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#EFA721] transition-colors">
                  About KOKO
                </Link>
              </li>
              <li>
                <Link to="/global-presence" onClick={scrollToTop} className="hover:text-[#EFA721] transition-colors">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#EFA721] transition-colors">
                  Business Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: PRODUCT CATEGORIES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#EFA721] uppercase">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/categories?slug=${cat.slug}`}
                    onClick={scrollToTop}
                    className="hover:text-[#EFA721] transition-colors flex items-center gap-1"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT & GLOBAL MARKETS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-[#EFA721] uppercase">
              Global Presence
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {GLOBAL_MARKETS.map((market) => (
                <span
                  key={market.country}
                  className="text-[10px] bg-[#242424] text-gray-300 px-2 py-1 rounded border border-[#333333]"
                >
                  {market.country}
                </span>
              ))}
            </div>

            <div className="pt-3 space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EFA721] shrink-0 mt-0.5" />
                <span>Headquartered in Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EFA721] shrink-0" />
                <span>export@kokoglobaldistributor.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} KOKO Global Distributor / KOKO Indian Grocery Store. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">
              Connecting India to Global Markets
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#EFA721] hover:underline font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
