import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import { ProductCategory, ProductItem } from '../types';
import { ArrowUpRight, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (category?: string, modelName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Equipment' },
    { id: 'sms-equipment', label: 'Steel Melting Shop (SMS)' },
    { id: 'eot-cranes', label: 'EOT Cranes & Hoists' },
    { id: 'conveyor-systems', label: 'Conveyors & Mills' },
    { id: 'hydro-mechanical', label: 'Hydro-Mechanical' },
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Manufactured Machinery & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Industrial Equipment Engineered for Heavy Steel & Bulk Handling
            </h2>
            <p className="text-base text-slate-600">
              Designed in compliance with IS 3177, IS 807, and international standards for extreme duty cycles and high thermal environments.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote()}
            className="self-start md:self-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <span>Request Full Catalog PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl overflow-x-auto mb-10 border border-slate-200/80">
          <div className="flex items-center gap-2 px-3 text-xs font-semibold text-slate-500 whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter By Sector:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group hover:border-slate-300"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-mono px-2.5 py-1 rounded">
                  {product.capacity}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Clean unboxed category label with separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-amber-600">{product.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Heavy Fabrication</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Key Spec Snippet */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Design Standard</span>
                    <span className="font-mono text-slate-700 font-medium">
                      {product.standards[0]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Duty Rating</span>
                    <span className="font-mono text-slate-700 font-medium">
                      Class IV / Mill Duty
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(product.category, product.name)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    Inquire
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Note on Custom Engineering */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need Custom Sizing or Non-Standard Spans?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Our in-house design team generates complete CAD GA drawings and structural calculations tailored to your existing bay clearances.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestQuote()}
            className="px-6 py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Consult Engineering Team
          </button>
        </div>

      </div>
    </section>
  );
};
