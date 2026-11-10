/**
 * Reliable Plumbing Services - South Africa
 * Configuration data and content
 */

export const CONTACT_INFO = {
  businessName: 'Reliable Plumbing Services',
  tagline: 'Reliable Plumbing Services You Can Trust',
  country: 'South Africa',
  phoneDisplay: '082 123 4567',
  phoneRaw: '+27821234567',
  emergencyPhoneDisplay: '0800 999 123',
  emergencyPhoneRaw: '+27800999123',
  whatsappNumber: '27821234567',
  whatsappDisplay: '+27 82 123 4567',
  email: 'service@reliableplumbing.co.za',
  address: '42 Main Road, Bryanston, Sandton, Johannesburg, 2191',
  serviceAreas: [
    'Johannesburg & Sandton',
    'Pretoria & Centurion',
    'Cape Town & Atlantic Seaboard',
    'Durban & Umhlanga',
  ],
  hours: '24/7 Emergency Dispatch · Mon–Sat 07:00–18:00 Standard Hours',
  registration: 'PIRB Lic. No: #84920/SA',
  compliance: 'SANS 10252-1 & SANS 10106 Certified Plumbers',
  insurance: 'Fully Insured up to R5,000,000 Public Liability',
};

export interface PlumbingService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  typicalDuration: string;
  startingPriceZAR: number;
  image?: string;
  isPopular?: boolean;
}

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    id: 'leak-repairs',
    title: 'Leak Repairs & Detection',
    shortDesc: 'Non-invasive acoustic & thermal leak detection for hidden pipes, slabs, and dripping fixtures.',
    fullDesc: 'We locate and repair hidden water leaks behind walls, under concrete floor slabs, and in garden mains with zero unnecessary demolition. Prompt leak repair prevents costly municipal water bill surprises and structural moisture damage.',
    icon: 'Droplets',
    features: [
      'Acoustic sonar & thermal imaging detection',
      'Underground & concealed pipe repairs',
      'Dripping taps, mixers & toilet mechanism fixes',
      'Municipal meter run-on diagnostics',
    ],
    typicalDuration: '1 - 3 hours',
    startingPriceZAR: 650,
    image: '/src/assets/images/hero_plumber_service_1792768553797.jpg',
  },
  {
    id: 'blocked-drains',
    title: 'Blocked Drains & Jetting',
    shortDesc: 'High-pressure hydro-jetting, electromechanical drain clearing, and CCTV inspection.',
    fullDesc: 'Rapid unblocking of backed-up sewer lines, storm water pipes, kitchen sinks, and shower traps. We utilize state-of-the-art camera equipment to pinpoint tree roots, fat build-up, and collapsed piping with permanent clearing.',
    icon: 'Wrench',
    features: [
      'Industrial high-pressure hydro-jetting',
      'Digital CCTV pipe camera inspection',
      'Tree root cutting & fat deposit removal',
      'Kitchen sinks, showers, baths & gully traps',
    ],
    typicalDuration: '45 - 90 minutes',
    startingPriceZAR: 750,
    image: '/src/assets/images/blocked_drain_clearing_1792768554244.jpg',
    isPopular: true,
  },
  {
    id: 'geyser-repairs',
    title: 'Geyser Repairs & Replacements',
    shortDesc: 'Burst geysers, element and thermostat replacements, pressure control valves, and solar conversions.',
    fullDesc: 'Specialized South African geyser services conforming to SANS 10252 standards. We replace blown heating elements, faulty thermostats, leaking vacuum breakers, dripping temperature/pressure safety valves, or install energy-efficient 150L/200L replacement systems.',
    icon: 'Flame',
    features: [
      'Burst geyser insurance claim assistance',
      'Element & thermostat same-day replacement',
      'Pressure control valve (TP valve) servicing',
      'Solar & heat pump geyser integration',
    ],
    typicalDuration: '1 - 4 hours',
    startingPriceZAR: 950,
    image: '/src/assets/images/geyser_repair_installation_1792768553535.jpg',
    isPopular: true,
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation & Repiping',
    shortDesc: 'Complete residential and commercial piping in copper, HDPE, multilayer PEX, and PVC.',
    fullDesc: 'From modern kitchen and bathroom renovations to full building repiping, our certified plumbers ensure leak-proof, high-durability plumbing lines engineered for optimal water pressure and South African water regulations.',
    icon: 'Wrench',
    features: [
      'Copper, multilayer composite & HDPE pipe installation',
      'Old galvanized iron pipe replacement',
      'Bathroom, scullery & kitchen renovation pipework',
      'Outdoor irrigation mains & municipal meter connections',
    ],
    typicalDuration: 'Half day to multiple days',
    startingPriceZAR: 1200,
    image: '/src/assets/images/plumbing_van_fleet_1792768554070.jpg',
  },
  {
    id: 'emergency-plumbing',
    title: '24/7 Emergency Plumbing',
    shortDesc: 'Urgent mobile response team on call around the clock for catastrophic leaks and burst pipes.',
    fullDesc: 'When water is flooding your ceiling, a geyser bursts at midnight, or a major drain overflows, our emergency plumbers arrive within 45-60 minutes equipped with heavy-duty diagnostic gear and replacement parts to secure your property.',
    icon: 'AlertTriangle',
    features: [
      'Average 45–60 minute emergency dispatch',
      '24/7, 365 days coverage including public holidays',
      'Immediate main water shutoff & flood mitigation',
      'PIRB Certificate of Compliance issued',
    ],
    typicalDuration: 'Immediate response',
    startingPriceZAR: 850,
    isPopular: true,
  },
  {
    id: 'water-backup',
    title: 'Water Tanks & Pressure Pumps',
    shortDesc: 'Municipal backup water tanks (JoJo), booster pumps, and filtration systems for uninterrupted water.',
    fullDesc: 'Safeguard your household or business against municipal water outages and low water pressure. We install automated backup water tanks, variable speed silent pressure pumps, and multi-stage sediment and carbon filtration units.',
    icon: 'Droplets',
    features: [
      'Automated JoJo backup tank supply plumbing',
      'Silent, energy-efficient booster water pumps',
      'Whole-house sediment & UV water purification',
      'Automatic bypass switches for seamless municipal transfer',
    ],
    typicalDuration: '1 - 2 days',
    startingPriceZAR: 3500,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'PIRB Registered Plumbers',
    desc: 'Every technician is certified by the Plumbing Industry Registration Board (PIRB), guaranteeing compliance with South African National Standards (SANS 10252/10106).',
    badge: 'Certified',
  },
  {
    title: 'Rapid 24/7 Response Time',
    desc: 'Equipped mobile service vans stationed in major zones ensure an average arrival time of 45 to 60 minutes for critical plumbing emergencies.',
    badge: '45-60 Min ETA',
  },
  {
    title: 'Upfront Transparent Pricing',
    desc: 'Clear, itemized quotes before any work commences. No surprise call-out traps or hidden fees—you always know the exact cost in ZAR.',
    badge: 'No Hidden Fees',
  },
  {
    title: '100% Workmanship Guarantee',
    desc: 'All repairs and installations carry our comprehensive 12-month workmanship warranty, supported by R5,000,000 public liability insurance.',
    badge: '12-Month Warranty',
  },
  {
    title: 'Advanced Diagnostic Tools',
    desc: 'Thermal leak scanners, acoustic ground microphones, and fiber-optic sewer cameras isolate issues quickly without ripping up tiles or gardens.',
    badge: 'Non-Invasive',
  },
  {
    title: 'Clean & Respectful Technicians',
    desc: 'We wear protective shoe covers, lay work drop-cloths, and leave every kitchen, bathroom, and yard spotless after completion.',
    badge: 'Spotless Cleanup',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  city: string;
  rating: number;
  service: string;
  date: string;
  text: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Francois van der Merwe',
    suburb: 'Bryanston',
    city: 'Johannesburg',
    rating: 5,
    service: 'Emergency Burst Geyser Replacement',
    date: 'February 2026',
    text: 'Our 150L geyser burst at 10 PM on a Sunday night, flooding our ceiling. Reliable Plumbing answered my call immediately, arrived in 40 minutes, drained the tank, and had a brand new compliant geyser installed with a PIRB certificate by noon Monday. Exemplary service!',
    verified: true,
  },
  {
    id: 't-2',
    name: 'Naledi Khumalo',
    suburb: 'Centurion',
    city: 'Pretoria',
    rating: 5,
    service: 'Main Sewer Line Unblocking & CCTV',
    date: 'January 2026',
    text: 'We had persistent blocked drains that two other handymen could not solve. The team used a camera probe, showed me on screen where invasive tree roots had broken the pipe, and cleared it completely with their hydro-jetter. Very professional and tidy.',
    verified: true,
  },
  {
    id: 't-3',
    name: 'David Goldberg',
    suburb: 'Sea Point',
    city: 'Cape Town',
    rating: 5,
    service: 'Concealed Water Leak Detection',
    date: 'March 2026',
    text: 'Our municipal water bill spiked mysteriously. Reliable Plumbing located an underground copper pipe leak under our driveway pavers using acoustic listening gear. They lifted just two bricks, fixed the joint, and re-paved it seamlessly. Saved us thousands!',
    verified: true,
  },
  {
    id: 't-4',
    name: 'Sipho Sithole',
    suburb: 'Umhlanga Ridge',
    city: 'Durban',
    rating: 5,
    service: 'Bathroom Renovation & Repiping',
    date: 'January 2026',
    text: 'Upgraded our master bathroom and installed a backup JoJo water tank with an automated pressure pump. Workmanship is top tier, neat copper joins, and zero fuss during load shedding or water interruptions.',
    verified: true,
  },
];

