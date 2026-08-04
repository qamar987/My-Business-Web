import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin, User, MessageSquare, AlertCircle, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import { ALL_SERVICES } from '../data/servicesData';
import { BookingFormData } from '../types';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Islamabad / Rawalpindi',
    serviceId: preSelectedServiceId || ALL_SERVICES[0].id,
    urgency: 'standard',
    preferredDate: '',
    preferredTime: 'Morning (8AM - 12PM)',
    message: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedServiceId }));
    }
  }, [preSelectedServiceId]);

  if (!isOpen) return null;

  const selectedServiceObj = ALL_SERVICES.find(s => s.id === formData.serviceId) || ALL_SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    // Generate reference code
    const ref = `QP-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(ref);

    // Automatically open WhatsApp with booking details
    const text = encodeURIComponent(
      `Hello Qamar Power (Qamar Hussain),\nBooking Ref: ${ref}\nService: ${selectedServiceObj.name}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nUrgency: ${formData.urgency.toUpperCase()}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/923024597247?text=${text}`, '_blank');
  };

  const handleWhatsAppRedirect = () => {
    const ref = submittedRef || `QP-${Math.floor(10000 + Math.random() * 90000)}`;
    const text = encodeURIComponent(
      `Hello Qamar Power (Qamar Hussain),\nBooking Ref: ${ref}\nService: ${selectedServiceObj.name}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nUrgency: ${formData.urgency.toUpperCase()}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/923024597247?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
              ⚡
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Book Service / Get Free Quote</h3>
              <p className="text-xs text-slate-400">Upfront pricing • Licensed electricians • Zero obligation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submittedRef ? (
            /* Success View */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs bg-amber-500/20 text-amber-400 font-mono px-3 py-1 rounded-full font-bold">
                  Reference: {submittedRef}
                </span>
                <h4 className="text-2xl font-extrabold text-white mt-3">Booking Confirmed!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Our senior electrician dispatcher has received your request for <strong>{selectedServiceObj.name}</strong>.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs text-slate-300 max-w-md mx-auto space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-white">{selectedServiceObj.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Urgency Level:</span>
                  <span className="font-semibold text-amber-400 uppercase">{formData.urgency}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Contact Phone:</span>
                  <span className="font-semibold text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Est. Price Range:</span>
                  <span className="font-bold text-emerald-400">{selectedServiceObj.priceRange}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send to WhatsApp Dispatch</span>
                </button>
                <button
                  onClick={() => {
                    setSubmittedRef(null);
                    onClose();
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Service Indicator */}
              <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    Selected Service
                  </span>
                  <h4 className="text-white font-bold text-base">{selectedServiceObj.name}</h4>
                  <p className="text-xs text-slate-400">{selectedServiceObj.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-400 block">Est. Price</span>
                  <span className="text-sm font-extrabold text-emerald-400">{selectedServiceObj.priceRange}</span>
                </div>
              </div>

              {/* Service Select Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Change / Choose Electrical Service
                </label>
                <select
                  value={formData.serviceId}
                  onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                >
                  {ALL_SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgency Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Service Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'standard', label: 'Standard', sub: '1-3 Days', color: 'border-slate-800 bg-slate-950 text-slate-300' },
                    { id: 'urgent_today', label: 'Priority Today', sub: 'Same-day', color: 'border-amber-500/40 bg-amber-950/20 text-amber-400' },
                    { id: 'emergency_now', label: '24/7 Emergency', sub: '< 45 Mins', color: 'border-red-500/50 bg-red-950/30 text-red-400' },
                  ].map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: item.id as any })}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.urgency === item.id
                          ? 'ring-2 ring-amber-500 font-bold bg-amber-500/10'
                          : item.color
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* User Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0302-4597247"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property Address *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Street address, building, or apartment #"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option>Morning (8AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                    <option>ASAP Emergency Dispatch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Issue Details / Special Notes</label>
                <textarea
                  rows={2}
                  placeholder="Describe electrical complaints, breaker panel amperage, or specific fixture preferences..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No upfront payment required</span>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Booking Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
