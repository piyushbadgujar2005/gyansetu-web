import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import loadingBg from '../assets/loading-bg.jpg';

const LoadingPage = ({ onComplete }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Initial states
    gsap.set(imageRef.current, { scale: 1.2, filter: "brightness(0.3)" });
    gsap.set(glowRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(titleRef.current, { opacity: 0, y: 40, scale: 0.95 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
    gsap.set(taglineRef.current, { opacity: 0, y: 20 });
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });

    // Phase 1: Image Ken Burns effect with smooth reveal
    tl.to(imageRef.current, {
      scale: 1,
      filter: "brightness(1)",
      duration: 2.5,
      ease: "power2.out"
    });

    // Phase 2: Glow effect pulses in
    tl.to(glowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=2");

    // Phase 3: Main title reveals with scale
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=1.5");

    // Phase 4: Subtitle appears
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    // Phase 5: Tagline fades in
    tl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

    // Phase 6: Progress bar fills
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1,
      ease: "power1.inOut"
    }, "-=0.6");

    // Phase 7: Glow pulses
    tl.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.1,
      duration: 0.4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1
    });

    // Phase 8: Hold before exit
    tl.to({}, { duration: 0.3 });

    // Final trigger for app to start Hero entrance while curtain lifts
    tl.add(() => {
      onComplete();
    });

    // Elegant curtain exit
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power3.inOut",
    });

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          ref={imageRef}
          src={loadingBg} 
          alt="" 
          className="w-full h-full object-cover will-change-transform"
        />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-white/60" />
      </div>

      {/* Animated glow behind content */}
      <div 
        ref={glowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-400/30 blur-[80px] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="font-devanagari text-5xl sm:text-6xl md:text-7xl text-orange-500 font-bold text-brand-orange drop-shadow-lg mb-2"
        >
          ज्ञानसेतु
        </h1>

        {/* Subtitle */}
        <h2 
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-3"
        >
          The Bridge to Knowledge
        </h2>

        {/* Tagline */}
        <p 
          ref={taglineRef}
          className="text-sm sm:text-base tracking-[0.2em] uppercase text-gray-500"
        >
          Innovation in Education
        </p>

        {/* Progress Bar */}
        <div className="mt-10 w-56 sm:w-72 h-1.5 bg-gray-200/60 rounded-full overflow-hidden shadow-inner">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-amber-400 via-brand-orange to-amber-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

