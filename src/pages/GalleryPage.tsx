import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../data/galleryData';
import { GalleryProject, Page } from '../types';
import { Layers, MapPin, Calendar, Tag, Eye, X, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  onOpenBookingModal: (serviceId?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filteredProjects = GALLERY_PROJECTS.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-3 shadow-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Work Showcase & Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">Our Completed Work Gallery</h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Take a look at real completed projects executed by our master electricians. From neat 200A breaker panel wiring to full home concealed conduit runs, commercial office fit-outs, and rooftop solar array setups.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'All Completed Projects' },
          { id: 'panels', label: 'Breaker Panels & Distribution' },
          { id: 'residential', label: 'Full Home Wiring & Rewiring' },
          { id: 'lighting', label: 'Commercial & Architectural Lighting' },
          { id: 'solar_backup', label: 'Generator & Solar Backup' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl group transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" /> View Details
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> {project.location}
              </span>
              <span className="text-slate-500">{project.completionDate}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-bold text-base truncate">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-lg">
                  ⚡ Qamar Power Standard Execution
                </span>
              </div>

              {/* Project Details */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white">Project Scope & Execution</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Location:</span>
                    <strong className="text-white">{selectedProject.location}</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Date Completed:</span>
                    <strong className="text-white">{selectedProject.completionDate}</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Quality Audit:</span>
                    <strong className="text-emerald-400">100% Code Passed</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400">Need a similar electrical installation?</span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenBookingModal();
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  <span>Book Similar Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
