/**
 * Reliable Plumbing Services - South Africa
 * Configuration data and content
 */

export const CONTACT_INFO = {
  businessName: 'Reliable Plumbing Services',
  tagline: 'Reliable Plumbing Services You Can Trust',
  country: 'South Africa',
  phoneDisplay: '069 314 7737',
  phoneRaw: '+27693147737',
  emergencyPhoneDisplay: '069 314 7737',
  emergencyPhoneRaw: '+27693147737',
  whatsappNumber: '27693147737',
  whatsappDisplay: '069 314 7737',
  email: 'service@reliableplumbing.co.za',
  address: '42 Main Road, Bryanston, Sandton, Johannesburg, 2191',
  serviceAreas: [
    'Johannesburg & Sandton',
    'Pretoria & Centurion',
    'Cape Town & Atlantic Seaboard',
    'Durban & Umhlanga',
  ],
  hours: '24/7 Emergency Dispatch · Mon–Sat 07:00–18:00 Standard Hours',
  registration: 'Licensed Professional Plumbers',
  compliance: 'Professional Plumbing Standards',
  insurance: 'Fully Insured with Public Liability Cover',
};

export interface PlumbingService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  typicalDuration: string;
  startingPriceZAR: string;
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
    startingPriceZAR: 'Example estimate only',
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
    startingPriceZAR: 'Example estimate only',
    image: '/src/assets/images/blocked_drain_clearing_1792768554244.jpg',
    isPopular: true,
  },
  {
    id: 'geyser-repairs',
    title: 'Geyser Repairs & Replacements',
    shortDesc: 'Burst geysers, element and thermostat replacements, pressure control valves, and solar conversions.',
    fullDesc: 'Specialized South African geyser services. We replace blown heating elements, faulty thermostats, leaking vacuum breakers, dripping temperature/pressure safety valves, or install energy-efficient 150L/200L replacement systems.',
    icon: 'Flame',
    features: [
      'Burst geyser replacement and diagnostics',
      'Element & thermostat same-day replacement',
      'Pressure control valve (TP valve) servicing',
      'Solar & heat pump geyser integration',
    ],
    typicalDuration: '1 - 4 hours',
    startingPriceZAR: 'Example estimate only',
    image: '/src/assets/images/geyser_repair_installation_1792768553535.jpg',
    isPopular: true,
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation & Repiping',
    shortDesc: 'Complete residential and commercial piping in copper, HDPE, multilayer PEX, and PVC.',
    fullDesc: 'From modern kitchen and bathroom renovations to full building repiping, our plumbers ensure leak-proof, high-durability plumbing lines engineered for optimal water pressure.',
    icon: 'Wrench',
    features: [
      'Copper, multilayer composite & HDPE pipe installation',
      'Old galvanized iron pipe replacement',
      'Bathroom, scullery & kitchen renovation pipework',
      'Outdoor irrigation mains & municipal meter connections',
    ],
    typicalDuration: 'Half day to multiple days',
    startingPriceZAR: 'Example estimate only',
    image: '/src/assets/images/plumbing_van_fleet_1792768554070.jpg',
  },
  {
    id: 'emergency-plumbing',
    title: '24/7 Emergency Plumbing',
    shortDesc: 'Urgent mobile response team on call around the clock for catastrophic leaks and burst pipes.',
    fullDesc: 'When water is flooding your ceiling, a geyser bursts at midnight, or a major drain overflows, our emergency plumbers arrive with fast response times equipped with diagnostic gear and replacement parts to secure your property.',
    icon: 'AlertTriangle',
    features: [
      'Fast response emergency dispatch',
      '24/7, 365 days coverage including public holidays',
      'Immediate main water shutoff & flood mitigation',
      'Prompt, professional workmanship',
    ],
    typicalDuration: 'Immediate response',
    startingPriceZAR: 'Example estimate only',
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
    startingPriceZAR: 'Example estimate only',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Plumbers',
    desc: 'Qualified and dedicated plumbing professionals ready to handle residential and commercial repairs with care, expertise, and precision.',
    badge: 'Experienced',
  },
  {
    title: 'Rapid 24/7 Response Time',
    desc: 'Equipped mobile service vans stationed in major zones ensure fast response times for critical plumbing emergencies.',
    badge: 'Fast Response',
  },
  {
    title: 'Free Quotes & Transparent Pricing',
    desc: 'Clear, itemized quotes before any work commences. No surprise call-out traps or hidden fees—you always know the cost upfront.',
    badge: 'Free Quotes',
  },
  {
    title: 'Quality Workmanship',
    desc: 'All repairs and installations are carried out to high trade standards, backed by comprehensive public liability insurance.',
    badge: 'Quality Assured',
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

export const COST_ESTIMATES = [
  {
    service: 'General Tap / Valve / Minor Leak Repair',
    range: 'Example estimate only',
    duration: '1 – 2 hrs',
    details: 'Inspection, washer/cartridge replacement, resealing, and pressure check. Final cost provided upon inspection.',
  },
  {
    service: 'Blocked Drain Clearing (Sink / Toilet / Shower)',
    range: 'Example estimate only',
    duration: '1 – 2 hrs',
    details: 'Mechanical cabling or high pressure jetting to fully clear standard blockages.',
  },
  {
    service: 'Geyser Thermostat or Heating Element Replacement',
    range: 'Example estimate only',
    duration: '1.5 – 3 hrs',
    details: 'Standard approved element, thermostat, new flange gasket, and testing.',
  },
  {
    service: 'Complete 150L Electric Geyser Supply & Fit',
    range: 'Example estimate only',
    duration: '3 – 5 hrs',
    details: 'New 150L geyser, drip tray, vacuum breakers, and safety relief valve installation.',
  },
  {
    service: 'Acoustic / Thermal Concealed Leak Detection',
    range: 'Example estimate only',
    duration: '2 – 3 hrs',
    details: 'Pinpoint acoustic location report for insurance and focused excavation.',
  },
  {
    service: 'Backup JoJo Tank & Pressure Pump Installation',
    range: 'Example estimate only',
    duration: '1 – 2 days',
    details: '2,500L/5,000L tank, variable booster pump, non-return valves, and pipework.',
  },
];

export const SOUTH_AFRICA_REGIONS = [
  {
    name: 'Gauteng',
    cities: 'Johannesburg, Sandton, Randburg, Midrand, Pretoria, Centurion, Roodepoort, East Rand',
    eta: 'Fast Response',
  },
  {
    name: 'Western Cape',
    cities: 'Cape Town City Bowl, Atlantic Seaboard, Northern Suburbs, Southern Suburbs, Blouberg',
    eta: 'Fast Response',
  },
  {
    name: 'KwaZulu-Natal',
    cities: 'Durban Central, Umhlanga, Durban North, Ballito, Westville, Hillcrest',
    eta: 'Fast Response',
  },
];
