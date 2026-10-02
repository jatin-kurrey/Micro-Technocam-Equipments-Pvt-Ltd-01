import React, { useState } from 'react';
import { INFRASTRUCTURE_PILLARS, COMPANY_INFO } from '../data/companyData';
import { Factory, ShieldCheck, Cpu, Flame, Wrench, CheckCircle, MapPin } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState(INFRASTRUCTURE_PILLARS[0].id);

  const activePillar = INFRASTRUCTURE_PILLARS.find((p) => p.id === selectedPillarId) || INFRASTRUCTURE_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'heavy-bay':
        return <Factory className="w-5 h-5" />;
      case 'cnc-cutting':
        return <Flame className="w-5 h-5" />;
      case 'welding-machining':
        return <Wrench className="w-5 h-5" />;
      case 'testing-lab':
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="infrastructure" className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow & subtle ambient styling */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Manufacturing Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            State-of-the-Art Heavy Engineering & Machining Facility in Durg, CG
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Our Joratarai manufacturing plant combines heavy tandem lifting power, automated submerged arc welding lines, and floor-type horizontal boring machines to handle severe-duty machinery with sub-millimeter tolerances.
          </p>
        </div>

        {/* Top Grid: Facility Visual Showcase & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          
          {/* Main Visual */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[16/10] bg-slate-950">
            <img
              src="/src/assets/images/heavy_fabrication_bay_1790962142549.jpg"
              alt="MTCE Heavy Machinery Fabrication Shop Floor in Durg"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-medium text-slate-200">
                  Joratarai Industrial Area, Durg (Chhattisgarh)
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-amber-400">
                45,000+ Sq. Ft. Covered Bay
              </span>
            </div>
          </div>

          {/* Plant Specs Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-500" />
                <span>Heavy Production Capabilities</span>
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>60T Tandem Crane Hook Capacity:</strong> Dual 30T cranes operating in tandem for turning and assembling massive machine girders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>14m Hook Height:</strong> Ample vertical headroom to assemble upright continuous casting machines and tall ladle structures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>CNC Plasma & SAW:</strong> Multi-torch computer-controlled plate cutting up to 150mm thick with automated seam welding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Logistics Access:</strong> Rapid transit via NH53 to Bhilai, Raipur, Raigarh, and Visakhapatnam Port corridors.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Interactive Infrastructure Deep Dive Tabs */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-2">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Explore Manufacturing Divisions:
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {INFRASTRUCTURE_PILLARS.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-3.5 rounded-lg text-left transition-all border flex items-center gap-3 ${
                    selectedPillarId === pillar.id
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                      : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className={`p-2 rounded ${selectedPillarId === pillar.id ? 'bg-slate-950 text-amber-400' : 'bg-slate-700 text-amber-400'}`}>
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold line-clamp-2">
                    {pillar.title.split('&')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Pillar Details Card */}
          <div className="bg-slate-800/80 rounded-xl p-6 sm:p-8 border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
                    Division Breakdown
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activePillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePillar.summary}
                </p>

                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Certified Capacity Benchmark:
                  </div>
                  <div className="text-sm font-semibold text-amber-400">
                    {activePillar.capacityDetail}
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Compliance Code: {activePillar.standards}</span>
                </div>
              </div>

              {/* Machinery & Equipment List */}
              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-300">
                  Installed Machine Fleet & Instruments
                </h4>

                <div className="space-y-2.5">
                  {activePillar.machinery.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
