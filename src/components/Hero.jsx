import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const taglineRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);

  useGSAP(() => {
    // Set initial states
    gsap.set(bgRef.current, { opacity: 0 });
    gsap.set([taglineRef.current, headline1Ref.current, headline2Ref.current], {
      opacity: 0,
      y: 50,
    });

    // Entrance animation timeline (plays after loading screen)
    const entranceTl = gsap.timeline({ delay: 0.3 });

    // Background fades in first
    entranceTl.to(bgRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });

    // Tagline slides up
    entranceTl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.4');

    // First headline enters with bounce
    entranceTl.to(headline1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1.2)',
    }, '-=0.5');

    // Second headline follows
    entranceTl.to(headline2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1.2)',
    }, '-=0.7');

    // Add glow effect to main headline
    entranceTl.to(headline1Ref.current, {
      textShadow: '0 0 30px rgba(234, 144, 16, 0.5), 0 0 60px rgba(234, 144, 16, 0.25)',
      duration: 0.6,
      ease: 'power1.inOut',
    }, '-=0.3');

    // Animate decorative elements
    entranceTl.fromTo('.hero-circle', 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'back.out(2)'
      },
      '-=1'
    );

    // Animate floating dots
    entranceTl.fromTo('.hero-dot',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'back.out(3)'
      },
      '-=0.5'
    );

  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-white dark:bg-theme-dark-bg transition-colors duration-300"
    >
      {/* Desktop Background - Visually Appealing */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-white dark:from-[#0A0A0A] dark:via-[#0F0F0F] dark:to-[#0A0A0A]" />
        
        {/* Animated Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-orange/20 dark:bg-brand-orange/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-amber-400/25 dark:bg-amber-600/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-300/15 dark:bg-orange-900/10 blur-[80px]" />
        
        {/* Decorative Circles */}
        <div className="absolute top-20 right-32 w-40 h-40 rounded-full border border-brand-orange/20 dark:border-brand-orange/10" />
        <div className="absolute top-28 right-40 w-24 h-24 rounded-full border border-amber-400/30 dark:border-amber-600/15" />
        <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full border border-orange-300/25 dark:border-orange-800/10" />
        <div className="absolute bottom-20 left-32 w-16 h-16 rounded-full bg-brand-orange/10 dark:bg-brand-orange/5" />
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-brand-orange/40 dark:bg-brand-orange/30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-amber-500/50 dark:bg-amber-500/30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-orange-400/30 dark:bg-orange-400/20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #EA9010 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>



      {/* Mobile Background Design (Creative Abstract) */}
      <div className="md:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Gradient overlay for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-amber-50/30 to-yellow-50/40 dark:from-transparent dark:via-transparent dark:to-transparent" />
        
        {/* Gradient overlay for dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-amber-950/15 to-yellow-950/20 dark:opacity-100 opacity-0" />
        
        <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#df7f1e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#df7f1e" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="glowGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#df7f1e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#df7f1e" stopOpacity="0" />
            </radialGradient>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#df7f1e" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Subtle Grid Background */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated Glowing Orbs */}
          <circle cx="350" cy="100" r="120" fill="url(#glowGrad)" style={{ filter: 'blur(40px)' }}>
            <animate attributeName="cy" values="100;120;100" dur="8s" repeatCount="indefinite" />
            <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="700" r="150" fill="url(#glowGrad)" style={{ filter: 'blur(50px)' }}>
            <animate attributeName="cy" values="700;680;700" dur="10s" repeatCount="indefinite" />
            <animate attributeName="r" values="150;170;150" dur="10s" repeatCount="indefinite" />
          </circle>
          
          {/* Abstract Knowledge Curves with animation */}
          <path d="M-50 300 Q 150 100 450 200" stroke="#df7f1e" strokeWidth="1.5" fill="none" opacity="0.2">
            <animate attributeName="d" values="M-50 300 Q 150 100 450 200;M-50 300 Q 150 150 450 200;M-50 300 Q 150 100 450 200" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M-50 350 Q 150 150 450 250" stroke="#df7f1e" strokeWidth="1" fill="none" opacity="0.15">
            <animate attributeName="d" values="M-50 350 Q 150 150 450 250;M-50 350 Q 150 200 450 250;M-50 350 Q 150 150 450 250" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M-50 400 Q 150 200 450 300" stroke="#df7f1e" strokeWidth="0.5" fill="none" opacity="0.1">
            <animate attributeName="d" values="M-50 400 Q 150 200 450 300;M-50 400 Q 150 250 450 300;M-50 400 Q 150 200 450 300" dur="8s" repeatCount="indefinite" />
          </path>
          
          {/* Floating particles */}
          <circle cx="80" cy="200" r="3" fill="#df7f1e" opacity="0.4">
            <animate attributeName="cy" values="200;150;200" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="400" r="2" fill="#df7f1e" opacity="0.3">
            <animate attributeName="cy" values="400;350;400" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="600" r="2.5" fill="#df7f1e" opacity="0.35">
            <animate attributeName="cy" values="600;550;600" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.65;0.35" dur="7s" repeatCount="indefinite" />
          </circle>
          
          {/* Vertical connection lines */}
          <line x1="200" y1="0" x2="200" y2="800" stroke="#df7f1e" strokeWidth="0.5" opacity="0.1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-6 md:px-8 text-center max-w-6xl mx-auto">
        <h2 
          ref={taglineRef}
          className="hero-tag text-black dark:text-white font-bold tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl mb-4 sm:mb-6 md:mb-8"
          style={{ opacity: 0 }}
        >
          GyanSetu – Innovation in Education
        </h2>

        {/* Hindi Heading with Animation */}
        <div className="mt-4 xs:mt-6 sm:mt-12 md:mt-16 lg:mt-20 space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
          <h1
            ref={headline1Ref}
            className="hero-title px-1 xs:px-2 py-2 sm:p-2 md:p-4 font-devanagari text-[4.5rem] xs:text-[5rem] sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold leading-[1.2] sm:leading-[1.2] text-brand-orange dark:text-brand-orange"
            style={{ opacity: 0 }}
          >
            ज्ञानसेतु –
          </h1>

          <h1
            ref={headline2Ref}
            className="hero-title font-devanagari text-[3.5rem] xs:text-[4rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[1.2] sm:leading-[1.2] text-theme-light-heading dark:text-white"
            style={{ opacity: 0 }}
          >
            शिक्षा: नवोन्मेष:
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;