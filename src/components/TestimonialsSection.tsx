import React from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Clear Sample Review Marking */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
            <span>Customer Feedback</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Sample Reviews For Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by Homeowners Across South Africa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is what our clients say about our response time, workmanship, and clean professional service.
          </p>

          {/* Sample Review Clear Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-medium text-blue-800">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Sample customer testimonials with representative South African service scenarios.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header: Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-semibold text-blue-700">
                  Service: {review.service}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{review.suburb}, {review.city}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified Sample Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google / PIRB Rating Aggregate */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-xl font-mono shrink-0">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300">
                Average Rating based on hundreds of satisfied Gauteng, Cape Town & KZN customers.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            Leave Your Review / Feedback
          </a>
        </div>
      </div>
    </section>
  );
};
