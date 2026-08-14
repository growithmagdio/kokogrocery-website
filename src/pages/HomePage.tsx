import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { WhyKokoSection } from '../components/home/WhyKokoSection';
import { AboutSection } from '../components/home/AboutSection';
import { BusinessPhilosophy } from '../components/home/BusinessPhilosophy';
import { GlobalPresenceSection } from '../components/home/GlobalPresenceSection';
import { ProductPortfolioSection } from '../components/home/ProductPortfolioSection';
import { QualityComplianceSection } from '../components/home/QualityComplianceSection';
import { B2BExportCTA } from '../components/home/B2BExportCTA';
import { Product } from '../types';

interface HomePageProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProduct,
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. PRODUCT CATEGORIES */}
      <CategoriesSection />

      {/* 4. FEATURED PRODUCTS */}
      <FeaturedProducts
        onSelectProduct={onSelectProduct}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 5. WHY KOKO */}
      <WhyKokoSection />

      {/* 6. ABOUT KOKO */}
      <AboutSection />

      {/* 7. OUR BUSINESS PHILOSOPHY */}
      <BusinessPhilosophy />

      {/* 8. GLOBAL PRESENCE */}
      <GlobalPresenceSection />

      {/* 9. PRODUCT PORTFOLIO */}
      <ProductPortfolioSection />

      {/* 10. QUALITY & COMPLIANCE */}
      <QualityComplianceSection />

      {/* 11. B2B EXPORT CTA */}
      <B2BExportCTA onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};
