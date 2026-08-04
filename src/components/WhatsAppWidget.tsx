import React, { useState } from 'react';
import { MessageCircle, X, Send, Zap, PhoneCall } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleStartChat = () => {
    const text = encodeURIComponent(
      userMsg || 'Hello Qamar Power, I need urgent electrical service support or a quick quote.'
    );
    window.open(`https://wa.me/923024597248?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Qamar Power Electrical</h4>
                <p className="text-[11px] text-emerald-100 opacity-90">24/7 WhatsApp (Qamar Hussain)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-950 space-y-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-emerald-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Fast Response Guaranteed
              </p>
              <p>
                Assalam-o-Alaikum! Need quick electrical repair, rewiring, or emergency electrician dispatch in Islamabad or Rawalpindi? Chat directly with Qamar Hussain.
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                rows={2}
                placeholder="Type your electrical issue..."
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-emerald-500 focus:outline-none"
              />
              <button
                onClick={handleStartChat}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-lg text-xs shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500">
              <span>Or Call Direct:</span>
              <a href="tel:03024597248" className="text-amber-400 font-bold flex items-center gap-1">
                <PhoneCall className="w-3 h-3" /> 0302-4597248
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-emerald-400/40"
        aria-label="WhatsApp Dispatch"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-slate-950"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-600" />
      </button>
    </div>
  );
};
