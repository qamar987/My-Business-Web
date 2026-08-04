import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReviewModal } from './components/ReviewModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { INITIAL_TESTIMONIALS } from './data/testimonialsData';
import { Page, Testimonial } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  
  // Modals state
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleOpenBookingModal = (serviceId?: string) => {
    const text = encodeURIComponent(
      serviceId
        ? `Hello Qamar Power (Qamar Hussain), I want to inquire about electrical service: ${serviceId}.`
        : `Hello Qamar Power (Qamar Hussain), I want to book an electrical service for my property.`
    );
    window.open(`https://wa.me/923024597248?text=${text}`, '_blank');
  };

  const handleAddReview = (newReview: Testimonial) => {
    setTestimonials([newReview, ...testimonials]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenBookingModal={handleOpenBookingModal}
            testimonials={testimonials}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenBookingModal={handleOpenBookingModal}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={setCurrentPage}
            onOpenBookingModal={handleOpenBookingModal}
          />
        );
      case 'gallery':
        return <GalleryPage onOpenBookingModal={handleOpenBookingModal} />;
      case 'contact':
        return <ContactPage />;
      case 'reviews':
        return (
          <TestimonialsPage
            testimonials={testimonials}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            onOpenBookingModal={handleOpenBookingModal}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenBookingModal={handleOpenBookingModal}
            testimonials={testimonials}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Interactive Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Mobile Sticky Quick Dispatch Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 border-t border-slate-800/90 p-2 backdrop-blur-md flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:03024597248"
          className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white font-extrabold py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-white" />
          <span>0302-4597248</span>
        </a>
        <a
          href="https://wa.me/923024597248?text=Hello%20Qamar%20Power,%20I%20need%20electrical%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-extrabold py-2.5 px-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Submit Review Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </div>
  );
}
