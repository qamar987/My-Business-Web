import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ALL_SERVICES } from '../data/servicesData';

interface CostCalculatorProps {
  onBookWithEstimate: (serviceId: string, notes: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onBookWithEstimate }) => {
  const [propertyType, setPropertyType] = useState<'apartment' | 'house' | 'commercial'>('house');
  const [roomsCount, setRoomsCount] = useState<number>(4);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'full-house-wiring',
    'circuit-breaker-panel'
  ]);
  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter(s => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  // Estimate logic
  const calculateEstimate = () => {
    let base = 0;
    if (propertyType === 'apartment') base += 200;
    if (propertyType === 'house') base += 450;
    if (propertyType === 'commercial') base += 900;

    base += roomsCount * 65;

    let servicesCostMin = 0;
    let servicesCostMax = 0;

    selectedServiceIds.forEach(id => {
      const service = ALL_SERVICES.find(s => s.id === id);
      if (service) {
        if (id === 'full-house-wiring') {
          servicesCostMin += 800 + roomsCount * 120;
          servicesCostMax += 1800 + roomsCount * 250;
        } else if (id === 'circuit-breaker-panel') {
          servicesCostMin += 350;
          servicesCostMax += 850;
        } else if (id === 'emergency-repair-247') {
          servicesCostMin += 150;
          servicesCostMax += 300;
        } else {
          servicesCostMin += 100;
          servicesCostMax += 300;
        }
      }
    });

    let minTotal = Math.round(base + servicesCostMin);
    let maxTotal = Math.round(base + servicesCostMax);

    if (isEmergency) {
      minTotal = Math.round(minTotal * 1.25);
      maxTotal = Math.round(maxTotal * 1.25);
    }

    return { minTotal, maxTotal };
  };

  const { minTotal, maxTotal } = calculateEstimate();

  const handleBookNow = () => {
    const mainService = selectedServiceIds[0] || 'full-house-wiring';
    const notes = `Calculator Estimate: ${propertyType.toUpperCase()} (${roomsCount} rooms). Selected: ${selectedServiceIds.join(
      ', '
    )}. Emergency: ${isEmergency ? 'YES' : 'NO'}. Estimate Range: $${minTotal} - $${maxTotal}`;
    onBookWithEstimate(mainService, notes);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Instant Electrical Cost Estimator</h3>
          <p className="text-xs text-slate-400">Estimate transparent pricing for your project before booking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Options */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Property Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              1. Select Property Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'apartment', label: 'Apartment / Flat' },
                { id: 'house', label: 'Single House / Villa' },
                { id: 'commercial', label: 'Commercial Office' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setPropertyType(item.id as any)}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    propertyType === item.id
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Rooms / Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Number of Rooms / Outlets
              </label>
              <span className="text-amber-400 font-extrabold text-sm">{roomsCount} Rooms/Areas</span>
            </div>
            <input
              type="range"
              min={1}
              max={15}
              value={roomsCount}
              onChange={e => setRoomsCount(parseInt(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1 Room</span>
              <span>8 Rooms</span>
              <span>15+ Rooms</span>
            </div>
          </div>

          {/* Step 3: Required Services */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              3. Select Required Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {[
                { id: 'full-house-wiring', label: 'Full Wiring / Rewiring' },
                { id: 'circuit-breaker-panel', label: 'Main Breaker Panel Upgrade' },
                { id: 'fan-light-fixture', label: 'Lights & Fans Setup' },
                { id: 'socket-switch-installation', label: 'Sockets & Switches' },
                { id: 'generator-ups-wiring', label: 'Generator ATS / UPS' },
                { id: 'solar-panel-wiring', label: 'Solar Inverter Setup' },
                { id: 'electrical-safety-inspection', label: '40-Point Safety Audit' },
                { id: 'emergency-repair-247', label: '24/7 Emergency Dispatch' },
              ].map(s => {
                const isSelected = selectedServiceIds.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{s.label}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-700'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Emergency Checkbox */}
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-red-500/30">
            <input
              type="checkbox"
              id="calculator-emergency"
              checked={isEmergency}
              onChange={e => setIsEmergency(e.target.checked)}
              className="w-4 h-4 accent-red-500 rounded cursor-pointer"
            />
            <label htmlFor="calculator-emergency" className="text-xs text-slate-300 cursor-pointer">
              <strong className="text-red-400 font-bold">Require 24/7 Emergency Immediate Dispatch?</strong> (+25% rapid response surge)
            </label>
          </div>
        </div>

        {/* Right Summary Card */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded">
              Estimated Budget Range
            </span>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                ${minTotal.toLocaleString()} - ${maxTotal.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Includes initial labor, standard materials, diagnostic scan, and 1-year warranty.
              </p>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Property:</span>
                <span className="capitalize font-semibold">{propertyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scope:</span>
                <span className="font-semibold">{roomsCount} rooms • {selectedServiceIds.length} services</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Dispatch Speed:</span>
                <span className={`font-semibold ${isEmergency ? 'text-red-400' : 'text-emerald-400'}`}>
                  {isEmergency ? 'Immediate (<30 Min)' : 'Standard Scheduled'}
                </span>
              </div>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg text-[11px] text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Final written quote provided on-site before any physical work starts. No hidden surprises.</span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleBookNow}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm cursor-pointer"
            >
              <span>Book With This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
