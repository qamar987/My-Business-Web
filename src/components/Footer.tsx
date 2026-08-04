import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, MessageCircle, ArrowRight } from 'lucide-react';
import { Page } from '../types';
import { QamarPowerLogo } from './QamarPowerLogo';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="bg-slate-950/20 text-slate-950 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              24/7 Rapid Emergency Response
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Facing an Electrical Emergency or Need a Fast Quote in Islamabad/Rawalpindi?
            </h3>
            <p className="text-slate-900/90 text-sm sm:text-base mt-1 font-medium">
              Qamar Hussain & certified electricians arrive equipped with thermal scanners and full replacement stock.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <a
              href="tel:03024597248"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              <Phone className="w-5 h-5 fill-amber-400" />
              <span>Call Now: 0302-4597248</span>
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              <span>Schedule Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <QamarPowerLogo size="lg" showTagline={false} />
          <p className="text-slate-400 text-sm leading-relaxed">
            Your trusted electrical service partner led by <strong className="text-amber-400">Qamar Hussain</strong> for residential homes, new constructions, and commercial facilities in Islamabad & Rawalpindi.
          </p>

          <div className="pt-2 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Lead Electrician: Qamar Hussain</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Fully Certified & Guaranteed Workmanship</span>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Home Page', page: 'home' as Page },
              { label: 'All 21 Electrical Services', page: 'services' as Page },
              { label: 'About Our Team & Certifications', page: 'about' as Page },
              { label: 'Work Portfolio & Gallery', page: 'gallery' as Page },
              { label: 'Contact Us & Map Location', page: 'contact' as Page },
              { label: 'Client Reviews & Rating', page: 'reviews' as Page },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => {
                    onNavigate(link.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-amber-500 text-xs">›</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Key Electrical Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
            Core Electrical Services
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>⚡ Full House Wiring & New Building Setup</li>
            <li>⚡ Circuit Breakers & Main Distribution Boards</li>
            <li>⚡ 24/7 Emergency Short Circuit & Fault Repair</li>
            <li>⚡ House Rewiring & Copper Conductor Upgrades</li>
            <li>⚡ Generator ATS, Inverter & UPS Wiring</li>
            <li>⚡ Solar Array Wiring & Net-Metering Setup</li>
            <li>⚡ Electrical Safety Inspections & Audits</li>
            <li>⚡ Commercial 3-Phase Industrial Power</li>
          </ul>
        </div>

        {/* Col 4: Contact & Location */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 border-l-2 border-amber-500 pl-3">
            Contact & Location
          </h4>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Islamabad, Rawalpindi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:03024597248" className="hover:text-amber-400 font-semibold">
                0302-4597248 (+92 302 4597248)
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:qamarpower.pk@gmail.com" className="hover:text-amber-400">
                qamarpower.pk@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon-Sun: 24 Hours Emergency Service</span>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20want%20to%20book%20an%20electrical%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/60 border-t border-slate-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Qamar Power Electrical Services (Qamar Hussain). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Islamabad & Rawalpindi Coverage</span>
            <span>Safety First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
