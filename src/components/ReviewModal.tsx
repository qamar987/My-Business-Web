import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2 } from 'lucide-react';
import { ALL_SERVICES } from '../data/servicesData';
import { Testimonial } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Testimonial) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddReview }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceUsed, setServiceUsed] = useState(ALL_SERVICES[0].name);
  const [comment, setComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newTestimonial: Testimonial = {
      id: `rev-${Date.now()}`,
      name,
      location: location || 'Local Customer',
      rating,
      date: 'Just now',
      serviceUsed,
      comment,
      verified: true
    };

    onAddReview(newTestimonial);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setName('');
      setComment('');
      setLocation('');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>Leave a Customer Review</span>
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Thank You For Your Feedback!</h4>
            <p className="text-xs text-slate-400">Your review has been verified and published to the site.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            {/* Star Rating Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-amber-400 ml-2">{rating} / 5 Stars</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Wright"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Neighborhood / Area</label>
                <input
                  type="text"
                  placeholder="e.g. Westside"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Service Performed</label>
              <select
                value={serviceUsed}
                onChange={(e) => setServiceUsed(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
              >
                {ALL_SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review *</label>
              <textarea
                rows={3}
                required
                placeholder="Share your experience with our electricians, turnaround time, safety, or quality..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Verified Review</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
