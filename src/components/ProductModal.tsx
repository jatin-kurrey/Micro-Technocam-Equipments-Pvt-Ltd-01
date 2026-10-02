import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuoteForProduct: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuoteForProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              {product.categoryLabel}
            </span>
            <h3 id="product-modal-title" className="text-xl font-bold text-white mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top visual & summary block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs text-white flex items-center justify-between">
                <span className="font-semibold text-amber-400">{product.capacity}</span>
                <span className="text-[11px] text-slate-300">Class IV Duty</span>
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Product Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Compliant Engineering Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-slate-700 bg-slate-100 rounded border border-slate-200"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Target Industrial Applications
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                  {product.applications.map((app, i) => (
                    <span key={app} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Technical Parameters & Operating Limits
              </span>
              <span className="text-[11px] font-mono text-slate-500">IS/ISO Standardized</span>
            </div>
            <div className="divide-y divide-slate-200 text-sm">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-2 px-4 py-2.5 hover:bg-slate-50">
                  <span className="font-medium text-slate-700">{spec.label}</span>
                  <span className="text-slate-900 font-mono tabular-nums text-sm sm:text-right mt-0.5 sm:mt-0 font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Key Engineering & Safety Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Direct Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Custom modifications and sizing available for specific plant layouts.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuoteForProduct(product);
              }}
              className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
            >
              <span>Request Quote for This Equipment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
