import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Play, Box, Puzzle, Brain, BookOpen, CheckCircle, ArrowLeft, Download, Sparkles } from 'lucide-react';

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
            Math<span className="text-brand-orange animate-pulse">Lab</span>
          </h1>
          
          <p className="hero-description text-xl md:text-2xl font-medium text-white/80 max-w-3xl mx-auto leading-relaxed italic">
            "Transforming abstract equations into <br className="hidden md:block"/> 
            <span className="text-brand-orange">tangible understanding.</span>"
          </p>

          <div className="hero-description mt-12 flex justify-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-gray-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
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
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-theme-light-heading dark:text-white tracking-tight">
                    Beyond <span className="text-brand-orange">Calculations.</span>
                  </h3>
                  <p className="text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    MathLab is a comprehensive hands-on learning solution designed to bridge the gap between abstract mathematical concepts and real-world understanding. It provides a physical environment where students can touch, feel, and experiment with math.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-brand-orange/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-brand-orange uppercase tracking-widest">Why MathLab?</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">To move beyond rote memorization and foster deep conceptual clarity through "learning by doing".</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-blue-500/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-500 uppercase tracking-widest">Target Core</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">K-12 schools, progressive educators, and students who want to master math logic through active discovery.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-10 py-5 bg-brand-orange text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                  <button className="px-10 py-5 bg-white dark:bg-white/5 border border-brand-orange/20 text-brand-orange font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-orange/10 transition-colors">
                    Request Demo
                  </button>
                </div>
              </div>
              
              {/* Cinematic Video Experience */}
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] aspect-video border border-white/10">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-40" />
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                   <div className="w-24 h-24 rounded-full bg-brand-orange/90 flex items-center justify-center shadow-2xl shadow-brand-orange/50 hover:scale-110 transition-transform cursor-pointer">
                     <Play className="w-10 h-10 text-white fill-current ml-2" />
                   </div>
                 </div>
                 <div className="absolute bottom-10 left-10 z-20">
                   <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-3">
                     Experience Gyansetu
                   </div>
                   <p className="text-white text-xl font-bold">MathLab Learning Journey</p>
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
