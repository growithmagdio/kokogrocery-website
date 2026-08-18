import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { GlobalPresenceSection } from '../components/home/GlobalPresenceSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { ExportProcessSection } from '../components/home/ExportProcessSection';
import { QualityComplianceSection } from '../components/home/QualityComplianceSection';
import { WhoWeServeSection } from '../components/home/WhoWeServeSection';
import { WhyKokoSection } from '../components/home/WhyKokoSection';
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
    <div className="space-y-0 bg-[#0B0C0E]">
      {/* 1. HERO */}
      <Hero onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 2. WHO WE ARE */}
      <AboutSection />

      {/* 3. WHAT WE EXPORT */}
      <CategoriesSection />

      {/* 4. GLOBAL REACH */}
      <GlobalPresenceSection />

      {/* 5. OUR SERVICES */}
      <ServicesSection />

      {/* 6. HOW IT WORKS */}
      <ExportProcessSection />

      {/* 7. QUALITY & COMPLIANCE */}
      <QualityComplianceSection />

      {/* 8. WHO WE SERVE */}
      <WhoWeServeSection />

      {/* 9. WHY KOKO */}
      <WhyKokoSection />

      {/* 10. B2B ENQUIRY */}
      <B2BExportCTA onOpenQuoteModal={() => onOpenQuoteModal()} />
    </div>
  );
};

export default HomePage;
