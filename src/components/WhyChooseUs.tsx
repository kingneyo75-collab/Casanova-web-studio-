import React from 'react';
import {
  ShieldCheck,
  Clock,
  CircleDollarSign,
  Award,
  Search,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { WHY_CHOOSE_US, CONTACT_INFO } from '../data/plumbingData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 1:
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 2:
        return <CircleDollarSign className="w-6 h-6 text-blue-600" />;
      case 3:
        return <Award className="w-6 h-6 text-blue-600" />;
      case 4:
        return <Search className="w-6 h-6 text-blue-600" />;
      case 5:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Reliable Plumbing Services, I would like to book an appointment with a licensed plumber.'
  )}`;

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_bottom_left] from-blue-900/30 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
            <span>The Reliable Difference</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>South Africa&apos;s Trusted Choice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Why Choose Reliable Plumbing Services?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Plumbing disasters demand fast, honest, and certified expertise. We combine modern diagnostic technology with strict adherence to South African plumbing regulations to solve issues the first time.
          </p>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/60 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-blue-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-blue-400">{item.badge}</span>
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet & Guarantee Assurance Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/40">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                R5,000,000 Public Liability Insurance & Quality Standards
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl mt-1">
                Your home and property are fully protected. We carry comprehensive public liability insurance for all residential and commercial plumbing jobs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Us Now</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
