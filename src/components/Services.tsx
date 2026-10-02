import React from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { Wrench, PhoneCall, Check, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onRequestQuote: (category?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestQuote }) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Lifecycle Engineering Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Maintenance Contracts, Emergency Repairs & On-Site Engineering
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Industrial machinery reliability depends on rigorous maintenance and rapid field intervention. MTCE supports steel plants with certified technical crews, precision alignment, and emergency breakdown coverage.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wide">
                    {`0${index + 1}. ${service.badge}`}
                  </span>
                  <span className="text-xs text-slate-600 font-medium">
                    {service.sla}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="pt-2 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Certified Technicians</span>
                <button
                  onClick={() => onRequestQuote('Services & Maintenance')}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire for Contract</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Breakdown Callout Banner */}
        <div className="rounded-xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
              <Clock className="w-4 h-4" />
              <span>24/7 Rapid Response Unit</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Critical Breakdown on EOT Crane, CCM, or Rolling Mill?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Our rapid field service team is on call 24 hours a day for plants in the Chhattisgarh and central India industrial corridor. Immediate phone diagnosis and technician deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Emergency Line: {COMPANY_INFO.phoneEmergency}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