export const COST_ESTIMATES = [
  {
    service: 'General Tap / Valve / Minor Leak Repair',
    range: 'R650 – R1,200',
    duration: '1 – 2 hrs',
    details: 'Inspection, washer/cartridge replacement, resealing, and pressure check.',
  },
  {
    service: 'Blocked Drain Clearing (Sink / Toilet / Shower)',
    range: 'R750 – R1,650',
    duration: '1 – 2 hrs',
    details: 'Mechanical cabling or high pressure jetting to fully clear standard blockages.',
  },
  {
    service: 'Geyser Thermostat or Heating Element Replacement',
    range: 'R1,100 – R2,200',
    duration: '1.5 – 3 hrs',
    details: 'SABS approved 3kW or 4kW element, thermostat, new flange gasket, testing.',
  },
  {
    service: 'Complete 150L Electric Geyser Supply & Fit',
    range: 'R8,500 – R12,500',
    duration: '3 – 5 hrs',
    details: 'New 150L geyser, drip tray, vacuum breakers, safety relief valve, PIRB CoC.',
  },
  {
    service: 'Acoustic / Thermal Concealed Leak Detection',
    range: 'R1,400 – R2,800',
    duration: '2 – 3 hrs',
    details: 'Pinpoint acoustic location report for insurance and focused excavation.',
  },
  {
    service: 'Backup JoJo Tank & Pressure Pump Installation',
    range: 'R12,500 – R24,000',
    duration: '1 – 2 days',
    details: '2,500L/5,000L tank, 0.75kW variable booster pump, non-return valves & piping.',
  },
];

export const SOUTH_AFRICA_REGIONS = [
  {
    name: 'Gauteng',
    cities: 'Johannesburg, Sandton, Randburg, Midrand, Pretoria, Centurion, Roodepoort, East Rand',
    eta: '40–55 mins',
  },
  {
    name: 'Western Cape',
    cities: 'Cape Town City Bowl, Atlantic Seaboard, Northern Suburbs, Southern Suburbs, Blouberg',
    eta: '45–60 mins',
  },
  {
    name: 'KwaZulu-Natal',
    cities: 'Durban Central, Umhlanga, Durban North, Ballito, Westville, Hillcrest',
    eta: '45–60 mins',
  },
];
