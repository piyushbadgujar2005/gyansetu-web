import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Lightbulb, ArrowRight } from 'lucide-react';
import aboutEducation from '../assets/about_education.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-theme-dark-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brand-orange/20 to-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-theme-light-heading dark:text-white">
            About <span className="text-brand-orange">GyanSetu</span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-theme-light-body dark:text-theme-dark-body px-2 max-w-3xl mx-auto">
            Bridging timeless knowledge with modern learning experiences
          </p>
          <div className="mt-4 sm:mt-5 md:mt-6 mx-auto h-1 w-20 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full" />
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-orange/10 to-amber-500/10 dark:from-brand-orange/20 dark:to-amber-500/20 rounded-full border border-brand-orange/30">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
              <span className="text-xs sm:text-sm font-semibold text-brand-orange">Who We Are</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-light-heading dark:text-white">
              Education Innovators
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body">
              GyanSetu is an education‑focused initiative built on the belief that true learning happens when concepts are understood, not memorized. We design tools that help students think, explore, and apply knowledge with confidence.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-theme-dark-bg rounded-full text-xs sm:text-sm font-medium border border-brand-orange/20 shadow-sm text-theme-light-heading dark:text-white">
                🎓 Student-Centered
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-theme-dark-bg rounded-full text-xs sm:text-sm font-medium border border-brand-orange/20 shadow-sm text-theme-light-heading dark:text-white">
                💡 Innovation-Driven
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-theme-dark-bg rounded-full text-xs sm:text-sm font-medium border border-brand-orange/20 shadow-sm text-theme-light-heading dark:text-white">
                🌟 Impact-Focused
              </span>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-amber-500/30 rounded-2xl md:rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden ring-2 ring-brand-orange/30 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src={aboutEducation} 
                alt="Innovation in Education" 
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Values Cards - Vision, Mission, Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-18">
          {/* Vision Card */}
          <div className="relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-white dark:bg-theme-dark-bg flex items-center justify-center shadow-md">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-500" />
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white mb-2 sm:mb-3">
              Our Vision
            </h4>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body">
              To create a learning ecosystem where curiosity leads, understanding follows, and education becomes meaningful.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-white dark:bg-theme-dark-bg flex items-center justify-center shadow-md">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-500" />
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white mb-2 sm:mb-3">
              Our Mission
            </h4>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body">
              We aim to bridge traditional educational wisdom with modern technology by building intuitive tools that empower both students and educators.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-white dark:bg-theme-dark-bg flex items-center justify-center shadow-md">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-orange" />
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-theme-light-heading dark:text-white mb-2 sm:mb-3">
              Our Commitment
            </h4>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-theme-light-body dark:text-theme-dark-body">
              Delivering quality educational tools that make learning engaging, accessible, and effective for every student.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange/90 hover:to-amber-500/90 text-white font-bold text-xs sm:text-sm md:text-base rounded-xl shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
