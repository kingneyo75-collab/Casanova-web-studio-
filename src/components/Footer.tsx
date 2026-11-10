import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, PLUMBING_SERVICES } from '../data/plumbingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-white">
                Reliable Plumbing Services
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional, certified plumbing services across South Africa. Delivering precision leak detection, burst geyser replacement, hydro-jet drain unblocking, and complete piping installations with guaranteed workmanship.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-300">Standards & Insurance:</p>
              <p>{CONTACT_INFO.registration} · {CONTACT_INFO.compliance}</p>
              <p>{CONTACT_INFO.insurance}</p>
            </div>
          </div>

          {/* Col 3: Plumbing Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Plumbing Services
            </h4>
            <ul className="space-y-2 text-xs">
              {PLUMBING_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  ZAR Pricing Guide
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-blue-400 transition-colors">
                  Service Areas (SA)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact & Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Placeholder Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Emergency
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-500 block">Phone:</span>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="font-mono text-white hover:text-blue-400 transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">WhatsApp:</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {CONTACT_INFO.whatsappDisplay}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">24/7 Emergency Line:</span>
                <a
                  href={`tel:${CONTACT_INFO.emergencyPhoneRaw}`}
                  className="font-mono text-amber-400 hover:text-amber-300 transition-colors font-bold"
                >
                  {CONTACT_INFO.emergencyPhoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Email:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customizable Placeholder Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Reliable Plumbing Services. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-slate-400">
              Note: Contact numbers & addresses are sample placeholders ready to be updated with your business details.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
