# Reliable Plumbing Services – Website Implementation & Deployment Plan

Comprehensive implementation specification and deployment guide for **Reliable Plumbing Services**, a modern, mobile-friendly, high-converting commercial website for South African homeowners and businesses.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The complete website is already implemented and running in the live preview. Review the architecture, verified components, and free zero-cost hosting guide below.

- **Design & Content Continuity**: Confirmed to preserve the full dark navy, royal blue, and crisp white theme with all South African plumbing services, PIRB accreditation, SANS compliance, and sample testimonials.
- **API & Cost Constraint**: 100% free with zero paid APIs. Direct WhatsApp API (`wa.me`) and native device telephone (`tel:`) protocols are used with no external paid backend services.
- **Free Hosting Recommendation**: Recommended deployment on Vercel, Netlify, or GitHub Pages with free custom domain connection.

---

### 1. Overview & Core Concept

- **What It Does**: A lightning-fast, conversion-focused single-page web application for **Reliable Plumbing Services** in South Africa. Provides instant 1-tap WhatsApp and phone dispatch, service breakdowns (leak repairs, drain jetting, geyser replacements, pipe installation, water tanks), an interactive ZAR cost estimator, suburb coverage checker, and a validated booking form.
- **Target Audience / Persona**: South African property owners, tenants, and business managers facing sudden emergency leaks, burst geysers, or planning bathroom/kitchen plumbing renovations.
- **Key Value**: Builds immediate trust through verified PIRB registration credentials, transparent upfront Rand pricing, and sub-60-minute emergency dispatch.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Emergency Influx*: User arrives via mobile with a flooded ceiling or burst pipe $\rightarrow$ Clicks the prominent amber SOS banner or sticky bottom "Call Plumber" / "WhatsApp Us" button for instant dispatch.
  2. *Services & Exploration*: User browses services with category filters (Emergency, Geysers, Drains, Leaks) $\rightarrow$ Inspects service details, pricing, and turnaround time $\rightarrow$ Clicks "Book Service" to automatically scroll and pre-select the service in the booking form.
  3. *Cost Estimation*: User explores typical South African plumbing prices in ZAR $\rightarrow$ Reads labor and parts inclusions $\rightarrow$ Clicks "Request Quote on WhatsApp" with pre-formulated quote parameters.
  4. *Lead Capture*: User enters name, South African phone number (+27), suburb, and urgency level $\rightarrow$ Form validates instantly $\rightarrow$ Generates reference number (e.g. `RPS-ZA-8924`) and provides a 1-tap option to forward the booking directly to the technician's WhatsApp.

- **Visual Identity & Theme**:
  - *Palette*: Deep Navy (`#0B192C` / `#0F172A`), Trust Blue (`#0284C7` / `#2563EB`), Emerald Green for WhatsApp (`#059669`), and Alert Amber (`#F59E0B`) for 24/7 emergencies.
  - *Typography*: `Outfit` for strong, commanding headlines paired with `Plus Jakarta Sans` for clean, highly legible body copy.
  - *Mobile Sticky Rule*: Floating actions adhere strictly to the $<15\%$ mobile viewport height cap using an ultra-compact bottom action bar.

---

### 3. Key Product Decisions & Trade-Offs

- **Zero-Cost WhatsApp & Native Calling vs. Paid SMS/Chat Gateway**:
  - *Chosen Approach*: Direct `https://wa.me/27821234567` URL scheme with pre-populated message strings and `tel:+27821234567` native dialer links.
  - *Why*: In South Africa, WhatsApp is the dominant communication channel for trades and home services. It incurs zero operational cost, requires no API subscription, and allows customers to instantly send pictures and voice notes of leaks and pipes.
  - *Alternatives Considered*: Twilio, SendGrid, or Intercom were excluded because they require paid monthly subscriptions and complex backend credentials.

- **Centralized Content Configuration (`CONTACT_INFO`)**:
  - *Chosen Approach*: All telephone numbers, WhatsApp digits, email addresses, street addresses, and emergency hotline numbers are declared in a single typed configuration object (`src/data/plumbingData.ts`).
  - *Why*: Enables the website owner to update their real phone number and suburb in one place in 30 seconds without modifying complex component code.

---

### 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                        index.html                      │
│     (Fonts, JSON-LD Plumber Schema, SEO Meta Tags)     │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                        src/App.tsx                     │
│    (State: selectedService, smooth scroll handlers)    │
└─────┬────────────────────────────────────────────┬─────┘
      │                                            │
┌─────▼──────────────────────────────┐ ┌───────────▼───────────────────────────┐
│              Layout                │ │          Interactive Features         │
│  - Navbar (Top Bar Contract)       │ │  - ServicesSection (Filter & Modal)   │
│  - EmergencyBanner (First Aid Tips)│ │  - CostEstimator (ZAR Price Guide)    │
│  - WhyChooseUs (PIRB & Insurance)  │ │  - ServiceAreas (Suburb Search)       │
│  - TestimonialsSection (Sample)    │ │  - ContactSection (Validated Form)    │
│  - Footer (Customization Notice)   │ │  - FloatingActions (Mobile Sticky)    │
└────────────────────────────────────┘ └───────────────────────────────────────┘
```

---

### 5. Deployment & Export Strategy (100% Free Hosting)

1. **Option A: Vercel (Recommended - Free)**
   - Connect GitHub repository $\rightarrow$ Framework Preset: `Vite` $\rightarrow$ Click Deploy.
   - Provides free automatic SSL, worldwide CDN, and custom domain mapping (`yourdomain.co.za`).

2. **Option B: Netlify (Free)**
   - Build Command: `npm run build` $\rightarrow$ Publish Directory: `dist` $\rightarrow$ Deploy.

3. **Option C: GitHub Pages (Free)**
   - Add `base: './'` in `vite.config.ts`, run `npm run build`, and publish the `dist` folder to GitHub Pages.
