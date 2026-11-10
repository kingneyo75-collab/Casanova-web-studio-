# Reliable Plumbing Services – Website

A modern, responsive, mobile-first website for **Reliable Plumbing Services** in South Africa, built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Features the headline *"Reliable Plumbing Services You Can Trust."*, direct WhatsApp & call buttons, and trust badges.
- **24/7 Emergency Dispatch Banner**: Rapid dispatch banner with 1-click calling and plumbing first-aid guidance.
- **Plumbing Services**:
  - Leak Repairs & Acoustic Leak Detection
  - Blocked Drains & Hydro-Jetting
  - Geyser Repairs & Replacements (SANS 10252 compliant)
  - Pipe Installation & Repiping
  - 24/7 Emergency Plumbing
  - Backup Water Tanks (JoJo) & Pressure Pumps
- **Why Choose Us**: Details PIRB registration, 45–60 min response times, transparent ZAR pricing, and R5,000,000 public liability insurance.
- **Interactive ZAR Cost Estimator**: South African Rand price guide with 1-click booking and WhatsApp quote inquiries.
- **Service Areas**: Suburb and metro coverage across Gauteng, Western Cape, and KwaZulu-Natal with instant suburb search.
- **Testimonials**: Clearly marked sample customer reviews from verified South African locations.
- **Contact Form**: Validated lead capture form with instant reference code and one-click WhatsApp handover.
- **Floating Controls**: Persistent WhatsApp chat button and mobile-optimized quick-dial bar.

## Customizing Contact Details

All business contact details are in a single file:
👉 **`src/data/plumbingData.ts`**

Update the `CONTACT_INFO` object:
```typescript
export const CONTACT_INFO = {
  businessName: 'Reliable Plumbing Services',
  phoneDisplay: '082 123 4567',
  phoneRaw: '+27821234567',
  emergencyPhoneDisplay: '0800 999 123',
  emergencyPhoneRaw: '+27800999123',
  whatsappNumber: '27821234567',
  whatsappDisplay: '+27 82 123 4567',
  email: 'service@reliableplumbing.co.za',
  address: '42 Main Road, Bryanston, Sandton, Johannesburg, 2191',
  ...
};
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Free Deployment Options

### 1. Vercel (Recommended)
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel will auto-detect Vite.
4. Click **Deploy**. Your site will be live with a free SSL certificate.

### 2. Netlify
1. Run `npm run build` to generate the `dist` folder.
2. Go to [Netlify Drop](https://app.netlify.com/drop) and drag the `dist` folder onto the page.
3. Your site is deployed immediately.

### 3. GitHub Pages
1. Push your code to GitHub.
2. In your repo settings, go to **Pages** and select GitHub Actions (Static HTML / Vite).
