import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown, Send } from 'lucide-react';
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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0C0E]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#2D303E]' 
        : 'bg-[#0B0C0E] py-4 border-b border-[#2D303E]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* LEFT LOGO */}
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center gap-1">
            <span className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors leading-none">
              KoKo
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block mb-1 group-hover:scale-125 transition-transform" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.2em] text-white/80 uppercase mt-0.5">
            GLOBAL DISTRIBUTOR
          </span>
        </Link>

        {/* CENTER DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold tracking-wider uppercase">
          <Link
            to="/"
            className={`transition-colors py-1.5 border-b-2 ${
              isActive('/') 
                ? 'text-[#F59E0B] border-[#F59E0B]' 
                : 'text-white/90 border-transparent hover:text-[#F59E0B]'
            }`}
          >
            HOME
          </Link>

          <Link
            to="/shop"
            className={`transition-colors py-1.5 border-b-2 ${
              isActive('/shop') 
                ? 'text-[#F59E0B] border-[#F59E0B]' 
                : 'text-white/90 border-transparent hover:text-[#F59E0B]'
            }`}
          >
            SHOP
          </Link>

          {/* CATEGORIES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <Link
              to="/categories"
              className={`flex items-center gap-1 py-1.5 border-b-2 ${
                isActive('/categories')
                  ? 'text-[#F59E0B] border-[#F59E0B]' 
                  : 'text-white/90 border-transparent hover:text-[#F59E0B]'
              }`}
            >
              <span>CATEGORIES</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#F59E0B] transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#16171E] border border-[#2D303E] shadow-2xl rounded-lg p-3 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[10px] font-extrabold tracking-widest text-[#F59E0B] uppercase px-3 py-1.5 border-b border-[#2D303E] mb-1">
                  Export Categories
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories?slug=${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-[#1A1C25] rounded transition-all"
                      onClick={() => setProductsDropdownOpen(false)}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-[#F59E0B] font-mono bg-[#0B0C0E] px-1.5 py-0.5 rounded border border-[#2D303E]">
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
            className={`transition-colors py-1.5 border-b-2 ${
              isActive('/about') 
                ? 'text-[#F59E0B] border-[#F59E0B]' 
                : 'text-white/90 border-transparent hover:text-[#F59E0B]'
            }`}
          >
            ABOUT
          </Link>

          <Link
            to="/global-presence"
            className={`transition-colors py-1.5 border-b-2 ${
              isActive('/global-presence') 
                ? 'text-[#F59E0B] border-[#F59E0B]' 
                : 'text-white/90 border-transparent hover:text-[#F59E0B]'
            }`}
          >
            GLOBAL PRESENCE
          </Link>

          <Link
            to="/contact"
            className={`transition-colors py-1.5 border-b-2 ${
              isActive('/contact') 
                ? 'text-[#F59E0B] border-[#F59E0B]' 
                : 'text-white/90 border-transparent hover:text-[#F59E0B]'
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          {/* SEARCH BUTTON */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-white/80 hover:text-[#F59E0B] transition-colors rounded-full hover:bg-[#16171E]"
            aria-label="Search catalog"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* CART BUTTON */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-white/80 hover:text-[#F59E0B] transition-colors rounded-full hover:bg-[#16171E]"
            aria-label="View selection"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-[#0B0C0E] font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* PRIMARY CTA: REQUEST A QUOTE */}
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="hidden sm:flex items-center gap-2 bg-[#F59E0B] hover:bg-[#FBBF24] text-[#0B0C0E] font-extrabold text-xs px-5 py-2.5 rounded-md btn-gold-glow transition-all uppercase tracking-wider"
          >
            <Send className="w-3.5 h-3.5" />
            <span>REQUEST A QUOTE</span>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F59E0B] transition-colors rounded-md border border-[#2D303E]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0C0E] border-b border-[#2D303E] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 pb-4 border-b border-[#2D303E]">
            <button
              type="button"
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center gap-2 bg-[#16171E] text-white/70 text-xs px-3 py-2.5 rounded border border-[#2D303E]"
            >
              <Search className="w-4 h-4 text-[#F59E0B]" />
              <span>Search products or categories...</span>
            </button>
          </div>

          <nav className="flex flex-col gap-2 font-extrabold text-xs tracking-wider uppercase">
            <Link
              to="/"
              className={`py-2 px-3 rounded ${isActive('/') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className={`py-2 px-3 rounded ${isActive('/shop') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              SHOP
            </Link>
            <Link
              to="/categories"
              className={`py-2 px-3 rounded ${isActive('/categories') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              CATEGORIES
            </Link>

            <div className="py-2 px-3 space-y-2">
              <div className="text-[10px] font-extrabold text-[#F59E0B] tracking-widest uppercase">
                EXPORT CATEGORIES
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories?slug=${cat.slug}`}
                    className="text-xs text-white/80 hover:text-[#F59E0B] py-1 block"
                  >
                    • {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className={`py-2 px-3 rounded ${isActive('/about') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              ABOUT
            </Link>
            <Link
              to="/global-presence"
              className={`py-2 px-3 rounded ${isActive('/global-presence') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              GLOBAL PRESENCE
            </Link>
            <Link
              to="/contact"
              className={`py-2 px-3 rounded ${isActive('/contact') ? 'bg-[#16171E] text-[#F59E0B]' : 'text-white'}`}
            >
              CONTACT
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#2D303E]">
            <button
              type="button"
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] text-[#0B0C0E] font-extrabold text-xs py-3 rounded shadow-lg uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
