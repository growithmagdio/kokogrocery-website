import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ContactPage } from './pages/ContactPage';
import { GlobalPresencePage } from './pages/GlobalPresencePage';

import { ProductDetailModal } from './components/product/ProductDetailModal';
import { QuoteModal } from './components/modals/QuoteModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { SearchModal } from './components/search/SearchModal';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

import { Product, CartItem } from './types';

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

export const AppContent: React.FC = () => {
  // Modal & Drawer state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart items state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Handlers
  const handleOpenQuoteModal = (productName: string = '') => {
    setQuoteProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteProduct('');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0B0C0E] flex flex-col justify-between selection:bg-[#F59E0B] selection:text-[#0B0C0E]">
      <ScrollToTop />

      {/* HEADER */}
      <Header
        cartCount={totalCartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* MAIN ROUTES */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <ShopPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ShopPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route
            path="/categories"
            element={
              <CategoriesPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/global-presence"
            element={<GlobalPresencePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppWidget />

      {/* MODALS & DRAWERS */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={quoteProduct}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
