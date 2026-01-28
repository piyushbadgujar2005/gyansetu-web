import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Play, Monitor, Touchpad, Users, Settings, CheckCircle, ArrowLeft, Share2, Wifi, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteractiveBoardsPage = () => {
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

    // Dynamic Background Orbs (Blue/Purple focus)
    gsap.to('.bg-orb-blue', {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      duration: 18,
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
    { id: 'overview', label: 'Overview', icon: Monitor },
    { id: 'features', label: 'Key Tech', icon: Touchpad },
    { id: 'benefits', label: 'Classroom ROI', icon: Users },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-orb-blue absolute top-[5%] left-[-5%] w-[65vw] h-[65vw] bg-blue-600/10 rounded-full blur-[130px]" />
        <div className="bg-orb-blue absolute bottom-[5%] right-[-5%] w-[55vw] h-[55vw] bg-purple-500/10 rounded-full blur-[110px]" />
      </div>

      {/* Ultra-Premium Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-110"
            style={{ transform: 'translateZ(-10px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-brand-dark/70 to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="hero-badge group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-blue-400/40 transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Ecosystem Discovery</span>
          </button>

          <h1 className="hero-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            Interactive <span className="text-blue-500">Boards</span>
          </h1>
          
          <p className="hero-description text-xl md:text-2xl font-medium text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "The future of teaching is multi-touch, <br className="hidden md:block"/> 
            <span className="text-blue-400">dynamic, and boundless.</span>"
          </p>

          <div className="hero-description mt-12 flex justify-center gap-6">
            <div className="flex bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-blue-400 flex items-center justify-center text-[10px] font-bold text-white">
                    {i*10}+
                  </div>
                ))}
              </div>
              <p className="text-blue-100 text-xs font-bold leading-tight">Deployed in <br/> Leading Institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Navigation Tabs */}
      <div className="tab-nav-sticky sticky top-20 z-40 bg-theme-light-bg/80 dark:bg-brand-dark/80 backdrop-blur-2xl border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-12 md:space-x-20 overflow-x-auto no-scrollbar justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-8 flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 ${
                  activeTab === tab.id 
                    ? 'text-blue-400' 
                    : 'text-theme-light-body/40 dark:text-white/30 hover:text-blue-400'
                }`}
              >
                <tab.icon className={`w-4 h-4 transition-transform duration-500 ${activeTab === tab.id ? 'scale-125 rotate-12' : ''}`} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-[0_-4px_20px_rgba(59,130,246,0.8)] rounded-t-full" />
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
                    Teaching at the <span className="text-blue-500">Speed of Sight.</span>
                  </h3>
                  <p className="text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    Our Interactive Boards turn static whiteboards into dynamic, multi-touch canvases. Teachers can write, draw, play videos, and browse the web instantly, keeping students engaged and lessons flowing smoothly.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-blue-500/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-blue-500 uppercase tracking-widest">Digital Fluency</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">Prepares students for a digital world by integrating technology naturally into everyday lessons.</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-purple-500/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-purple-500 uppercase tracking-widest">Seamless Flow</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">Works instantly with your existing PDFs, PPTs, and web-based educational apps without lag.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-10 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    <span>Request Full Demo</span>
                  </button>
                </div>
              </div>
              
              {/* Cinematic Video Experience */}
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(30,58,138,0.4)] aspect-video border border-blue-500/20">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-40" />
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                   <div className="w-24 h-24 rounded-full bg-blue-600/90 flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 transition-transform cursor-pointer">
                     <Play className="w-10 h-10 text-white fill-current ml-2" />
                   </div>
                 </div>
                 <div className="absolute bottom-10 left-10 z-20">
                   <p className="text-white text-xl font-bold">Smart Classroom Evolution</p>
                 </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Touchpad, title: "Multi-Touch", desc: "20-point touch technology allows multiple students to interact simultaneously.", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: Monitor, title: "4K UHD Display", desc: "Crystal clear visuals from any angle with anti-glare technology.", color: "text-purple-500", bg: "bg-purple-500/10" },
                { icon: Wifi, title: "Wireless Casting", desc: "Cast screens from student tablets or laptops instantly via 5G WiFi.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
                { icon: Share2, title: "Instant Sharing", desc: "Save and share class notes via QR code or email with one click.", color: "text-emerald-500", bg: "bg-emerald-500/10" }
              ].map((feature, idx) => (
                <div key={idx} className="group p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                  <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:-rotate-12`}>
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
                { title: "Engagement Boost", desc: "Interactive lessons keep students focused and participating naturally.", icon: CheckCircle, color: "text-blue-500" },
                { title: "Teacher Efficiency", desc: "Access all your teaching tools and cloud resources in one streamlined place.", icon: CheckCircle, color: "text-purple-500" },
                { title: "Visual Learning", desc: "Bring complex subjects to life with videos, 3D models, and animations.", icon: CheckCircle, color: "text-cyan-500" },
                { title: "Future Ready", desc: "Equip students with the digital skills they need for the modern career landscape.", icon: CheckCircle, color: "text-emerald-500" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-8 p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-blue-500/10 shadow-xl hover:border-blue-500/30 transition-all duration-500">
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

export default InteractiveBoardsPage;
