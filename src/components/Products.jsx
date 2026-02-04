import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Monitor } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import mathlabFeature from '../assets/mathlab_feature.png';
import interactiveBoardFeature from '../assets/interactive_board_feature.png';
import langueTechFeature from '../assets/about_education.png';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  useGSAP(() => {
    // Section Header Entrance
    gsap.fromTo('.products-header > *',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.products-header',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      }
    );

    // Product Rows Staggered Reveal
    const rows = gsap.utils.toArray('.product-row');
    rows.forEach((row, i) => {
      const content = row.querySelector('.product-content');
      const image = row.querySelector('.product-image-box');

      gsap.fromTo(content,
        { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(image,
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
          },
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out'
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative w-full py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-theme-light-bg dark:bg-[#1F1F1F] transition-colors duration-500"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] dark:bg-brand-orange/5" />
        <div className="absolute bottom-1/4 -left-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[140px] dark:bg-blue-500/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="products-header text-center mb-20 md:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-theme-light-heading dark:text-white leading-tight">
            Learning <span className="text-brand-orange">Ecosystem</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-theme-light-body dark:text-theme-dark-body max-w-2xl mx-auto opacity-70 font-medium leading-relaxed">
            Revolutionizing the way educators teach and students learn through hardware and software synergy.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-24 md:space-y-36">
          
          {/* MathLab Product Row */}
          <div className="product-row grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="product-content order-2 lg:order-1 space-y-5 p-6 md:p-10 rounded-[2rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl border border-brand-orange/10 shadow-2xl transition-all duration-500 hover:border-brand-orange/30 group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-orange/10 text-brand-orange shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-brand-orange tracking-[0.25em] uppercase">Experiential Math</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-theme-light-heading dark:text-white tracking-tight">
                  Math<span className="text-brand-orange">Lab</span>
                </h3>
                <p className="text-base md:text-lg font-medium text-brand-orange/80 italic leading-relaxed">
                  "Learn Math by Doing, Not Just Memorizing"
                </p>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body opacity-80">
                Transform math from abstract to tangible with hands-on experiments and physical models. NCERT-aligned for Classes 6–10, our MathLab reduces math anxiety and builds genuine understanding through activity-based learning.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Visual Logic', 'Hands-on Kits', 'CBSE Aligned'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white dark:bg-brand-dark/50 border border-brand-orange/10 text-[9px] font-bold text-theme-light-heading dark:text-white uppercase tracking-widest shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleNavigate('/products/mathlab')} 
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all duration-500 hover:-translate-y-1"
              >
                <span>Discover MathLab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="product-image-box order-1 lg:order-2 relative group/img cursor-pointer max-w-[600px] mx-auto w-full">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-3xl blur-[60px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-brand-orange/10 shadow-2xl transition-transform duration-700 group-hover/img:scale-[1.03] group-hover/img:border-brand-orange/30">
                <img 
                  src="https://res.cloudinary.com/dweebldig/image/upload/v1770225827/mathlab_m6yknn.jpg" 
                  alt="MathLab Platform" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Interactive Boards Product Row */}
          <div className="product-row grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="product-image-box relative group/img cursor-pointer max-w-[600px] mx-auto w-full">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-[60px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-blue-500/10 shadow-2xl transition-transform duration-700 group-hover/img:scale-[1.03] group-hover/img:border-blue-500/30">
                <img 
                  src="https://res.cloudinary.com/dweebldig/image/upload/v1770226670/interactiveboards_gu6luw.jpg" 
                  alt="Interactive Boards" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                />
              </div>
            </div>

            <div className="product-content space-y-5 p-6 md:p-10 rounded-[2rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl border border-blue-500/10 shadow-2xl transition-all duration-500 hover:border-blue-500/30 group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500 shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-blue-500 tracking-[0.25em] uppercase">Smart Classrooms</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-theme-light-heading dark:text-white tracking-tight">
                  Interactive <span className="text-blue-500">Boards</span>
                </h3>
                <p className="text-base md:text-lg font-medium text-blue-500/80 italic leading-relaxed">
                  "Where Technology Meets Teaching Excellence"
                </p>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body opacity-80">
                Upgrade your classroom with multi-touch, 4K clarity boards that make lessons interactive and engaging. Integrated teaching software enhances student participation and transforms traditional teaching into dynamic learning experiences.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Multi-Touch', '4K Clarity', 'Teaching Suite'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white dark:bg-brand-dark/50 border border-blue-500/10 text-[9px] font-bold text-theme-light-heading dark:text-white uppercase tracking-widest shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleNavigate('/products/interactive-boards')} 
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-1"
              >
                <span>Explore Boards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Langue Tech Product Row */}
          <div className="product-row grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center pb-12">
            <div className="product-content order-2 lg:order-1 space-y-5 p-6 md:p-10 rounded-[2rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl border border-indigo-500/10 shadow-2xl transition-all duration-500 hover:border-indigo-500/30 group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-indigo-500 tracking-[0.25em] uppercase">Global Future</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-theme-light-heading dark:text-white tracking-tight">
                  Langue <span className="text-indigo-500">Tech</span>
                </h3>
                <p className="text-base md:text-lg font-medium text-indigo-500/80 italic leading-relaxed">
                  "Master English. Study Abroad. Achieve Dreams."
                </p>
              </div>

              <p className="text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body opacity-80">
                Complete IELTS/TOEFL preparation plus expert guidance for studying abroad. From college selection to visa assistance, we help you navigate your journey to universities in USA, UK, Canada, and beyond.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['IELTS/TOEFL', 'Expert SOP/Visa', 'Global English'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white dark:bg-brand-dark/50 border border-indigo-500/10 text-[9px] font-bold text-theme-light-heading dark:text-white uppercase tracking-widest shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleNavigate('/products/langue-tech')} 
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500 hover:-translate-y-1"
              >
                <span>Go Global</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="product-image-box order-1 lg:order-2 relative group/img cursor-pointer max-w-[600px] mx-auto w-full">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-[60px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-indigo-500/10 shadow-2xl transition-transform duration-700 group-hover/img:scale-[1.03] group-hover/img:border-indigo-500/30">
                <img 
                  src="https://res.cloudinary.com/dweebldig/image/upload/v1770228242/languetech_hmebzo.png"
                  alt="Langue Tech" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
