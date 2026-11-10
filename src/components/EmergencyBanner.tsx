import React, { useState } from 'react';
import { AlertTriangle, Phone, MessageCircle, ChevronDown, ChevronUp, Droplets, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/plumbingData';

export const EmergencyBanner: React.FC = () => {
  const [showTips, setShowTips] = useState(false);

  const emergencyWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'EMERGENCY PLUMBING REQUEST: I have an urgent plumbing issue (burst pipe / flooded ceiling / burst geyser / blocked sewer). Please dispatch a plumber immediately!'
  )}`;

  return (
    <section className="bg-amber-500 text-slate-950 py-4 px-4 sm:px-6 lg:px-8 border-y border-amber-600 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Emergency Status */}
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 fill-amber-400 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg uppercase tracking-tight">
                24/7 Rapid Emergency Plumbing Dispatch
              </span>
              <span className="hidden sm:inline text-xs font-semibold px-2 py-0.5 rounded bg-slate-900 text-amber-300">
                Avg ETA: 45 Mins
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-900 font-medium">
              Burst geyser, ceiling leaks, or overflowing sewer? Our on-duty plumbers are ready right now.
            </p>
          </div>
        </div>

        {/* Right: Instant Contact Actions */}
        <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-center">
          <a
            href={`tel:${CONTACT_INFO.emergencyPhoneRaw}`}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-950 text-amber-400 hover:bg-slate-900 font-bold text-xs sm:text-sm shadow-md transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-amber-400 text-slate-950" />
            <span>Call {CONTACT_INFO.emergencyPhoneDisplay}</span>
          </a>

          <a
            href={emergencyWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Emergency WhatsApp</span>
          </a>

          <button
            onClick={() => setShowTips(!showTips)}
            className="p-2 rounded-lg bg-amber-600/50 hover:bg-amber-600 text-slate-950 transition-colors"
            title="Emergency first-aid plumbing steps"
            aria-expanded={showTips}
          >
            {showTips ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Emergency First-Aid Advice */}
      {showTips && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-amber-600/40 text-xs sm:text-sm text-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 bg-amber-400/80 rounded-lg border border-amber-600/30">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-slate-950">
              <Droplets className="w-4 h-4 text-blue-900" />
              1. Shut Off Main Water Supply
            </span>
            <p className="text-xs text-slate-900">
              Locate the municipal water stopcock outside near the street meter or front garden wall and turn it clockwise until tight.
            </p>
          </div>

          <div className="p-3 bg-amber-400/80 rounded-lg border border-amber-600/30">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-slate-950">
              <Zap className="w-4 h-4 text-amber-900" />
              2. Switch Off Geyser Circuit Breaker
            </span>
            <p className="text-xs text-slate-900">
              Go to your home distribution board (DB box) and trip the breaker labelled &quot;Geyser&quot; or &quot;Water Heater&quot; to prevent element burnout or electrical hazard.
            </p>
          </div>

          <div className="p-3 bg-amber-400/80 rounded-lg border border-amber-600/30">
            <span className="font-bold flex items-center gap-1.5 mb-1 text-slate-950">
              <AlertTriangle className="w-4 h-4 text-slate-950" />
              3. Open Lowest Garden Tap
            </span>
            <p className="text-xs text-slate-900">
              Open a low cold water garden tap to drain residual pipe pressure away from ceiling areas while our technician drives out.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
