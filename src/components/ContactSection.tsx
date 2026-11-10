import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
} from 'lucide-react';
import { CONTACT_INFO, PLUMBING_SERVICES } from '../data/plumbingData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    suburb: '',
    service: preselectedService || 'Leak Repairs & Detection',
    urgency: 'Within 24 Hours',
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg('Please provide a valid South African phone number (e.g. 069 314 7737).');
      return;
    }

    if (!formData.suburb.trim()) {
      setErrorMsg('Please specify your suburb or town in South Africa.');
      return;
    }

    // Generate reference code
    const refCode = `RPS-ZA-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refCode);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Booking Request (${submittedRef || 'Direct'})*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Suburb/City: ${formData.suburb}
Service: ${formData.service}
Urgency: ${formData.urgency}
Details: ${formData.message || 'No additional details'}`;

    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT_INFO.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
            <span>Get in Touch · Instant Response</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>South Africa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Contact Reliable Plumbing Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Need emergency repairs or a free quote for your renovation? Call, send a WhatsApp, or fill out the form below. We respond in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Fast Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Contact Cards */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-700/60 pb-3">
                Direct Contact Channels
              </h3>

              {/* Phone Call Section */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400">Direct Telephone Call:</span>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-base font-bold text-white font-mono">
                        {CONTACT_INFO.phoneDisplay}
                      </span>
                      <span className="text-xs text-slate-400">Toll-free / Standard Rates</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="px-3.5 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors whitespace-nowrap"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400">WhatsApp Instant Chat:</span>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="block text-base font-bold text-emerald-400 font-mono">
                        {CONTACT_INFO.whatsappDisplay}
                      </span>
                      <span className="text-xs text-slate-400">Send photos of leaks / pipes</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Reliable Plumbing Services, I would like to enquire about your plumbing services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors whitespace-nowrap"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

              {/* 24/7 Emergency Hotline */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-amber-300">
                      24/7 Emergency Dispatch Hotline
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      For catastrophic burst geysers, pipe bursts, and flooding, call our night team:
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.emergencyPhoneRaw}`}
                      className="inline-block mt-2 font-mono font-bold text-base text-amber-400 hover:text-amber-300 underline"
                    >
                      {CONTACT_INFO.emergencyPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Email Address:</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:text-blue-300 transition-colors font-medium text-white"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Physical Office:</span>
                    <span className="text-white">{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Registration & Compliance:</span>
                    <span className="text-white">{CONTACT_INFO.registration} · {CONTACT_INFO.compliance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-100">
              {submittedRef ? (
                /* Success State */
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Plumbing Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your plumbing request has been logged and assigned to our dispatch team.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-block text-left max-w-sm w-full text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-blue-700">{submittedRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-800">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Area:</span>
                      <span className="font-semibold text-slate-800">{formData.suburb}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Urgency:</span>
                      <span className="font-semibold text-amber-600">{formData.urgency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Callback ETA:</span>
                      <span className="font-semibold text-emerald-600">Within 15 minutes</span>
                    </div>
                  </div>

                  {/* Continue on WhatsApp Option */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-slate-500">
                      Want an instant reply? Send your form details straight to our on-duty technician via WhatsApp:
                    </p>
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Continue via WhatsApp with Booking #{submittedRef}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          suburb: '',
                          service: 'Leak Repairs & Detection',
                          urgency: 'Within 24 Hours',
                          message: '',
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Request a Plumber or Free Quote
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below. For immediate emergencies, call {CONTACT_INFO.phoneDisplay}.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Johan Naidoo"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Phone Number (+27) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 069 314 7737"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. yourname@example.co.za"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Suburb / City in SA *
                      </label>
                      <input
                        type="text"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                        placeholder="e.g. Bryanston, Sandton / Camps Bay"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                      >
                        {PLUMBING_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Inspection / Other">Other Plumbing Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Urgency Level *
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                      >
                        <option value="Emergency (Immediate Dispatch)">Emergency (Immediate Dispatch)</option>
                        <option value="Same Day (Within 4 Hours)">Same Day (Within 4 Hours)</option>
                        <option value="Within 24 Hours">Within 24 Hours</option>
                        <option value="Future Date / Quote Only">Future Date / Quote Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Describe the Plumbing Issue (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Geyser is leaking from the ceiling / Main kitchen drain is backing up..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request & Get Quick Callback</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      🔒 No upfront payment required. 100% privacy guaranteed.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
