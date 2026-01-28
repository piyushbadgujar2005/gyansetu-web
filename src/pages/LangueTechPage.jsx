import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import langueTechHero from '../assets/about_education.png';
import { 
  Play, 
  Globe, 
  Languages, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Compass,
  FileText,
  Users
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LangueTechPage = () => {
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

    // Dynamic Background Orbs (Indigo/Purple focus)
    gsap.to('.bg-orb-indigo', {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      duration: 20,
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
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'services', label: 'Key Services', icon: Compass },
    { id: 'trust', label: 'Trust & Impact', icon: Award },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-orb-indigo absolute top-[5%] right-[-5%] w-[65vw] h-[65vw] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="bg-orb-indigo absolute bottom-[5%] left-[-5%] w-[55vw] h-[55vw] bg-purple-500/10 rounded-full blur-[110px]" />
      </div>

      {/* Global Future Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: `url(${langueTechHero})`,
              transform: 'translateZ(-10px)' 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-brand-dark/70 to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="hero-badge group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-indigo-400/40 transition-all mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Ecosystem Discovery</span>
          </button>

          <h1 className="hero-title text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            Langue <span className="text-indigo-400">Tech</span>
          </h1>
          
          <p className="hero-description text-xl md:text-2xl font-medium text-indigo-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Your Global Future, <br className="hidden md:block"/> 
            <span className="text-indigo-400">Simplified & Personalised.</span>"
          </p>

          <div className="hero-description mt-12 flex justify-center gap-6">
            <div className="flex bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-indigo-500 flex items-center justify-center text-[8px] font-bold text-white">
                    {i*100}+
                  </div>
                ))}
              </div>
              <p className="text-indigo-100 text-xs font-bold leading-tight text-left">400+ Abroad Admissions <br/> 8,000+ Students Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Navigation Tabs */}
      <div className="tab-nav-sticky sticky top-20 z-40 bg-theme-light-bg/80 dark:bg-brand-dark/80 backdrop-blur-2xl border-y border-indigo-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-12 md:space-x-20 overflow-x-auto no-scrollbar justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-8 flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 ${
                  activeTab === tab.id 
                    ? 'text-indigo-400' 
                    : 'text-theme-light-body/40 dark:text-white/30 hover:text-indigo-400'
                }`}
              >
                <tab.icon className={`w-4 h-4 transition-transform duration-500 ${activeTab === tab.id ? 'scale-125 rotate-12' : ''}`} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_-4px_20px_rgba(99,102,241,0.8)] rounded-t-full" />
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
                    Beyond <span className="text-indigo-500">Boundaries.</span>
                  </h3>
                  <p className="text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    Langue Tech combines world-class English training with expert abroad education consultation. We remove the fear and confusion of global admission, providing a single, trusted pathway to your international career.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-indigo-500/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-indigo-500 uppercase tracking-widest">Single Pathway</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">From English proficiency to visa approval—a total end-to-end guidance system for every student.</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-purple-500/20 shadow-xl">
                    <h4 className="text-lg font-bold mb-3 text-purple-500 uppercase tracking-widest">Affordable Excellence</h4>
                    <p className="text-sm text-theme-light-body dark:text-white/60 leading-relaxed font-medium">Honest guidance without hidden charges, making global education accessible beyond metro cities.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-10 py-5 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
                    <Compass className="w-5 h-5" />
                    <span>Explore Your Pathway</span>
                  </button>
                </div>
              </div>
              
              {/* Cinematic Visual Experience */}
              <div className="relative group rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(79,70,229,0.4)] aspect-video border border-indigo-500/20">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-40" />
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                   <div className="w-24 h-24 rounded-full bg-indigo-600/90 flex items-center justify-center shadow-2xl shadow-indigo-500/50 hover:scale-110 transition-transform cursor-pointer">
                     <Play className="w-10 h-10 text-white fill-current ml-2" />
                   </div>
                 </div>
                 <div className="absolute bottom-10 left-10 z-20">
                   <p className="text-white text-xl font-bold">Global Guidance Journey</p>
                 </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Languages, 
                  title: "IELTS & TOEFL Prep", 
                  desc: "Exam-focused training with real mock tests and target band score strategies from certified trainers.",
                  items: ["Certified Trainer (15+ Years)", "Real Exam Simulator", "Writing & Speaking Mastery"],
                  color: "text-indigo-500", 
                  bg: "bg-indigo-500/10" 
                },
                { 
                  icon: Sparkles, 
                  title: "English Fluency", 
                  desc: "Build massive confidence for interviews and professional environments through spoken English practice.",
                  items: ["Interview & GD Practice", "Pronunciation Workshops", "Advanced Vocabulary"],
                  color: "text-purple-500", 
                  bg: "bg-purple-500/10" 
                },
                { 
                  icon: GraduationCap, 
                  title: "Abroad Consultation", 
                  desc: "Complete support for University selection, SOP/LOR drafting, and visa assistance for top global destinations.",
                  items: ["USA, UK, Canada, Australia", "Scholarship Guidance", "Step-by-Step Visa Support"],
                  color: "text-cyan-500", 
                  bg: "bg-cyan-500/10" 
                }
              ].map((service, idx) => (
                <div key={idx} className="group p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 shadow-xl">
                  <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-theme-light-heading dark:text-white tracking-tight">{service.title}</h3>
                  <p className="text-theme-light-body dark:text-white/60 leading-relaxed font-medium mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-theme-light-heading dark:text-white/80">
                        <CheckCircle className={`w-4 h-4 ${service.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Trust Tab */}
          {activeTab === 'trust' && (
            <div className="grid lg:grid-cols-2 gap-12">
               <div className="p-10 rounded-[3rem] bg-indigo-600 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-[-10%] right-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <GraduationCap className="w-64 h-64" />
                  </div>
                  <div className="relative z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-widest">
                      Legendary Mentorship
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight">Dr. Deepak K. Patil</h3>
                    <p className="text-xl font-medium text-indigo-100 opacity-90 leading-relaxed italic">
                      "PhD with extensive USA experience, committed to guiding the next generation of global leaders."
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                       <div>
                         <p className="text-4xl font-black mb-1">8k+</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Students Trained</p>
                       </div>
                       <div>
                         <p className="text-4xl font-black mb-1">400+</p>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Admissions Abroad</p>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-6">
                 {[
                   { icon: Users, title: "Student-First Approach", desc: "Available both Online & Offline (Jalgaon center) for personal guidance.", color: "text-blue-500", bg: "bg-blue-500/10" },
                   { icon: FileText, title: "Application Mastery", desc: "Expert handling of SOPs, LORs, and complex visa processes.", color: "text-purple-500", bg: "bg-purple-500/10" }
                 ].map((box, idx) => (
                   <div key={idx} className="flex items-center gap-8 p-10 rounded-[3rem] bg-white dark:bg-white/[0.03] border border-indigo-500/10 shadow-xl">
                     <div className={`w-16 h-16 ${box.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                       <box.icon className={`w-8 h-8 ${box.color}`} />
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-2xl font-bold text-theme-light-heading dark:text-white tracking-tight">{box.title}</h4>
                       <p className="text-theme-light-body dark:text-white/60 font-medium leading-relaxed">{box.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default LangueTechPage;
