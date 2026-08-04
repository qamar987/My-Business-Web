import React, { useState } from 'react';
import {
  Zap,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Phone,
  MessageCircle,
  ChevronDown,
  Plus
} from 'lucide-react';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';

interface ServicesPageProps {
  onOpenBookingModal: (serviceId?: string) => void;
  onOpenCalculator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBookingModal,
  onOpenCalculator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMobileServiceId, setSelectedMobileServiceId] = useState<string>('');

  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4 fill-amber-400" />
            <span>Complete 21 Service Catalog</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Electrical Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From residential full home wiring to commercial 3-phase power, high-amperage panel upgrades, and round-the-clock emergency fault repairs. Every service comes backed by master electrician certification and upfront written pricing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20want%20to%20inquire%20about%20electrical%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
            <a
              href="tel:03024597248"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-xl border border-slate-700 transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>0302-4597248</span>
            </a>
          </div>
        </div>
      </div>

      {/* Controls: Search Bar & Category Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search e.g. rewiring, short circuit, solar..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <strong className="text-amber-400">{filteredServices.length}</strong> of 21 Services
          </div>
        </div>

        {/* Category Dropdown for Mobile / Pill Tabs for Desktop */}
        <div className="sm:hidden">
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            Select Category Dropdown:
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedMobileServiceId('');
              }}
              className="w-full bg-slate-900 border border-slate-700 text-white font-bold text-sm rounded-xl px-4 py-3 appearance-none focus:outline-none focus:border-amber-400 pr-10 cursor-pointer"
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-slate-900 text-white py-2">
                  {cat.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-amber-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Category Pill Tabs for Desktop */}
        <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SERVICE_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile View: Service Select Dropdown & Card */}
      <div className="sm:hidden bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
        <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
          Select Service from List ({filteredServices.length} available):
        </label>
        <div className="relative">
          <select
            value={selectedMobileServiceId || filteredServices[0]?.id || ''}
            onChange={(e) => setSelectedMobileServiceId(e.target.value)}
            className="w-full bg-slate-950 border border-amber-500/50 text-white font-bold text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-amber-400 pr-10 cursor-pointer shadow-inner"
          >
            {filteredServices.map((service) => (
              <option key={service.id} value={service.id} className="bg-slate-900 text-white py-2">
                ⚡ {service.name}
              </option>
            ))}
          </select>
          <ChevronDown className="w-5 h-5 text-amber-400 absolute right-3.5 top-4 pointer-events-none" />
        </div>

        {/* Active Selected Mobile Service Details Card */}
        {(() => {
          const activeService = filteredServices.find(s => s.id === (selectedMobileServiceId || filteredServices[0]?.id)) || filteredServices[0];
          if (!activeService) {
            return (
              <div className="p-4 text-center text-slate-400 text-xs">
                No services match your search or filter.
              </div>
            );
          }
          return (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                {activeService.isEmergencyAvailable && (
                  <span className="text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> 24/7 Available
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{activeService.name}</h3>
                <p className="text-xs text-slate-300 mt-1.5 font-normal leading-relaxed">
                  {activeService.description}
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-normal border-t border-slate-800/80 pt-2">
                  {activeService.detailedDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="bg-slate-900 p-2.5 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Est. Completion:</span>
                  <span className="font-semibold text-amber-400">{activeService.estimatedTime}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => onOpenBookingModal(activeService.id)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-xl text-xs transition-colors shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Desktop View: Services Grid */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-200 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  ⚡
                </div>
                {service.isEmergencyAvailable && (
                  <span className="text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> 24/7 Service
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                  {service.description}
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-normal border-t border-slate-800/80 pt-2">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="bg-slate-950 p-2.5 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Est. Completion:</span>
                  <span className="font-semibold text-amber-400">{service.estimatedTime}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-2">
              <button
                onClick={() => onOpenBookingModal(service.id)}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold py-2.5 rounded-xl text-xs transition-colors border border-slate-700 cursor-pointer"
              >
                <span>Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Request / Unlisted Complaint Box */}
      <div className="bg-slate-900 border-2 border-dashed border-slate-800 rounded-2xl p-8 text-center space-y-4 max-w-3xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Have a Unique Electrical Issue or Custom Request?</h3>
          <p className="text-slate-400 text-xs mt-1 max-w-lg mx-auto">
            Our master engineers handle custom industrial setups, specialized smart home automation, landscape lighting loops, and unusual circuit complaints.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => onOpenBookingModal('custom-electrical-request')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
          >
            Services Request
          </button>
          <a
            href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20have%20a%20custom%20electrical%20request."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/80 px-6 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss on WhatsApp (0302-4597248)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
