import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Equipment Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate real submission
    setTimeout(() => {
      const generatedRef = 'MTCE-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Facility Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Direct Contact & Plant Location
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Connect with our Heavy Engineering Division
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need a full turnkey continuous casting machine layout, a custom 100T crane quotation, or on-site maintenance audits, our technical sales engineers are ready to assist.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-amber-600 border border-slate-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Plant & Registered Office</h4>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.headquarters}
                  </p>
                  <p className="text-xs text-amber-600 font-medium mt-1">
                    Near Bhilai Steel Plant / NH 53 Logistics Hub
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-amber-600 border border-slate-200 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telephone Lines</h4>
                  <div className="text-slate-600 mt-0.5 space-y-1">
                    <p className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-medium w-24">Sales & Quotes:</span>
                      <a href={`tel:${COMPANY_INFO.phoneSales.replace(/\s+/g, '')}`} className="font-mono text-slate-900 font-semibold hover:text-amber-600">
                        {COMPANY_INFO.phoneSales}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-medium w-24">Plant Office:</span>
                      <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="font-mono text-slate-900 font-semibold hover:text-amber-600">
                        {COMPANY_INFO.phonePrimary}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-medium w-24">Emergency 24/7:</span>
                      <a href={`tel:${COMPANY_INFO.phoneEmergency.replace(/\s+/g, '')}`} className="font-mono text-amber-600 font-bold hover:underline">
                        {COMPANY_INFO.phoneEmergency}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-amber-600 border border-slate-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Correspondence</h4>
                  <div className="text-slate-600 mt-0.5 space-y-1 text-xs">
                    <p>
                      Sales & RFQs:{' '}
                      <a href={`mailto:${COMPANY_INFO.emailSales}`} className="font-semibold text-slate-900 hover:text-amber-600">
                        {COMPANY_INFO.emailSales}
                      </a>
                    </p>
                    <p>
                      Tenders & Procurement:{' '}
                      <a href={`mailto:${COMPANY_INFO.emailTender}`} className="font-semibold text-slate-900 hover:text-amber-600">
                        {COMPANY_INFO.emailTender}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-amber-600 border border-slate-200 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600 mt-0.5 text-xs">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications strip */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              {COMPANY_INFO.certifications.map((c) => (
                <span key={c} className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-md border border-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Submit Technical or Commercial Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our engineering team responds with technical datasheets and commercial proposals within 24 working hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base">Inquiry Successfully Transmitted</h4>
                      <p className="text-xs text-emerald-700">
                        Reference Number: <strong className="font-mono text-emerald-950 font-bold">{referenceId}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong> from <strong>{formData.company || 'your organization'}</strong>. A dedicated engineering coordinator has been assigned to your requirement. You will receive an initial feasibility report and technical questionnaire shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        subject: 'General Equipment Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jindal Steel / Sponge Iron Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="Steel Melting Shop Equipment (CCM / LRF)">Steel Melting Shop Equipment (CCM / LRF)</option>
                      <option value="EOT Cranes & Material Handling (up to 150T)">EOT Cranes & Material Handling (up to 150T)</option>
                      <option value="Conveyor Systems & Ball Mills">Conveyor Systems & Ball Mills</option>
                      <option value="Hydro-Mechanical / Plate Girder Bridges">Hydro-Mechanical / Plate Girder Bridges</option>
                      <option value="AMC / Emergency Breakdown Services">AMC / Emergency Breakdown Services</option>
                      <option value="Other Custom Heavy Fabrication">Other Custom Heavy Fabrication</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Technical Scope / Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify capacity (Tons/TPH), crane span, casting radius, plant location, or delivery timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry to Sales Team</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
