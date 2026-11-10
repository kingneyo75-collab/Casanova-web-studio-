import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/plumbingData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Reliable Plumbing Services, I need plumbing assistance. Are you available?'
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <div className="relative flex items-center">
          {showTooltip && (
            <div className="absolute right-full mr-3 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap border border-slate-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Online now · WhatsApp Plumber</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-slate-400 hover:text-white ml-1 text-xs"
                title="Dismiss"
              >
                ✕
              </button>
            </div>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/40"
            aria-label="Contact Plumber on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Quick Action Bar (Compact, <= 50px high to obey 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 shadow-2xl">
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {/* Mobile Call Button */}
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs active:bg-blue-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-white text-blue-600" />
            <span>Call Plumber</span>
          </a>

          {/* Mobile WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-xs active:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </>
  );
};
