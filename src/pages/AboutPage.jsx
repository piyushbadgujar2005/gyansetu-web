import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, Target, Lightbulb, Award, Users, Rocket, ShieldCheck } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import HoverRevealCard from '../components/HoverRevealCard';

const AboutPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const teamMembers = [
    {
      name: "Adv. Abhay A. Kulkarni",
      designation: "Director",
      qualification: "B.Sc., LL.M., MBA (H.R.), C.P.C.T.",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1751826586/Director_image_j167br.jpg",
      description: "Director, Gyansetu Global Growth Pvt. Ltd. & Waves Classes, Jalgaon | Trustee, Shikshan Prasarak Mandal | Chartered Secretary, Rotary Club of Jalgaon Green City"
    },
    {
      name: "Er. Sagar M. Patil",
      designation: "Director",
      qualification: "B.Tech (Information Technology), VESIT (Mumbai)",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421070/sagar_sir_ywruow.jpg",
      description: "Founder & Director at Spectrum Classes, Educator at Vision Classes, and Private Home Tutor in Navi Mumbai"
    },
    {
      name: "Er. Pushpendra Singh Rathore",
      designation: "Director",
      qualification: "B.Tech (Mechanical Engineering), KNIT",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421600/sir_zjfntp.jpg",
      description: "Engineer & Educator with 12+ years of experience, teaching Physics, Mathematics, and Logical Reasoning for IIT-JEE, NEET, CAT, Banking, and SSC aspirants."
    },
    {
      name: "Abhijit B. Patil",
      designation: "Director",
      qualification: "M.A. in Mass Communication, B.A. (Sociology)",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769446615/e5ab2613-d6a3-420e-b316-e35ad4e4f56c_tswzoz.jpg",
      description: "Sub-Editor & Reporter at Lokmat since 2011, former Video Journalist at IBN Lokmat, LAADLI Media Award (UNFPA) winner, with experience in news coverage, camerawork, and social awareness initiatives"
    }
  ];

  useGSAP(() => {
    // ENTRANCE RESTORATION - 100% PRODUCTION VISIBILITY
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    tl.fromTo('.header-content', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, clearProps: "all" }
    )
    .fromTo('.mission-vision-card', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, clearProps: "all" }, 
      "-=0.5"
    );

    // Safety ScrollTriggers - MOBILE OPTIMIZED
    gsap.utils.toArray('.team-card-trigger').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          clearProps: "all"
        }
      );
    });

    gsap.utils.toArray('.value-card').forEach((card, i) => {
      gsap.fromTo(card,
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: i * 0.05,
          clearProps: "all"
        }
      );
    });

    // Background orbs - subtle flow
    gsap.to('.bg-orb', {
      x: 'random(-30, 30)',
      y: 'random(-30, 30)',
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-theme-dark-bg transition-colors duration-700 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-orb absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-brand-orange/10 rounded-full blur-[140px]" />
        <div className="bg-orb absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 transition-colors duration-300">
          <button
            onClick={() => navigate('/')}
            className="header-content group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-brand-orange/20 text-theme-light-heading dark:text-theme-dark-heading hover:text-brand-orange dark:hover:text-brand-orange transition-all mb-12 shadow-lg shadow-brand-orange/5"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase">Return to Knowledge</span>
          </button>
          
          <div className="header-content max-w-5xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-theme-light-heading dark:text-white leading-[0.9] mb-10 tracking-tighter">
              Legacy in <br />
              <span className="text-brand-orange">Innovation.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-theme-light-body dark:text-theme-dark-body leading-relaxed max-w-3xl opacity-90 font-medium">
              Bridging traditional educational wisdom with modern technology to empower the next generation of global learners.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative py-24 md:py-32 bg-white/40 dark:bg-white/[0.02] border-y border-brand-orange/10 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="mission-vision-card group p-10 rounded-[3.5rem] bg-white dark:bg-theme-dark-card border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(234,144,16,0.1)]">
              <div className="w-20 h-20 bg-brand-orange/10 rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Target className="w-10 h-10 text-brand-orange" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-theme-light-heading dark:text-white mb-6">Our Mission</h2>
              <p className="text-xl text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-90 font-medium">
                To bridge traditional educational wisdom with modern technology by building intuitive tools that empower both students and educators to achieve meaningful learning outcomes.
              </p>
            </div>
            <div className="mission-vision-card group p-10 rounded-[3.5rem] bg-white dark:bg-theme-dark-card border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)]">
              <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Lightbulb className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-theme-light-heading dark:text-white mb-6">Our Vision</h2>
              <p className="text-xl text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-90 font-medium">
                To create a learning ecosystem where curiosity leads, understanding follows, and education becomes meaningful for every student across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Showcase */}
      <div className="relative py-28 md:py-40 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="header-content text-center mb-24 md:mb-36">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-theme-light-heading dark:text-white mb-10 tracking-tighter">
              Leadership <span className="text-brand-orange">Visionaries</span>
            </h2>
            <p className="text-xl md:text-2xl text-theme-light-body dark:text-theme-dark-body max-w-3xl mx-auto opacity-70 font-medium">
              The passionate educators committed to transforming the educational landscape of India.
            </p>
          </div>

          <div className="team-section-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-trigger h-full">
                <HoverRevealCard 
                  title={member.name}
                  description={`${member.designation} | ${member.qualification} \n\n ${member.description}`}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="relative py-28 md:py-40 bg-white/40 dark:bg-white/[0.02] border-t border-brand-orange/10 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="header-content text-center mb-24">
            <h2 className="text-4xl sm:text-6xl font-bold text-theme-light-heading dark:text-white mb-8 tracking-tighter">
              The <span className="text-brand-orange">GyanSetu</span> Code
            </h2>
          </div>
          <div className="values-grid-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {[
              { title: "Innovation", icon: Rocket, color: "text-brand-orange", bg: "bg-brand-orange/10" },
              { title: "Impact", icon: Award, color: "text-blue-500", bg: "bg-blue-500/10" },
              { title: "Integrity", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { title: "Collaboration", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
              { title: "Accessibility", icon: Target, color: "text-cyan-500", bg: "bg-cyan-500/10" },
              { title: "Excellence", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-500/10" }
            ].map((value, index) => (
              <div
                key={index}
                className="value-card p-12 rounded-[3.5rem] bg-white dark:bg-theme-dark-card border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(234,144,16,0.15)]"
              >
                <div className={`w-20 h-20 ${value.bg} rounded-3xl flex items-center justify-center mb-10 shadow-inner`}>
                  <value.icon className={`w-10 h-10 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-theme-light-heading dark:text-white mb-5 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-lg text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-80 font-medium">
                  Dedicated to maintaining the highest standards of {value.title.toLowerCase()} in everything we build.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage;
