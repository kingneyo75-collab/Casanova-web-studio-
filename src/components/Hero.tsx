import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/plumbingData';

interface HeroProps {
  onSelectService?: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Reliable Plumbing Services, I would like to request an estimate or schedule a plumber in South Africa.'
  )}`;

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Subtle Gradient & Mesh */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-blue-900/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional Trust Kicker (Natural editorial text, no pill box) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              <span>Professional Plumbers</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>South Africa</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Available 24/7</span>
            </div>

            {/* Main Headline (Mandatory user brief wording) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Reliable Plumbing Services You Can Trust.
            </h1>

            {/* Subtitle with South African context */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Professional plumbing solutions across South Africa. Specializing in burst geyser repairs, hydro-jet drain unblocking, leak detection, and pipe installations with clear upfront communication.
            </p>

            {/* Key Assurance Indicators */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Free Quotes</span>
              </div>
            </div>

            {/* Call to Actions (WhatsApp + Phone + Quote) */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/30 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Phone Call Button */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-950/30 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              >
                <Phone className="w-5 h-5 fill-white text-blue-600" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>

              {/* Request Free Quote Link */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors shrink-0"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Emergency Hotline Micro-Notice */}
            <p className="text-xs text-slate-400 pt-1">
              Plumbing emergency right now? Call our 24/7 hotline{' '}
              <a
                href={`tel:${CONTACT_INFO.emergencyPhoneRaw}`}
                className="text-amber-400 font-semibold underline hover:text-amber-300"
              >
                {CONTACT_INFO.emergencyPhoneDisplay}
              </a>{' '}
              for immediate dispatch.
            </p>
          </div>

          {/* Right Column: Hero Image with Quality Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800">
              <img
                src="/src/assets/images/hero_plumber_service_1792768553797.jpg"
                alt="Professional certified plumber from Reliable Plumbing Services inspecting copper pipes in South Africa"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Floating verified technician card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Experienced Technicians</h4>
                      <p className="text-xs text-slate-300">Dedicated · Reliable · Insured</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-mono font-bold text-emerald-400">24/7 ON CALL</span>
                    <span className="text-[11px] text-slate-400">Nationwide Hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Quick Stats & Trust Banner Strip */}
      <div className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl lg:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">
                15+
              </span>
              <span className="text-xs text-slate-400 font-medium">Years Serving South Africa</span>
            </div>
            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="block text-2xl lg:text-3xl font-extrabold text-white font-mono">
                Fast
              </span>
              <span className="text-xs text-slate-400 font-medium">Response Times</span>
            </div>
            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="block text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
                100%
              </span>
              <span className="text-xs text-slate-400 font-medium">Dedicated Local Service</span>
            </div>
            <div className="pt-2 md:pt-0 md:pl-6">
              <span className="block text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                5.0 ★
              </span>
              <span className="text-xs text-slate-400 font-medium">Quality Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
