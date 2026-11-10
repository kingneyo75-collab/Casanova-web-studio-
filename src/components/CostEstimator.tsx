import React, { useState } from 'react';
import { CircleDollarSign, Check, Clock, ArrowRight, MessageCircle, Info } from 'lucide-react';
import { COST_ESTIMATES, CONTACT_INFO } from '../data/plumbingData';

interface CostEstimatorProps {
  onSelectService: (serviceName: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onSelectService }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const selectedItem = COST_ESTIMATES[selectedIdx];

  const handleWhatsAppQuote = (item: (typeof COST_ESTIMATES)[0]) => {
    const text = `Hi Reliable Plumbing Services, I checked your online guide for '${item.service}' (Estimated ${item.range}). Could I get a formal quotation for my home?`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <span>Fair & Honest Upfront Pricing</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>South African Rand (ZAR)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Transparent Plumbing Cost Estimator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            No surprise fees or exorbitant call-out charges. Review standard estimated costs below for residential plumbing services across South Africa before booking.
          </p>
        </div>

        {/* Interactive Pricing Guide layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of Services */}
          <div className="lg:col-span-5 space-y-2.5">
            {COST_ESTIMATES.map((item, index) => {
              const isSelected = selectedIdx === index;
              return (
                <button
                  key={item.service}
                  onClick={() => setSelectedIdx(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                      : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="pr-3">
                    <span className="block text-sm font-bold text-slate-900">
                      {item.service}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {item.duration}
                    </span>
                  </div>
                  <span className="text-sm font-extrabold text-blue-700 font-mono whitespace-nowrap">
                    {item.range}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Item Breakdown Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Detailed Estimate Breakdown
                </span>
                <span className="text-xs text-slate-500">
                  Prices include standard labor & diagnostics
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                {selectedItem.service}
              </h3>

              <div className="flex items-baseline gap-3 py-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono">
                  {selectedItem.range}
                </span>
                <span className="text-sm text-slate-500 font-medium">ZAR (incl. VAT)</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.details}
              </p>

              <div className="space-y-2.5 pt-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certified PIRB licensed technician on site</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Official written invoice and SABS compliant parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>12-Month guarantee on replacement components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>No payment required until job is completed and tested</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Exact cost depends on required pipe lengths, access conditions, and replacement hardware brand. We provide an exact written quote before any physical work starts.
                </span>
              </div>
            </div>

            {/* Direct Booking Triggers */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onSelectService(selectedItem.service)}
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleWhatsAppQuote(selectedItem)}
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Request Quote on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
