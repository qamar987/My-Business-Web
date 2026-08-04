import { ElectricalService } from '../types';

export const ALL_SERVICES: ElectricalService[] = [
  {
    id: 'full-house-wiring',
    name: 'Full House Electrical Wiring',
    category: 'wiring',
    description: 'Complete wiring from scratch for new residential construction with conduits, boxes, and main drops.',
    detailedDescription: 'Engineering-grade full home electrical wiring designed according to National Electrical Code (NEC) standards. Includes concealed PVC conduit piping, fire-resistant copper cables, main distribution layout, and point-to-point outlet mapping.',
    iconName: 'Cable',
    estimatedTime: '3 - 7 Days',
    priceRange: '$1,200 - $3,500',
    isEmergencyAvailable: false,
    popular: true
  },
  {
    id: 'new-home-system',
    name: 'Complete Electrical System Installation for New Homes',
    category: 'wiring',
    description: 'End-to-end electrical setup including main service connection, meter box, main panel, and initial load balancing.',
    detailedDescription: 'Turnkey installation for new residential properties. Includes incoming utility service drops, main disconnect breakers, sub-panels, grounding pits, and initial load test certificates.',
    iconName: 'Home',
    estimatedTime: '2 - 5 Days',
    priceRange: '$1,500 - $4,000',
    isEmergencyAvailable: false,
    popular: true
  },
  {
    id: 'house-rewiring',
    name: 'House Rewiring (Old Wiring Replacement)',
    category: 'wiring',
    description: 'Safely upgrade aging aluminum or damaged copper wiring to fire-rated copper conductors.',
    detailedDescription: 'Removal of vintage or degraded electrical wiring. We upgrade your property to modern high-capacity cables, preventing electrical fire hazards and supporting heavy modern appliances.',
    iconName: 'RefreshCw',
    estimatedTime: '2 - 4 Days',
    priceRange: '$1,000 - $2,800',
    isEmergencyAvailable: false
  },
  {
    id: 'circuit-breaker-panel',
    name: 'Circuit Breaker & Panel Installation/Repair',
    category: 'panels',
    description: 'Upgrade 100A to 200A panels, fix tripping breakers, replace main disconnect switches & bus bars.',
    detailedDescription: 'High-amperage main electrical panel installations, breaker box replacements, MCB/RCCB safety switch additions, and burn-out repair to ensure clean power flow and safety against overload.',
    iconName: 'Cpu',
    estimatedTime: '3 - 6 Hours',
    priceRange: '$350 - $1,400',
    isEmergencyAvailable: true,
    popular: true
  },
  {
    id: 'switchboard-db-installation',
    name: 'Switchboard & Distribution Board Installation',
    category: 'panels',
    description: '3-Phase & 1-Phase main distribution board setup, phase selectors, surge protectors & isolators.',
    detailedDescription: 'Custom distribution boards for even electrical load balancing across phases, equipped with surge protection devices (SPD), RCCB, and heavy-duty main isolator switches.',
    iconName: 'LayoutGrid',
    estimatedTime: '2 - 4 Hours',
    priceRange: '$250 - $650',
    isEmergencyAvailable: true
  },
  {
    id: 'fan-light-fixture',
    name: 'Fan, Light & Fixture Installation',
    category: 'fixtures',
    description: 'Chandelier, recessed LED downlights, decorative lights, outdoor floodlights, and smart fan mounting.',
    detailedDescription: 'Safe ceiling fan mounting, heavy chandelier installations with reinforced ceiling boxes, ambient strip lights, recessed lighting layout, and exterior security floodlights.',
    iconName: 'Lightbulb',
    estimatedTime: '1 - 3 Hours',
    priceRange: '$75 - $250',
    isEmergencyAvailable: false
  },
  {
    id: 'socket-switch-installation',
    name: 'Socket & Switch Installation/Repair',
    category: 'fixtures',
    description: 'Standard 15A/20A power outlets, USB smart sockets, touch switches, dimmer controls & waterproof outdoor plugs.',
    detailedDescription: 'Replacement of burnt, loose, or sparking switchboards. We install modern modular switches, GFCI moisture-proof kitchen/bathroom outlets, and smart dimmers.',
    iconName: 'ToggleRight',
    estimatedTime: '1 - 2 Hours',
    priceRange: '$50 - $180',
    isEmergencyAvailable: true
  },
  {
    id: 'fault-finding',
    name: 'Electrical Fault Finding & Troubleshooting',
    category: 'repairs',
    description: 'Thermal imaging & multimeter diagnostic scan to pinpoint mysterious trips, burning smells, or dead circuits.',
    detailedDescription: 'Advanced diagnostic services utilizing digital clamp meters, insulation resistance testers, and infrared camera scanning to discover concealed shorts, neutral breaks, or faulty grounds.',
    iconName: 'Search',
    estimatedTime: '1 - 2 Hours',
    priceRange: '$80 - $200',
    isEmergencyAvailable: true,
    popular: true
  },
  {
    id: 'short-circuit-repair',
    name: 'Short Circuit Repair',
    category: 'repairs',
    description: 'Immediate resolution for live short circuits, burnt junction boxes, and popping breaker trips.',
    detailedDescription: 'Emergency short circuit isolation and repair. We replace melted conductors, repair fried junction terminals, and restore safe power without delay.',
    iconName: 'Zap',
    estimatedTime: '1 - 3 Hours',
    priceRange: '$90 - $250',
    isEmergencyAvailable: true,
    popular: true
  },
  {
    id: 'voltage-fluctuation',
    name: 'Voltage Fluctuation Issues',
    category: 'repairs',
    description: 'Diagnose dimming lights, high/low voltage surges, neutral wire issues & automatic voltage stabilizer setup.',
    detailedDescription: 'Fix hazardous voltage drops and spikes that endanger expensive appliances. Includes incoming phase testing, neutral loop grounding verification, and stabilizer integration.',
    iconName: 'Activity',
    estimatedTime: '1 - 3 Hours',
    priceRange: '$100 - $300',
    isEmergencyAvailable: true
  },
  {
    id: 'earthing-grounding',
    name: 'Earthing/Grounding Installation & Repair',
    category: 'safety',
    description: 'Chemical earthing electrode pits, copper rod grounding & shock protection system checks.',
    detailedDescription: 'Installation of low-resistance earthing systems with bentonite/chemical compound treatment, copper bonding strips, and RCD shock prevention for complete home safety.',
    iconName: 'ShieldAlert',
    estimatedTime: '3 - 6 Hours',
    priceRange: '$200 - $550',
    isEmergencyAvailable: false
  },
  {
    id: 'generator-ups-wiring',
    name: 'Generator & UPS Wiring/Installation',
    category: 'backup',
    description: 'Automatic Transfer Switch (ATS) installation, heavy generator interlocks, and dedicated UPS backup lines.',
    detailedDescription: 'Seamless power backup integration with manual/automatic transfer switches, generator inlet boxes, and isolated backup wiring loops for uninterrupted home power.',
    iconName: 'BatteryCharging',
    estimatedTime: '3 - 5 Hours',
    priceRange: '$300 - $850',
    isEmergencyAvailable: true
  },
  {
    id: 'inverter-installation',
    name: 'Inverter Installation & Wiring',
    category: 'backup',
    description: 'Pure sine wave inverter connection, battery bank rack wiring, and dual-line distribution.',
    detailedDescription: 'Professional inverter mounting, heavy-gauge battery interconnect cables, battery electrolyte safety venting setup, and automated line switching.',
    iconName: 'Power',
    estimatedTime: '2 - 4 Hours',
    priceRange: '$150 - $400',
    isEmergencyAvailable: false
  },
  {
    id: 'solar-panel-wiring',
    name: 'Solar Panel Wiring Setup',
    category: 'backup',
    description: 'DC solar cable routing, rooftop junction boxes, hybrid inverter wiring & net-metering readiness.',
    detailedDescription: 'Safe, UV-resistant DC cabling from photovoltaic roof arrays to charge controllers, solar inverters, and net-metering distribution panels.',
    iconName: 'Sun',
    estimatedTime: '1 - 2 Days',
    priceRange: '$400 - $1,200',
    isEmergencyAvailable: false
  },
  {
    id: 'ceiling-exhaust-fan',
    name: 'Ceiling Fan & Exhaust Fan Installation',
    category: 'fixtures',
    description: 'Heavy fan hook anchoring, bathroom high-CFM exhaust fan ducting & electronic speed regulators.',
    detailedDescription: 'Vibration-free ceiling fan balancing, rod extensions, speed regulator wiring, and kitchen/bathroom moisture exhaust ventilation setups.',
    iconName: 'Fan',
    estimatedTime: '1 - 2 Hours',
    priceRange: '$60 - $160',
    isEmergencyAvailable: false
  },
  {
    id: 'electrical-safety-inspection',
    name: 'Electrical Safety Inspection',
    category: 'safety',
    description: 'Comprehensive 40-point safety audit for homebuyers, real estate sales, or routine insurance compliance.',
    detailedDescription: 'Full visual and instrument-backed audit of panels, grounding resistance, code violations, load capacities, and fire risk assessment with official sign-off report.',
    iconName: 'ClipboardCheck',
    estimatedTime: '2 - 3 Hours',
    priceRange: '$120 - $250',
    isEmergencyAvailable: false
  },
  {
    id: 'commercial-wiring',
    name: 'Commercial Electrical Wiring',
    category: 'commercial',
    description: '3-phase industrial power, office cable management, LED high-bay lighting & machinery drops.',
    detailedDescription: 'Heavy commercial electrical services for retail stores, warehouses, offices, and restaurants. EMT metal conduit installation, 3-phase power distribution, and server room power reliability.',
    iconName: 'Building2',
    estimatedTime: 'Custom Project',
    priceRange: '$800 - $5,000+',
    isEmergencyAvailable: true
  },
  {
    id: 'emergency-repair-247',
    name: 'Emergency Electrical Repair (24/7 service)',
    category: 'repairs',
    description: 'Immediate emergency dispatch within 30-45 minutes for power outages, smoke, or dangerous sparks.',
    detailedDescription: 'Round-the-clock emergency team equipped with rapid response tools to secure hazardous electrical situations, restore main power, and replace blown transformers/panels.',
    iconName: 'Siren',
    estimatedTime: 'Immediate Dispatch',
    priceRange: '$120 - $350',
    isEmergencyAvailable: true,
    popular: true
  },
  {
    id: 'general-maintenance-package',
    name: 'General Electrical Maintenance (Full House Packages)',
    category: 'safety',
    description: 'Annual or bi-annual preventive maintenance checkup covering all fixtures, connections & load testing.',
    detailedDescription: 'Proactive full-house maintenance package: terminal tightening, breaker thermal checks, ground resistance testing, socket tension fixes, and fan lubrications.',
    iconName: 'Wrench',
    estimatedTime: '2 - 4 Hours',
    priceRange: '$150 - $350',
    isEmergencyAvailable: false
  },
  {
    id: 'appliance-wiring',
    name: 'Appliance Wiring (AC, Geyser, Kitchen Appliances)',
    category: 'fixtures',
    description: 'Dedicated high-amperage lines for Air Conditioners, Water Heaters (Geysers), Induction Cooktops & Heavy Motors.',
    detailedDescription: 'Dedicated heavy-duty wire runs with isolated miniature circuit breakers (MCBs) for high-wattage equipment like split AC units, electric water heaters, microwave ovens, and pumps.',
    iconName: 'Tv',
    estimatedTime: '1 - 3 Hours',
    priceRange: '$90 - $220',
    isEmergencyAvailable: true
  },
  {
    id: 'custom-electrical-request',
    name: 'Any Other Electrical Complaint / Custom Request',
    category: 'repairs',
    description: 'Have a unique requirement or uncommon complaint? Send us your specific details for a custom solution.',
    detailedDescription: 'Custom electrical engineering, specialized lighting controls, automation integration, landscape accent lighting, workshop heavy power lines, or any unlisted electrical service.',
    iconName: 'HelpCircle',
    estimatedTime: 'Varies',
    priceRange: 'Custom Quote',
    isEmergencyAvailable: true
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All 21 Services' },
  { id: 'wiring', label: 'Wiring & New Build' },
  { id: 'panels', label: 'Panels & Breakers' },
  { id: 'repairs', label: 'Repairs & Emergency' },
  { id: 'fixtures', label: 'Lights, Fans & Outlets' },
  { id: 'backup', label: 'Generators, Solar & UPS' },
  { id: 'safety', label: 'Safety & Inspection' },
  { id: 'commercial', label: 'Commercial Services' }
];
