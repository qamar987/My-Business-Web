import React, { useState, useEffect } from 'react';
import { Phone, Clock, ShieldCheck, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Page } from '../types';
import { QamarPowerLogo } from './QamarPowerLogo';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenBookingModal: (serviceId?: string) => void;
  onOpenCalculator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'services', label: 'Services (21)' },
    { page: 'about', label: 'About Us' },
    { page: 'gallery', label: 'Gallery' },
    { page: 'contact', label: 'Contact' },
    { page: 'reviews', label: 'Reviews' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Main Nav Bar */}
      <div
        className={`bg-slate-900/95 backdrop-blur-md text-white transition-all border-b border-slate-800 ${
          isScrolled ? 'py-2.5 shadow-xl' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer shrink-0"
          >
            <QamarPowerLogo size="md" showTagline={true} />
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20need%20an%20electrical%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all cursor-pointer text-sm"
            >
              <span>Book a Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 gap-2 pb-3 border-b border-slate-800">
              <a
                href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20need%20electrical%20service%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 p-2.5 rounded-lg text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Chat (0302-4597248)
              </a>
            </div>

            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenBookingModal();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 rounded-lg text-base shadow-lg shadow-amber-500/20"
              >
                <span>Book Service via WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
