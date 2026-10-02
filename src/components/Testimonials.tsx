import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/companyData';
import { Quote, Building2, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Industrial Client References
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by Integrated Steel Plants & Foundries Across India
          </h2>
          <p className="text-sm text-slate-600">
            Verified performance feedback from plant leadership operating MTCE continuous casting machines, mill-duty cranes, and conveying systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-500/40" />
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-1">
                <div className="text-sm font-bold text-slate-900">
                  {t.author}
                </div>
                <div className="text-xs text-amber-600 font-medium">
                  {t.role}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{t.company}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
