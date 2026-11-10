import React, { useState } from 'react';
import { MapPin, CheckCircle2, Clock, Search, Phone } from 'lucide-react';
import { SOUTH_AFRICA_REGIONS, CONTACT_INFO } from '../data/plumbingData';

export const ServiceAreas: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSuburbs = [
    'Sandton',
    'Bryanston',
    'Centurion',
    'Pretoria East',
    'Cape Town',
    'Sea Point',
    'Umhlanga',
    'Durban North',
    'Randburg',
    'Fourways',
  ];

  const filteredRegions = SOUTH_AFRICA_REGIONS.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cities.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="areas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <span>Coverage Across South Africa</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Fast Local Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Plumbers Near You in Major South African Metros
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our strategically stationed mobile plumbing vans operate 24 hours a day to guarantee fast arrival in your suburb.
          </p>
        </div>

        {/* Suburb Search & Quick Filter */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 max-w-3xl">
          <label htmlFor="suburb-search" className="block text-xs font-bold text-slate-700 uppercase mb-2">
            Check Your Suburb or Area Coverage:
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="suburb-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Bryanston, Sandton, Centurion, Sea Point, Umhlanga..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium">Popular hubs:</span>
            {popularSuburbs.map((suburb) => (
              <button
                key={suburb}
                onClick={() => setSearchQuery(suburb)}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors"
              >
                {suburb}
              </button>
            ))}
          </div>
        </div>

        {/* Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredRegions.map((region) => (
            <div
              key={region.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {region.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Active Hub
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {region.cities}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Avg Dispatch: {region.eta}</span>
                </div>
                <span className="text-blue-600 font-bold">24/7 Available</span>
              </div>
            </div>
          ))}

          {filteredRegions.length === 0 && (
            <div className="col-span-3 p-8 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-600 text-sm">
                No exact match for &quot;{searchQuery}&quot;. We still service surrounding areas across Gauteng, Western Cape, and KZN.
              </p>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to confirm availability: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
