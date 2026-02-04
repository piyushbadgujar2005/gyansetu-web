import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Play, Box, Puzzle, Brain, BookOpen, CheckCircle, ArrowLeft, Download, Sparkles, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MathLabPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');

  useGSAP(() => {
    // ENTRANCE ANIMATIONS
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.5 })
      .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");

    // Scroll Reveals
    gsap.fromTo('.tab-nav-sticky', 
      { opacity: 0 },
      { scrollTrigger: { trigger: '.tab-nav-sticky', start: 'top 90%' }, opacity: 1, duration: 1 }
    );

    // Dynamic Background Orbs
    gsap.to('.bg-orb', {
      x: 'random(-40, 40)',
      y: 'random(-40, 40)',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  // Tab Content Entrance
  useGSAP(() => {
    gsap.fromTo('.active-tab-content > *',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out', clearProps: "all" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'features', label: 'Innovation', icon: Sparkles },
    { id: 'benefits', label: 'Impact', icon: Brain },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-orb absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="bg-orb absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Ultra-Premium Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden z-10">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-110"
            style={{ transform: 'translateZ(-10px)' }} // CSS Parallax hint
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="hero-badge group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-brand-orange/40 transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Ecosystem Discovery</span>
          </button>

          <h1 className="hero-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            Math<span className="text-brand-orange">Lab</span>
          </h1>
          
          <p className="hero-description text-xl md:text-2xl font-medium text-white/80 max-w-3xl mx-auto leading-relaxed italic">
            "Transforming abstract equations into <br className="hidden md:block"/> 
            <span className="text-brand-orange">tangible understanding.</span>"
          </p>

          <div className="hero-description mt-12 flex justify-center gap-6">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop'
              ].map((img, i) => (
                <div key={i} className="w-12 h-12 rounded-lg border-2 border-white/20 bg-white overflow-hidden shadow-lg">
                  <img src={img} alt={`School ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Trusted by 500+ Schools</p>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-brand-orange" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Navigation Tabs */}
      <div className="tab-nav-sticky sticky top-20 z-40 bg-theme-light-bg/80 dark:bg-brand-dark/80 backdrop-blur-2xl border-y border-brand-orange/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-12 md:space-x-20 overflow-x-auto no-scrollbar justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-8 flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 ${
                  activeTab === tab.id 
                    ? 'text-brand-orange' 
                    : 'text-theme-light-body/40 dark:text-white/30 hover:text-brand-orange'
                }`}
              >
                <tab.icon className={`w-4 h-4 transition-transform duration-500 ${activeTab === tab.id ? 'scale-125 rotate-12' : ''}`} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-orange shadow-[0_-4px_20px_rgba(234,144,16,0.8)] rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Surface */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="active-tab-content min-h-[50vh]">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* Main Content - Left Side */}
              <div className="lg:col-span-3 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-5xl md:text-6xl font-black text-theme-light-heading dark:text-white tracking-tight leading-tight">
                    Transform Math into a <span className="text-brand-orange">Hands-On Experience</span>
                  </h3>
                  <p className="text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    MathLab is a physical, activity-based mathematics learning system that helps students understand concepts through visualization, experimentation, and real-world interaction.
                  </p>
                  <p className="text-lg leading-relaxed text-theme-light-body dark:text-white/60">
                    Instead of learning math only through textbooks and formulas, students engage with tangible tools that make abstract ideas in algebra, geometry, mensuration, number systems, and data handling become visible, touchable, and intuitive.
                  </p>
                </div>

                {/* What's Included Section */}
                <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-orange/5 to-amber-500/5 dark:from-brand-orange/10 dark:to-amber-500/10 border border-brand-orange/20">
                  <h4 className="text-2xl font-bold mb-6 text-brand-orange flex items-center gap-3">
                    <Box className="w-6 h-6" />
                    What's Included
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Physical models for 2D/3D geometry and spatial reasoning</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Interactive tools for algebra, graphs, and patterns</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Activity kits for guided classroom experiments</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Teacher manuals with curriculum-aligned activities</span>
                    </div>
                  </div>
                </div>

                {/* Demo Video Section */}
                <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-video border-2 border-brand-orange/20">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/N656hUmNuRU?si=YA2UTQcyPAC7pOC5" 
                    title="MathLab Product Demo - YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-5 bg-brand-orange text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                  <button className="px-10 py-5 bg-white dark:bg-white/5 border-2 border-brand-orange text-brand-orange font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-brand-orange hover:text-white transition-all">
                    Request Demo
                  </button>
                </div>
              </div>

              {/* Sidebar - Right Side */}
              <div className="lg:col-span-2 space-y-6">
                {/* Designed For Card */}
                <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-blue-500/20 shadow-2xl sticky top-28">
                  <h4 className="text-2xl font-bold mb-8 text-blue-500 flex items-center gap-3">
                    <Brain className="w-6 h-6" />
                    Designed For
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-black text-brand-orange">6-10</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Classes 6 to 10</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Complete curriculum coverage for middle and high school</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">All Boards</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">CBSE, ICSE, and State Board aligned</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Any Space</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Classrooms, math labs, or activity rooms</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-8 border-t border-blue-500/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-black text-brand-orange mb-1">500+</div>
                        <div className="text-xs text-theme-light-body dark:text-white/60 uppercase tracking-wider">Schools Trust Us</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-blue-500 mb-1">75%</div>
                        <div className="text-xs text-theme-light-body dark:text-white/60 uppercase tracking-wider">Higher Retention</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Box, title: "Geometry Tools", desc: "Physical models for 2D/3D shapes, volume, and spatial reasoning.", color: "text-brand-orange", bg: "bg-brand-orange/10" },
                { icon: Puzzle, title: "Activity Kits", desc: "Structured, gamified activities that encourage exploration.", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: Brain, title: "Logic Builders", desc: "Tools to visualize abstract theorems and algebraic patterns.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { icon: BookOpen, title: "Curriculum Map", desc: "Seamlessly aligned with CBSE, ICSE, and State Board syllabi.", color: "text-purple-500", bg: "bg-purple-500/10" }
              ].map((feature, idx) => (
                <div key={idx} className="group p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(234,144,16,0.1)]">
                  <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-theme-light-heading dark:text-white tracking-tight">{feature.title}</h3>
                  <p className="text-theme-light-body dark:text-white/60 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                { title: "Conceptual Clarity", desc: "Builds a strong foundation for future learning by visualizing the 'why' behind the math.", icon: CheckCircle, color: "text-brand-orange" },
                { title: "Student Engagement", desc: "Makes math class the highlight of the day through active participation.", icon: CheckCircle, color: "text-blue-500" },
                { title: "Anxiety Reduction", desc: "Transforms fear of numbers into curiosity and confidence.", icon: CheckCircle, color: "text-emerald-500" },
                { title: "Retention Mastery", desc: "Active learning leads to 75% higher retention rates compared to lectures.", icon: CheckCircle, color: "text-purple-500" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-8 p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-brand-orange/10 shadow-xl hover:border-brand-orange/30 transition-all duration-500">
                  <div className="mt-1 flex-shrink-0">
                    <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-theme-light-heading dark:text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-lg text-theme-light-body dark:text-white/60 font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MathLabPage;
