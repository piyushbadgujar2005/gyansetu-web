import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ isVisible }) => {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    if (!isVisible) return;

    // Set initial states for a "Reveal" effect
    gsap.set([taglineRef.current, ctaRef.current], {
      opacity: 0,
      y: 30,
    });

    // Helper to split text into words for a staggered "Floating" feel
    const renderSplitWords = (el) => {
      if (!el) return [];
      const text = el.innerText;
      el.innerHTML = '';
      text.split(' ').forEach(word => {
        if (word.trim() === '') return;
        const span = document.createElement('span');
        span.className = 'inline-block whitespace-pre hover:text-brand-orange transition-colors duration-300 transform-gpu cursor-default';
        span.innerText = word + ' ';
        el.appendChild(span);
      });
      return el.querySelectorAll('span');
    };

    const h1Words = renderSplitWords(headline1Ref.current);
    const h2Words = renderSplitWords(headline2Ref.current);

    gsap.set([h1Words, h2Words], {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      scale: 1.1
    });

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to(h1Words, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    }, '-=0.4')
    .to(h2Words, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      duration: 1,
      stagger: 0.08,
      ease: 'power4.out',
    }, '-=0.8')
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.4');

    // Continuous "Floating" Wave for headlines
    gsap.to([h1Words, h2Words], {
      y: '-=10',
      duration: 3,
      ease: 'sine.inOut',
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true
      }
    });

    // Mouse Parallax Effect for Background Orbs
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 50;
      const yPos = (clientY / window.innerHeight - 0.5) * 50;

      gsap.to('.hero-orb', {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: 'power2.out',
        stagger: 0.1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: heroRef, dependencies: [isVisible] });

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 dark:from-[#0A0A0A] dark:via-[#1A1A1A] dark:to-[#0F0F0F] transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Advanced Gradient Orbs with Parallax class */}
        <div className="hero-orb float-slow absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-br from-brand-orange/25 via-amber-500/15 to-transparent rounded-full blur-[120px] mix-blend-screen dark:mix-blend-plus-lighter opacity-60" />
        <div className="hero-orb float-fast absolute bottom-[-10%] left-[-5%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] bg-gradient-to-tr from-amber-400/20 via-orange-300/10 to-transparent rounded-full blur-[140px] mix-blend-screen dark:mix-blend-plus-lighter opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vh] bg-[radial-gradient(circle,rgba(234,144,16,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(234,144,16,0.12)_0%,transparent_70%)]" />
        
        {/* Decorative Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.25" className="text-brand-orange/30"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Sparkles */}
        <div className="float-slow absolute top-1/4 left-1/4 opacity-40">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-brand-orange" strokeWidth={1.2} />
        </div>
        <div className="float-fast absolute top-1/3 right-1/3 opacity-30">
          <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-amber-500" strokeWidth={1.2} />
        </div>
        <div className="float-slow absolute bottom-1/3 left-1/3 opacity-35" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-orange-400" strokeWidth={1.2} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Tagline */}
          <div
            ref={taglineRef}
            className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-brand-orange/10 via-amber-500/10 to-brand-orange/10 dark:from-brand-orange/20 dark:via-amber-500/20 dark:to-brand-orange/20 rounded-full border border-brand-orange/20 backdrop-blur-sm"
            style={{ opacity: 0 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange animate-pulse" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase text-brand-orange">
              GyanSetu – Innovation in Education
            </span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Sanskrit Headline - ज्ञानसेतु (Golden) */}
            <h1
              ref={headline1Ref}
              className="font-kalam text-[12vw] sm:text-[10vw] font-bold leading-tight text-brand-orange dark:text-brand-orange dark:drop-shadow-[0_0_40px_rgba(234,144,16,0.4)] transition-all duration-500"
            >
              ज्ञानसेतु –
            </h1>

            {/* Sanskrit Tagline - शिक्षायाः नवोन्मेषः (Theme Adaptive) */}
            <h2
              ref={headline2Ref}
              className="font-kalam text-[8vw] sm:text-[7vw] font-bold leading-tight text-theme-light-heading dark:text-white drop-shadow-lg"
            >
              शिक्षायाः नवोन्मेषः
            </h2>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 pt-6 sm:pt-8 md:pt-10"
            style={{ opacity: 0 }}
          >
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange/90 hover:to-amber-500/90 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Explore Our Products</span>
              <Sparkles className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-white/80 dark:bg-theme-dark-bg/80 backdrop-blur-sm hover:bg-white dark:hover:bg-theme-dark-bg border-2 border-brand-orange/30 hover:border-brand-orange/50 text-theme-light-heading dark:text-white font-bold text-sm sm:text-base md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                scrollToNext();
              }}
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 w-full flex justify-center">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-theme-light-body dark:text-theme-dark-body hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 animate-bounce cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <span className="text-xs sm:text-sm font-medium opacity-70 group-hover:opacity-100 whitespace-nowrap">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;