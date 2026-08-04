import React, { useState } from 'react';
import {
  Zap,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Award,
  Wrench,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { Page, Testimonial } from '../types';
import { ALL_SERVICES } from '../data/servicesData';
import { GALLERY_PROJECTS } from '../data/galleryData';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBookingModal: (serviceId?: string) => void;
  onOpenCalculator?: () => void;
  testimonials: Testimonial[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBookingModal,
  testimonials
}) => {
  const popularServices = ALL_SERVICES.filter(s => s.popular || s.isEmergencyAvailable).slice(0, 6);
  const [selectedMobileServiceId, setSelectedMobileServiceId] = useState<string>(popularServices[0]?.id || '');

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-6 pb-20 lg:py-24 border-b border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/electrician_hero_banner_1785840779792.jpg"
            alt="Qamar Power Electrician working on breaker panel"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                <Zap className="w-4 h-4 fill-amber-400" />
                <span>#1 Rated Master Electrician Team in Islamabad & Rawalpindi</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Reliable & Safe <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  Electrical Solutions
                </span>{' '}
                <br />
                For Homes & Business
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                From full house wiring in new constructions to emergency short circuit repairs and DB box upgrades. Master Electrician Qamar Hussain is available 24/7 with instant WhatsApp booking.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-600/25 transition-all text-sm sm:text-base cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Book via WhatsApp Now</span>
                </button>

                <a
                  href="tel:03024597248"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                  <span>Call 0302-4597248</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-xs">
                <div className="space-y-1">
                  <div className="text-amber-400 font-bold text-lg">15+ Years</div>
                  <div className="text-slate-400">Industry Experience</div>
                </div>
                <div className="space-y-1">
                  <div className="text-amber-400 font-bold text-lg">5,000+</div>
                  <div className="text-slate-400">Homes & Facilities</div>
                </div>
                <div className="space-y-1">
                  <div className="text-emerald-400 font-bold text-lg">&lt; 30 Mins</div>
                  <div className="text-slate-400">24/7 Emergency Dispatch</div>
                </div>
                <div className="space-y-1">
                  <div className="text-amber-400 font-bold text-lg">4.9 / 5★</div>
                  <div className="text-slate-400">Client Ratings (340+)</div>
                </div>
              </div>
            </div>

            {/* Right Card Widget */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold uppercase text-slate-300">Quick WhatsApp Booking</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded">
                  🟢 Electricians On Duty
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need an electrician fast? Click any service below to chat directly with Qamar Hussain on WhatsApp.
              </p>

              <div className="space-y-2">
                {ALL_SERVICES.slice(0, 4).map(service => (
                  <button
                    key={service.id}
                    onClick={() => onOpenBookingModal(service.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                          {service.name}
                        </div>
                        <div className="text-[10px] text-slate-400">{service.estimatedTime}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> Book
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 font-semibold py-2 transition-colors cursor-pointer"
              >
                <span>Browse All 21 Electrical Services</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Licensed & Certified</h4>
              <p className="text-xs text-slate-400">Master Electrician #EL-98421</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Guaranteed Workmanship</h4>
              <p className="text-xs text-slate-400">100% Quality Assurance</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">24/7 Rapid Response</h4>
              <p className="text-xs text-slate-400">Dispatch in under 30 mins</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1-Year Warranty</h4>
              <p className="text-xs text-slate-400">On all labor & installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Full Spectrum Electrical Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Popular Electrical Services
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Complete solutions for home rewiring, distribution panels, fixture installations, and 24/7 emergency troubleshooting.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-5 py-3 rounded-xl border border-slate-800 transition-colors text-sm cursor-pointer shrink-0"
          >
            <span>View All 21 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile View: Dropdown Selector */}
        <div className="sm:hidden bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
            Select Electrical Service:
          </label>
          <div className="relative">
            <select
              value={selectedMobileServiceId || popularServices[0]?.id}
              onChange={(e) => setSelectedMobileServiceId(e.target.value)}
              className="w-full bg-slate-950 border border-amber-500/50 text-white font-bold text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-amber-400 pr-10 cursor-pointer shadow-inner"
            >
              {popularServices.map((service) => (
                <option key={service.id} value={service.id} className="bg-slate-900 text-white py-2">
                  ⚡ {service.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-amber-400 absolute right-3.5 top-4 pointer-events-none" />
          </div>

          {/* Active Selected Mobile Service Card */}
          {(() => {
            const activeService = popularServices.find(s => s.id === (selectedMobileServiceId || popularServices[0]?.id)) || popularServices[0];
            if (!activeService) return null;
            return (
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  {activeService.isEmergencyAvailable && (
                    <span className="text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> 24/7 Available
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{activeService.name}</h3>
                  <p className="text-slate-300 text-xs mt-1.5 leading-relaxed font-normal">{activeService.description}</p>
                  <p className="text-slate-400 text-[11px] mt-2 border-t border-slate-800/80 pt-2 leading-relaxed">
                    {activeService.detailedDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => onOpenBookingModal(activeService.id)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-md shadow-emerald-600/20 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Book via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-3 py-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 text-xs font-bold"
                  >
                    Services
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Desktop View: 3-Column Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  {service.isEmergencyAvailable && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> 24/7 Available
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800 flex items-center gap-3">
                <button
                  onClick={() => onOpenBookingModal(service.id)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-md shadow-emerald-600/15 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-3 py-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold cursor-pointer"
                >
                  Services
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & About Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Why Homeowners & Businesses Prefer Qamar Power
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Safety First. Transparent Pricing. Master Craftsmen.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Electrical work requires absolute precision. Cut corners lead to fire hazards, code violations, and damaged electronics. At Qamar Power, led by Qamar Hussain, every job is inspected and guaranteed for 100% safety and reliability in Islamabad & Rawalpindi.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Zero Hidden Fees', desc: 'Upfront written quotes before any work begins' },
                { title: 'Code Compliant Guarantee', desc: '100% adherence to National Electrical Code (NEC)' },
                { title: 'Fully Stocked Vans', desc: '92% of repairs completed on the very first visit' },
                { title: 'Clean Worksite Guarantee', desc: 'We wear shoe covers and leave your property spotless' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                <span>Learn About Our Team & Certifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <img
                src="/src/assets/images/certified_electrician_team_1785840797262.jpg"
                alt="Qamar Power Certified Master Electrician Qamar Hussain"
                referrerPolicy="no-referrer"
                className="w-full h-80 lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">Qamar Hussain — Master Electrician</h4>
                    <p className="text-xs text-amber-400">Owner & Lead Electrical Specialist</p>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-full">
                    Licensed #EL-98421
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Portfolio Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Recent Completed Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Electrical Gallery & Projects
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Explore our real completed installations across residential homes, panel replacements, and commercial spaces.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-5 py-3 rounded-xl border border-slate-800 transition-colors text-sm cursor-pointer shrink-0"
          >
            <span>View Full Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_PROJECTS.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl group hover:border-amber-500/40 transition-all cursor-pointer"
              onClick={() => onNavigate('gallery')}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800">
                  <span>📍 {project.location}</span>
                  <span className="text-amber-400 font-semibold">View Case Study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Real Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Trusted by Hundreds of Local Families & Businesses
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
            <span className="text-white font-extrabold text-sm ml-2">4.9 / 5.0 Average Score</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-slate-400 text-[11px]">{item.location} • {item.serviceUsed}</div>
                </div>
                <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">
                  ✓ Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Read All Verified Customer Reviews ({testimonials.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
