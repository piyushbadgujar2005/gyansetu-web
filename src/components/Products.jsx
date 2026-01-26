import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());

    gsap.fromTo('.eco-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.eco-header', start: 'top 85%' } });
    gsap.fromTo('.eco-underline', { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.eco-header', start: 'top 85%' } });

    gsap.fromTo('.eco-block-1 .eco-content', { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.eco-block-1', start: 'top 80%' } });
    gsap.fromTo('.eco-block-1 .eco-visual', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.eco-block-1', start: 'top 80%' } });

    gsap.fromTo('.eco-block-2 .eco-visual', { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.eco-block-2', start: 'top 80%' } });
    gsap.fromTo('.eco-block-2 .eco-content', { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.eco-block-2', start: 'top 80%' } });
  }, { scope: containerRef });

  const go = (path) => {
    gsap.to('body', {
      opacity: 0.9,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        navigate(path);
        window.scrollTo(0, 0);
        gsap.to('body', { opacity: 1, duration: 0.3 });
      }
    });
  };

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative w-full py-16 md:py-24 lg:py-32 bg-[#F5F1EA] dark:bg-[#1F1F1F] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="eco-header text-center mb-10 sm:mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Our Learning Ecosystem
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-theme-light-body dark:text-theme-dark-body px-2">
            Powerful tools designed to transform learning and teaching
          </p>
          <div className="eco-underline mt-4 sm:mt-6 mx-auto h-[3px] w-20 sm:w-24 md:w-32 bg-[var(--bridge-gold)] rounded-full" />
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32">
          <div className="eco-block-1 group grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="eco-content px-2 sm:px-0">
              <div className="text-[3vw] font-bold text-theme-light-heading dark:text-white">Math<span className="text-[#EA9010]">Lab</span></div>
              <div className="mt-2 text-sm sm:text-base md:text-lg text-theme-light-body dark:text-theme-dark-body">Math is not memorization. It's understanding.</div>
              <p className="mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body">
                MathLab helps students visualize concepts, practice hands-on learning, and build strong foundations through experiential mathematics.
              </p>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs">
                <span className="text-theme-light-heading dark:text-white">Concept visualization</span>
                <span className="text-theme-light-heading dark:text-white">Hands-on practice</span>
                <span className="text-theme-light-heading dark:text-white">Progress tracking</span>
              </div>
              <button onClick={() => go('/products/mathlab')} className="mt-4 sm:mt-6 inline-flex items-center text-theme-light-heading dark:text-white font-semibold text-xs sm:text-sm">
                <span className="relative">
                  Explore MathLab →
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--bridge-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                </span>
              </button>
            </div>

            <div className="eco-visual mt-4 sm:mt-6 lg:mt-0 order-last lg:order-none">
              <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-[var(--bridge-gold)]/20 shadow-xl">
                <img 
                  src="/mathlab.png" 
                  alt="MathLab Product" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="eco-block-2 group grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="eco-visual order-last lg:order-none">
              <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-[var(--bridge-gold)]/20 shadow-xl">
                <img 
                  src="/interactive-boards.png" 
                  alt="Interactive Boards Product" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="eco-content px-2 sm:px-0">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-light-heading dark:text-white">Interactive <span className="text-[#EA9010]">Boards</span></div>
              <div className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-theme-light-body dark:text-theme-dark-body">Turn classrooms into smart learning spaces</div>
              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-theme-light-body dark:text-theme-dark-body">
                Interactive Boards combine touch, multimedia, and smart tools to enhance teacher delivery and student engagement.
              </p>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <span className="text-theme-light-heading dark:text-white">Touch interaction</span>
                <span className="text-theme-light-heading dark:text-white">Multimedia learning</span>
                <span className="text-theme-light-heading dark:text-white">Smart teaching tools</span>
              </div>
              <button onClick={() => go('/products/interactive-boards')} className="mt-6 sm:mt-8 inline-flex items-center text-theme-light-heading dark:text-white font-semibold text-sm sm:text-base">
                <span className="relative">
                  Explore Interactive Boards →
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--bridge-gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
