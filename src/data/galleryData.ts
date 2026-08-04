import { GalleryProject } from '../types';

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'p1',
    title: '200A Main Breaker Panel Upgrade & Clean Cable Management',
    category: 'panels',
    imageUrl: '/src/assets/images/electrician_hero_banner_1785840779792.jpg',
    description: 'Upgraded an outdated main distribution box to a modern 200A breaker panel with surge protection and clear circuit labeling.',
    location: 'Sector F-7, Islamabad',
    completionDate: 'July 2026',
    tags: ['Panel Upgrade', '200 Amp', 'Surge Protection', 'Labeling']
  },
  {
    id: 'p2',
    title: 'Full House Underground Concealed Wiring for Modern Villa',
    category: 'residential',
    imageUrl: '/src/assets/images/panel3.jpg',
    description: 'Executed complete fire-resistant pure copper wiring setup with custom conduit routing across 1-Kanal luxury residence.',
    location: 'Bahria Town Phase 7, Rawalpindi',
    completionDate: 'June 2026',
    tags: ['New Construction', 'Conduit Wiring', 'Full Home', '3-Phase']
  },
  {
    id: 'p3',
    title: 'Commercial Office Recessed Architectural LED Lighting',
    category: 'lighting',
    imageUrl: '/src/assets/images/panel2.jpg',
    description: 'Designed and installed energy-efficient smart dimmable LED grid panels and accent ceiling lights for an office floor.',
    location: 'Blue Area, Islamabad',
    completionDate: 'May 2026',
    tags: ['Commercial', 'LED Lighting', 'Smart Dimmers', 'Energy Saving']
  },
  {
    id: 'p4',
    title: 'Automatic Generator Interlock & UPS Backup System',
    category: 'solar_backup',
    imageUrl: '/src/assets/images/panel1.jpg',
    description: 'Installed 15kW standby generator system with Automatic Transfer Switch (ATS) for continuous power reliability.',
    location: 'Saddar, Rawalpindi',
    completionDate: 'April 2026',
    tags: ['Generator ATS', 'Power Backup', 'UPS System', 'Emergency Prep']
  },
  {
    id: 'p5',
    title: 'Rooftop Solar Inverter Wiring & Hybrid Net-Metering',
    category: 'solar_backup',
    imageUrl: '/src/assets/images/panel.jpg',
    description: 'Integrated 10kW rooftop solar panels with hybrid inverter array, battery storage rack, and grid disconnect safety switch.',
    location: 'DHA Phase 2, Islamabad',
    completionDate: 'March 2026',
    tags: ['Solar DC Wiring', 'Hybrid Inverter', 'Battery Bank', 'Green Energy']
  }
];
