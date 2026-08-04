import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  AlertTriangle,
  Zap,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-3 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">Contact & 24/7 Dispatch</h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Need an electrician right now? Contact us directly by phone, WhatsApp, or visit our operations hub in Islamabad & Rawalpindi for immediate response.
        </p>
      </div>

      {/* Main Grid: Comprehensive Contact Details + Location Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Detailed Contact Info Box */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Phone className="w-6 h-6 text-amber-400" />
              <span>Direct Contact Details</span>
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              Reach out to Qamar Power directly for residential, commercial, and emergency electrical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Direct Call & Emergency</h3>
              <p className="text-xs text-slate-400">Available 24 Hours / 7 Days</p>
              <a
                href="tel:03024597248"
                className="inline-block text-lg font-black text-amber-400 hover:text-amber-300 hover:underline pt-1"
              >
                0302-4597248
              </a>
              <div className="text-[11px] text-slate-500">+92 302 4597248</div>
            </div>

            {/* WhatsApp */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Instant WhatsApp Chat</h3>
              <p className="text-xs text-slate-400">Fast response with Qamar Hussain</p>
              <a
                href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20want%20to%20book%20an%20electrical%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 hover:text-emerald-300 hover:underline pt-1"
              >
                <span>Chat on 0302-4597248</span>
              </a>
              <div className="text-[11px] text-slate-500">Instant location & photo sharing</div>
            </div>

            {/* Direct Email */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Direct Email</h3>
              <p className="text-xs text-slate-400">For commercial proposals & inquiries</p>
              <a
                href="mailto:qamarpower.pk@gmail.com"
                className="inline-block text-sm font-bold text-slate-200 hover:text-amber-400 hover:underline pt-1"
              >
                qamarpower.pk@gmail.com
              </a>
            </div>

            {/* Location & Hub */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Service Area Hub</h3>
              <p className="text-xs text-slate-400">Twin Cities Operations</p>
              <div className="text-sm font-bold text-slate-200 pt-1">
                Islamabad & Rawalpindi, Pakistan
              </div>
            </div>
          </div>

          {/* Business Lead Info & Trust Badges */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center border border-amber-500/30 text-lg">
                QH
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <span>Qamar Hussain</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Master Electrician
                  </span>
                </h4>
                <p className="text-xs text-amber-400">Owner & Lead Electrical Specialist</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Supervising every electrical installation, DB box setup, rewiring, and emergency callout across Islamabad and Rawalpindi with 100% safety standards.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-900">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>On-Site Supervision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Emergency Dispatch Card */}
          <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-6 text-white space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold text-base">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
              <span>24/7 Emergency Dispatch</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sparks, power loss, burning smell, short circuits, or live wire emergencies? Call immediately for rapid technician dispatch in Islamabad and Rawalpindi.
            </p>
            <a
              href="tel:03024597248"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-extrabold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-red-600/30"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Emergency: 0302-4597248</span>
            </a>
          </div>

          {/* Quick Contact Hours & WhatsApp */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="text-base font-bold text-white border-b border-slate-800 pb-2">
              Working Hours & WhatsApp
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Service Hours</div>
                  <div className="text-slate-400">Monday - Sunday: Open 24 Hours / 365 Days</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Average Response Time</div>
                  <div className="text-slate-400">30 to 45 Minutes on-site arrival</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20want%20to%20book%20an%20electrical%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open WhatsApp Chat (Qamar Hussain)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Location Embed & Service Coverage */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Islamabad & Rawalpindi Service Area Map</span>
            </h3>
            <p className="text-xs text-slate-400">
              Providing fast electrician response across all sectors of Islamabad and Rawalpindi.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Islamabad+Rawalpindi+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400 font-bold border border-amber-500/30 px-3 py-1.5 rounded-lg hover:bg-amber-500/10 transition-colors w-fit"
          >
            Get Location Map →
          </a>
        </div>

        {/* Map Container Embed */}
        <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <iframe
            title="Qamar Power Electrical Service Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212443.91880455848!2d72.93722748835848!3d33.61625076620953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2spk"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs shadow-xl max-w-xs">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Qamar Power — Islamabad & Rawalpindi</span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1">
              Lead Electrician: Qamar Hussain • Rapid emergency response across F, G, I, H sectors, Saddar, Bahria Town & DHA. Phone: 0302-4597248
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
