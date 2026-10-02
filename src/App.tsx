/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutSection } from './components/AboutSection';
import { Products } from './components/Products';
import { Infrastructure } from './components/Infrastructure';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';
import { ProductItem } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefillCategory, setQuotePrefillCategory] = useState<string>('sms-equipment');
  const [quotePrefillModel, setQuotePrefillModel] = useState<string>('');

  const handleOpenQuoteModal = (category?: string, modelName?: string) => {
    if (category) setQuotePrefillCategory(category);
    if (modelName) setQuotePrefillModel(modelName);
    else setQuotePrefillModel('');
    setQuoteModalOpen(true);
  };

  const handleProductQuote = (product: ProductItem) => {
    setQuotePrefillCategory(product.category);
    setQuotePrefillModel(product.name);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onRequestQuote={() => handleOpenQuoteModal()} />

        {/* 3. Stats Section */}
        <Stats />

        {/* 4. About Us / Corporate Profile */}
        <AboutSection />

        {/* 5. Core Products Section (4 Main Categories & Interactive Grid) */}
        <Products
          onSelectProduct={(product) => setSelectedProduct(product)}
          onRequestQuote={(cat, model) => handleOpenQuoteModal(cat, model)}
        />

        {/* 6. Why Choose Us / Infrastructure (Durg, Chhattisgarh Plant) */}
        <Infrastructure />

        {/* 7. Services & AMC Section */}
        <Services onRequestQuote={(cat) => handleOpenQuoteModal(cat)} />

        {/* 8. Industrial Proof / Testimonials */}
        <Testimonials />

        {/* 9. Direct Contact & Facility Details */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer onRequestQuote={() => handleOpenQuoteModal()} />

      {/* Interactive Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuoteForProduct={handleProductQuote}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillCategory={quotePrefillCategory}
        prefillModel={quotePrefillModel}
      />
    </div>
  );
}
