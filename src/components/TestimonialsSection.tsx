import React from 'react';
import { MessageSquare, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Reliable Plumbing Services, I would like to enquire about your plumbing services.'
  )}`;

  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <span>Customer Feedback</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Reliable Plumbing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Customer reviews coming soon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            We value genuine client feedback. Verified customer reviews from recent plumbing projects in South Africa will be published here shortly.
          </p>
        </div>

        {/* Neutral Placeholder Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
            <MessageSquare className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">
              Customer reviews coming soon
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Have you recently used Reliable Plumbing Services? We welcome your feedback or questions about our services across South Africa.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Plumber</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
