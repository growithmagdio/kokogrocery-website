import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown, Sparkles, Send } from 'lucide-react';
import { CATEGORIES } from '../../data/kokoData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuoteModal: (productName?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuoteModal,
  onOpenSearch,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#141414]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#333333]' 
        : 'bg-[#1C1C1C] py-4 border-b border-[#2A2A2A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* LOGO (Styled exactly like the user's reference logo) */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-[#EFA721] font-heading drop-shadow-[0_2px_8px_rgba(239,167,33,0.3)] group-hover:scale-105 transition-transform duration-200">
                KoKo
              </span>
              <span className="w-2 h-2 rounded-full bg-[#EFA721] animate-pulse"></span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#FFFFFF] uppercase -mt-1 opacity-90">
              INDIAN GROCERY STORE
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link
            to="/"
            className={`transition-colors duration-200 py-1 border-b-2 ${
              isActive('/') 
                ? 'text-[#EFA721] border-[#EFA721]' 
                : 'text-white border-transparent hover:text-[#EFA721]'
            }`}
          >
            HOME
          </Link>

          <Link
            to="/shop"
            className={`transition-colors duration-200 py-1 border-b-2 ${
              isActive('/shop') 
                ? 'text-[#EFA721] border-[#EFA721]' 
                : 'text-white border-transparent hover:text-[#EFA721]'
            }`}
          >
            SHOP
          </Link>

          {/* CATEGORIES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setCategoriesDropdownOpen(true)}
            onMouseLeave={() => setCategoriesDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 py-1 text-white hover:text-[#EFA721] transition-colors focus:outline-none cursor-pointer"
            >
              <span>CATEGORIES</span>
              <ChevronDown className={`w-4 h-4 text-[#EFA721] transition-transform duration-200 ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {categoriesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#1C1C1C] border border-[#333333] shadow-2xl rounded-lg p-3 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[10px] font-bold tracking-widest text-[#EFA721] uppercase px-3 py-1.5 border-b border-[#2A2A2A] mb-1">
                  Product Categories
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories?slug=${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-[#242424] hover:border-l-2 hover:border-[#EFA721] rounded transition-all"
                      onClick={() => setCategoriesDropdownOpen(false)}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-[#EFA721] font-mono bg-[#2A2A2A] px-1.5 py-0.5 rounded">
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`transition-colors duration-200 py-1 border-b-2 ${
              isActive('/about') 
                ? 'text-[#EFA721] border-[#EFA721]' 
                : 'text-white border-transparent hover:text-[#EFA721]'
            }`}
          >
            ABOUT
          </Link>

          <Link
            to="/global-presence"
            className={`transition-colors duration-200 py-1 border-b-2 ${
              isActive('/global-presence') 
                ? 'text-[#EFA721] border-[#EFA721]' 
                : 'text-white border-transparent hover:text-[#EFA721]'
            }`}
          >
            GLOBAL PRESENCE
          </Link>

          <Link
            to="/contact"
            className={`transition-colors duration-200 py-1 border-b-2 ${
              isActive('/contact') 
                ? 'text-[#EFA721] border-[#EFA721]' 
                : 'text-white border-transparent hover:text-[#EFA721]'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* SEARCH BUTTON */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-gray-300 hover:text-[#EFA721] transition-colors rounded-full hover:bg-[#242424]"
            aria-label="Search catalog"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* CART BUTTON */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-gray-300 hover:text-[#EFA721] transition-colors rounded-full hover:bg-[#242424]"
            aria-label="View cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#EFA721] text-[#1C1C1C] font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1C1C1C]">
                {cartCount}
              </span>
            )}
          </button>

          {/* GET QUOTE CTA BUTTON */}
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="hidden sm:flex items-center gap-2 bg-[#EFA721] hover:bg-[#F8C765] text-[#1C1C1C] font-bold text-xs px-4 py-2.5 rounded-md btn-gold-glow transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>GET QUOTE</span>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#EFA721] transition-colors rounded-md border border-[#333333]"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#333333] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 pb-4 border-b border-[#2A2A2A]">
            <button
              type="button"
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center gap-2 bg-[#242424] text-gray-400 text-xs px-3 py-2.5 rounded border border-[#333333]"
            >
              <Search className="w-4 h-4 text-[#EFA721]" />
              <span>Search products...</span>
            </button>
          </div>

          <nav className="flex flex-col gap-3 font-semibold text-sm">
            <Link
              to="/"
              className={`py-2 px-3 rounded ${isActive('/') ? 'bg-[#242424] text-[#EFA721]' : 'text-white'}`}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className={`py-2 px-3 rounded ${isActive('/shop') ? 'bg-[#242424] text-[#EFA721]' : 'text-white'}`}
            >
              SHOP
            </Link>
            
            <div className="py-2 px-3 space-y-2">
              <div className="text-xs font-bold text-[#EFA721] tracking-wider uppercase">
                CATEGORIES
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories?slug=${cat.slug}`}
                    className="text-xs text-gray-300 hover:text-[#EFA721] py-1 block"
                  >
                    • {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className={`py-2 px-3 rounded ${isActive('/about') ? 'bg-[#242424] text-[#EFA721]' : 'text-white'}`}
            >
              ABOUT US
            </Link>
            <Link
              to="/global-presence"
              className={`py-2 px-3 rounded ${isActive('/global-presence') ? 'bg-[#242424] text-[#EFA721]' : 'text-white'}`}
            >
              GLOBAL PRESENCE
            </Link>
            <Link
              to="/contact"
              className={`py-2 px-3 rounded ${isActive('/contact') ? 'bg-[#242424] text-[#EFA721]' : 'text-white'}`}
            >
              CONTACT
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#2A2A2A]">
            <button
              type="button"
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#EFA721] text-[#1C1C1C] font-extrabold text-sm py-3 rounded-md shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>REQUEST B2B QUOTE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
