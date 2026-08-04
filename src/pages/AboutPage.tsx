import React from 'react';
import {
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Wrench,
  Users,
  Zap,
  ArrowRight,
  ClipboardCheck,
  Flame,
  FileCheck
} from 'lucide-react';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      {/* Hero / Overview Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Over 15 Years of Engineering Excellence</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Setting the Standard in Residential & Commercial Electrical Safety
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Qamar Power Electrical Services was established by <strong className="text-amber-400">Qamar Hussain</strong> with a simple promise: electrical work should never involve guesswork, hidden markups, or unsafe shortcuts. Today, our team provides complete electrical solutions across Islamabad and Rawalpindi for homes, new building constructions, and commercial facilities.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-amber-400 font-extrabold text-2xl">15+</div>
              <div className="text-slate-400 mt-1">Years in Business</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-amber-400 font-extrabold text-2xl">5,000+</div>
              <div className="text-slate-400 mt-1">Completed Jobs</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <div className="text-emerald-400 font-extrabold text-2xl">100%</div>
              <div className="text-slate-400 mt-1">Code Compliance Pass</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl relative">
            <img
              src="/src/assets/images/certified_electrician_team_1785840797262.jpg"
              alt="Qamar Power Certified Electrician Team Qamar Hussain"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center">
                  ⚡
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Certified Master Dispatch Team</h4>
                  <p className="text-xs text-slate-400">Background checked & thermal diagnostic trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Licenses & Official Certifications Showcase */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Licenses, Insurance & Certifications
          </h2>
          <p className="text-xs text-slate-400">
            Never hire an unlicensed contractor. We hold active top-tier electrical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
            <h4 className="text-sm font-bold text-white">Master Electrician License</h4>
            <p className="text-xs text-slate-400">
              License #EL-98421 issued by the State Electrical Examination Board.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <FileCheck className="w-8 h-8 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">$2,000,000 Liability Insurance</h4>
            <p className="text-xs text-slate-400">
              Full commercial liability and workers' compensation coverage for peace of mind.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <Flame className="w-8 h-8 text-red-400" />
            <h4 className="text-sm font-bold text-white">OSHA Safety Compliant</h4>
            <p className="text-xs text-slate-400">
              Strict arc flash PPE standards and lock-out/tag-out (LOTO) procedures.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <ClipboardCheck className="w-8 h-8 text-amber-400" />
            <h4 className="text-sm font-bold text-white">NEC Code Standard</h4>
            <p className="text-xs text-slate-400">
              100% adherence to National Electrical Code 2026 revisions & local municipal laws.
            </p>
          </div>
        </div>
      </section>

      {/* Our 4-Step Working Process */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
            How We Work
          </span>
          <h2 className="text-3xl font-black text-white">The Qamar Power Service Process</h2>
          <p className="text-slate-400 text-xs">
            Smooth, transparent, and hassle-free from your first phone call to final sign-off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Diagnostic Inspection',
              desc: 'We inspect your electrical panel, wiring drops, or load requirements using thermal cameras and meters.'
            },
            {
              step: '02',
              title: 'Upfront Written Quote',
              desc: 'You receive an exact price breakdown with zero hidden fees before any wrench or screwdriver touches a wire.'
            },
            {
              step: '03',
              title: 'Expert Execution',
              desc: 'Our certified master electrician completes the work cleanly using fire-rated copper cables and conduits.'
            },
            {
              step: '04',
              title: 'Safety Audit & Sign-off',
              desc: 'We perform a full load test, clean the workspace, issue a 1-year warranty certificate, and walk you through operation.'
            }
          ].map((proc, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <span className="text-4xl font-black text-amber-500/20 font-mono block">
                {proc.step}
              </span>
              <h4 className="text-base font-bold text-white">{proc.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-10 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Work with Certified Professionals?</h3>
          <p className="text-slate-900 text-sm font-medium mt-1">
            Book your service today or speak directly with our lead dispatcher.
          </p>
        </div>
        <button
          onClick={() => onOpenBookingModal()}
          className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm shrink-0 cursor-pointer"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};
