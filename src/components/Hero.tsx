import React from 'react';
import { ArrowRight, ShieldCheck, Cog, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_industrial_plant_1790962032320.jpg"
          alt="Micro Technocam Equipments Heavy Engineering Workshop Bay"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transform motion-safe:transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Scrim: deep navy/slate gradient to guarantee WCAG AAA legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl space-y-8">
          
          {/* Unboxed Regional & Provenance Marker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Durg, Chhattisgarh
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Est. {COMPANY_INFO.establishedYear}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ISO 9001:2015 Certified
            </span>
          </div>

          {/* Main Industrial Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-none sm:leading-tight">
            Engineered for Extreme Loads. <br />
            <span className="text-amber-400">Built for Continuous Production.</span>
          </h1>

          {/* Subheadline with concrete engineering scope */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Micro Technocam Equipments Pvt. Ltd. (MTCE) manufactures high-duty Steel Melting Shop (SMS) machinery, Continuous Casting Machines, Class IV EOT Cranes up to 150 Tons, and heavy bulk material processing systems.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onRequestQuote}
              className="px-7 py-4 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#products"
              className="px-7 py-4 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 backdrop-blur-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Cog className="w-4 h-4 text-slate-300" />
              <span>Explore Equipment Catalog</span>
            </a>
          </div>

          {/* Core Machine Category Markers (Clean unboxed text) */}
          <div className="pt-6 border-t border-slate-800/80">
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
              Primary Manufacturing Sectors:
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-200">
              <a href="#products" className="hover:text-amber-400 transition-colors">CCM & Ladle Furnaces</a>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <a href="#products" className="hover:text-amber-400 transition-colors">EOT & Goliath Cranes (Up to 150T)</a>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <a href="#products" className="hover:text-amber-400 transition-colors">Sponge Iron Conveyors & Mills</a>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <a href="#products" className="hover:text-amber-400 transition-colors">Hydro-Mechanical Girders</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
