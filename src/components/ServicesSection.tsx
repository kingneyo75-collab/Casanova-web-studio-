import React, { useState } from 'react';
import {
  Droplets,
  Wrench,
  Flame,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { PLUMBING_SERVICES, CONTACT_INFO, PlumbingService } from '../data/plumbingData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<PlumbingService | null>(null);

  const filterButtons = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency & Bursts' },
    { id: 'geyser', label: 'Geysers & Hot Water' },
    { id: 'drains', label: 'Drains & Pipes' },
    { id: 'leaks', label: 'Leak Detection' },
  ];

  const filteredServices = PLUMBING_SERVICES.filter((svc) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'emergency') return svc.id === 'emergency-plumbing' || svc.id === 'geyser-repairs';
    if (selectedCategory === 'geyser') return svc.id === 'geyser-repairs' || svc.id === 'water-backup';
    if (selectedCategory === 'drains') return svc.id === 'blocked-drains' || svc.id === 'pipe-installation';
    if (selectedCategory === 'leaks') return svc.id === 'leak-repairs';
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-blue-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-blue-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  const createWhatsAppBookingUrl = (serviceTitle: string) => {
    const text = `Hi Reliable Plumbing Services, I would like to book or ask about: ${serviceTitle}. Please share pricing and availability.`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <span>Specialized Plumbing Solutions</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Residential & Commercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Complete Plumbing Services Tailored for South African Homes & Businesses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every job is completed by experienced plumbing professionals. We handle everything from sudden emergency pipe bursts to scheduled property renovations.
          </p>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-xl mb-10 overflow-x-auto">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedCategory(btn.id)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === btn.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Asymmetric Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 transition-all duration-200 hover:shadow-lg overflow-hidden"
              >
                {/* Optional Service Card Image Banner if present */}
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    {service.isPopular && (
                      <span className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-1 rounded-md shadow-sm">
                        High Demand
                      </span>
                    )}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded">
                        Est: {service.typicalDuration}
                      </span>
                      <span className="bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded font-bold text-amber-300">
                        {service.startingPriceZAR}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                        {getServiceIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 pt-2 border-t border-slate-200/60 text-xs text-slate-700">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center shadow-xs"
                    >
                      Book Service
                    </button>

                    <a
                      href={createWhatsAppBookingUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setActiveModalService(service)}
                      className="py-2.5 px-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner in Services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Need custom plumbing work or a commercial inspection?
            </h4>
            <p className="text-sm text-slate-600">
              We provide free on-site assessments for housing complexes, offices, and major residential renovations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Speak to Head Plumber</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  {getServiceIcon(activeModalService.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{activeModalService.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Duration:</span>
                <span className="font-semibold text-slate-800">{activeModalService.typicalDuration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Pricing:</span>
                <span className="font-bold text-blue-700 font-mono">{activeModalService.startingPriceZAR}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quotes:</span>
                <span className="font-semibold text-slate-800">Free Quotes on Inspection</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="flex-1 py-2.5 px-4 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                Book This Service Now
              </button>
              <a
                href={createWhatsAppBookingUrl(activeModalService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
