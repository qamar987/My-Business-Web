export type Page = 'home' | 'services' | 'about' | 'gallery' | 'contact' | 'reviews';

export interface ElectricalService {
  id: string;
  name: string;
  category: 'wiring' | 'panels' | 'repairs' | 'fixtures' | 'backup' | 'safety' | 'commercial';
  description: string;
  detailedDescription: string;
  iconName: string; // Lucide icon name mapping
  estimatedTime: string;
  priceRange: string;
  isEmergencyAvailable: boolean;
  popular?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  serviceId: string;
  urgency: 'standard' | 'urgent_today' | 'emergency_now';
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  serviceUsed: string;
  comment: string;
  verified: boolean;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'panels' | 'lighting' | 'solar_backup';
  imageUrl: string;
  description: string;
  location: string;
  completionDate: string;
  tags: string[];
}

export interface CalculatorState {
  propertyType: 'apartment' | 'house' | 'commercial';
  sizeSqFt: number;
  servicesSelected: string[];
  requiresEmergency: boolean;
}
