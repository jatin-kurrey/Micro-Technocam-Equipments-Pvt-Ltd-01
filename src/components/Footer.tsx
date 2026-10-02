import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-950 text-lg">
                M
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MTCE
              </span>
            </div>

            <p className="text-xs text-slate-300 font-semibold">
              Micro Technocam Equipments Pvt. Ltd.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Manufacturers of heavy industrial machinery, continuous casting machines, mill-duty EOT cranes up to 150 Tons, and heavy mineral conveying systems since 2010.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO 9001:2015 Certified
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Make in India</span>
            </div>
          </div>

          {/* Col 2: Equipment Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Industrial Equipment
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Continuous Casting Machines (CCM)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Ladle Refining Furnaces (LRF)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Double Girder EOT Cranes (up to 150T)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Goliath & Gantry Cranes
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Sponge Iron Conveying Systems
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Ball Mills & Rolling Mill Stands
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Hydro-Mechanical Plate Girders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About MTCE
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Equipment Catalog
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-amber-400 transition-colors">
                  Plant & Facilities
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services & AMC
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Request Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Facility & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Manufacturing Facility
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Joratarai Industrial Area, Durg - 491001, Chhattisgarh, India
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneSales.replace(/\s+/g, '')}`} className="font-mono text-slate-300 hover:text-amber-400">
                  {COMPANY_INFO.phoneSales}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.emailSales}`} className="text-slate-300 hover:text-amber-400">
                  {COMPANY_INFO.emailSales}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center"
              >
                Inquire for Machine Pricing
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Micro Technocam Equipments Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>CIN: U29253CT2010PTC021948</span>
            <span aria-hidden="true">·</span>
            <span>GSTIN: 22AADCM4188Q1ZR</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
