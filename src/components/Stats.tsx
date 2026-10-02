import React from 'react';
import { KEY_METRICS } from '../data/companyData';
import { ShieldCheck, Award, Factory, Wrench } from 'lucide-react';

export const Stats: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 text-amber-500" />;
      case 1:
        return <Factory className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 3:
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-6 lg:p-7 flex flex-col justify-between hover:bg-slate-800/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 group-hover:text-amber-400 transition-colors">
                  {metric.label}
                </span>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  {getIcon(idx)}
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">
                  {metric.unit}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
