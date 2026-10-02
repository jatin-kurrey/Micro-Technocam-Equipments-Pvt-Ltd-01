import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onRequestQuote: (prefillCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800'
          : 'bg-slate-900 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-xl tracking-wider shadow-sm group-hover:bg-amber-400 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                MTCE
              </span>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide">
                Micro Technocam Equipments
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-amber-400"
            >
              About Us
            </a>
            <a
              href="#products"
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-amber-400"
            >
              Products & Equipment
            </a>
            <a
              href="#infrastructure"
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-amber-400"
            >
              Plant & Infrastructure
            </a>
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-amber-400"
            >
              Services & AMC
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-amber-400"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Hotline */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneSales.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-amber-400 transition-colors"
              title="Call Sales Team"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.phoneSales}</span>
            </a>
            <button
              onClick={() => onRequestQuote()}
              className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onRequestQuote()}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-500 rounded hover:bg-amber-400 transition-colors whitespace-nowrap"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Products & Equipment
            </a>
            <a
              href="#infrastructure"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Plant & Infrastructure
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Services & AMC
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Contact & Plant Location
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <div className="text-xs text-slate-400 flex items-center justify-between px-1">
              <span>Sales Hotline:</span>
              <a
                href={`tel:${COMPANY_INFO.phoneSales.replace(/\s+/g, '')}`}
                className="font-mono text-amber-400 font-medium"
              >
                {COMPANY_INFO.phoneSales}
              </a>
            </div>
            <button
              onClick={() => {
                closeMenu();
                onRequestQuote();
              }}
              className="w-full py-3 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors text-center"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
