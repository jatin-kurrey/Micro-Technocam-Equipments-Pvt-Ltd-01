import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CheckCircle2, Shield, Compass, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Credentials (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Corporate Profile & Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                15+ Years of Dedicated Heavy Machinery Manufacturing in Central India
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Established in {COMPANY_INFO.establishedYear}, <strong>Micro Technocam Equipments Pvt. Ltd. (MTCE)</strong> has evolved from a specialized heavy fabrication shop into a premier engineering provider for India’s steel, metal smelting, and heavy material handling sectors.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Situated in the Joratarai Industrial Area of Durg, Chhattisgarh—adjacent to the Bhilai Steel Plant and the Raipur-Bilaspur industrial corridor—we leverage our central location to deliver fast engineering turnaround, competitive fabrication logistics, and rapid on-site mobilization across national steel plants.
            </p>

            {/* Core Competencies List (Unboxed, clean) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Custom Engineering & FEA</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Finite Element Analysis and dynamic stress modeling for extreme thermal loads.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Mill Duty Class IV Standards</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Built strictly per IS 3177, IS 4137, FEM 1.001, and DIN 15018 specifications.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Heavy Tandem Lift Capacity</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Shop lifting clearance supporting tandem assemblies up to 60 Metric Tons.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Certified In-House NDT</h4>
                  <p className="text-xs text-slate-500 mt-0.5">100% volumetric ultrasonic and magnetic particle testing before dispatch.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Feature Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Quality Assured Operation</h3>
                    <p className="text-xs text-slate-400">Integrated Management System</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300 divide-y divide-slate-800">
                  <div className="pt-3 first:pt-0 flex justify-between items-center">
                    <span className="text-slate-400">Quality Standard</span>
                    <span className="font-semibold text-white font-mono">ISO 9001:2015</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-slate-400">Design Code</span>
                    <span className="font-semibold text-white font-mono">IS 3177 / IS 807 / IS 2825</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-slate-400">Welder Certification</span>
                    <span className="font-semibold text-white font-mono">ASME Sec IX / AWS D1.1</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-slate-400">Facility Land Area</span>
                    <span className="font-semibold text-white font-mono">45,000+ sq. ft Covered Bay</span>
                  </div>
                  <div className="pt-3 flex justify-between items-center">
                    <span className="text-slate-400">Jurisdiction</span>
                    <span className="font-semibold text-white">Durg, CG (Near Bhilai)</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                    <Compass className="w-4 h-4" />
                    <span>Strategic Logistics Corridor</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Connected directly to National Highway 53 (NH53) with direct multi-axle trailer loading facilities for nationwide dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
