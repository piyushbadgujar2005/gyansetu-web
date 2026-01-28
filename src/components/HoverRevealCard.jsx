import React, { useState } from 'react';

/**
 * HoverRevealCard Component - Visibility Optimized (v10)
 * 
 * Standardized, CSS-driven reveal card. 
 * Eliminates GSAP conflicts to ensure the "full description" is never cut down.
 */
const HoverRevealCard = ({ title, description, image, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      tabIndex={0}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="group relative h-full w-full min-h-[480px] overflow-hidden rounded-[2.5rem] bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] focus-within:ring-2 focus-within:ring-brand-orange outline-none cursor-pointer motion-safe:transition-transform"
    >
      {/* Background Image Layer */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className={`h-full w-full object-cover transition-all duration-700 ${isActive ? 'scale-110 blur-[8px] brightness-[0.4]' : 'scale-100 blur-0 brightness-[1]'}`}
          />
          {/* Base Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />
        </div>
      )}

      {/* Primary Info (Always Visible when not active) */}
      <div className={`absolute inset-x-0 bottom-0 z-10 p-8 transition-all duration-500 ${isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="flex flex-col items-center text-center">
          {icon && <div className="mb-4 text-brand-orange scale-125">{icon}</div>}
          <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Reveal Layer: Optimized for 100% Description Visibility */}
      <div 
        className={`absolute inset-0 z-20 flex flex-col items-center p-6 md:p-8 transition-all duration-500 ease-out bg-black/60 backdrop-blur-2xl border-t border-white/10 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        {/* Decorative Handle */}
        <div className="w-10 h-0.5 bg-brand-orange/60 rounded-full mb-6 shrink-0" />
        
        {/* Title Area - Compact */}
        <div className="text-center mb-6 shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
            {title}
          </h3>
          <div className="h-0.5 w-12 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Bio Content Area (The core request: FULL DESCRIPTION) */}
        <div className="flex-grow w-full overflow-y-auto no-scrollbar pb-6 space-y-6">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-white font-medium italic whitespace-pre-wrap px-2">
            "{description}"
          </p>
          
          {/* Professional Status Tags */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-[9px] font-bold uppercase tracking-widest">
              GyanSetu Leadership
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[9px] font-bold uppercase tracking-widest">
              Education Visionary
            </span>
          </div>
        </div>

        {/* CTA Button - Compact */}
        <button className="mt-auto px-8 py-2.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-orange transition-all duration-300 shadow-lg shrink-0">
          VISIT PROFILE
        </button>
      </div>

      {/* Reduced Motion Support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-all, .duration-500, .group {
            transition: none !important;
            transform: none !important;
          }
          .opacity-0 {
            opacity: 1 !important;
          }
          .translate-y-full {
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HoverRevealCard;
