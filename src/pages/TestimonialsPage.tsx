import React, { useState } from 'react';
import { Star, MessageSquarePlus, ShieldCheck, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { Testimonial, Page } from '../types';

interface TestimonialsPageProps {
  testimonials: Testimonial[];
  onOpenReviewModal: () => void;
  onOpenBookingModal: (serviceId?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  testimonials,
  onOpenReviewModal,
  onOpenBookingModal
}) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredTestimonials = testimonials.filter(t =>
    filterRating === 'all' ? true : t.rating === filterRating
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Client Feedback & Reputation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Customer Reviews</h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
            Read verified feedback from real homeowners, landlords, and business clients who experienced our electrical work.
          </p>
        </div>

        <button
          onClick={onOpenReviewModal}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm shrink-0 cursor-pointer"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Ratings Metrics Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-4xl font-black text-amber-400">4.9 / 5.0</div>
          <div className="flex justify-center text-amber-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <p className="text-xs text-slate-400">Overall Rating (340+ Audited Reviews)</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-4xl font-black text-emerald-400">99.4%</div>
          <p className="text-sm font-bold text-white">On-Time Arrival</p>
          <p className="text-xs text-slate-400">Strict emergency & appointment SLA</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-4xl font-black text-amber-400">100%</div>
          <p className="text-sm font-bold text-white">Passed Inspection</p>
          <p className="text-xs text-slate-400">First-pass code compliance audit</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-2">
          <div className="text-4xl font-black text-white">1,200+</div>
          <p className="text-sm font-bold text-white">5-Star Badges</p>
          <p className="text-xs text-slate-400">Across Google, Yelp & Direct</p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">Filter Ratings:</span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterRating === 'all'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Ratings
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterRating === 5
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              5 Stars Only
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-400">
          Showing <strong className="text-amber-400">{filteredTestimonials.length}</strong> Reviews
        </div>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.map((t) => (
          <div
            key={t.id}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500">{t.date}</span>
              </div>

              <h4 className="text-sm font-bold text-white bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                Service: {t.serviceUsed}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-[11px] text-slate-400">{t.location}</div>
              </div>
              {t.verified && (
                <span className="flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verified Client
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
