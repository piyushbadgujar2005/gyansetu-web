import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/50 dark:from-[#1A1A1A] dark:via-theme-dark-bg dark:to-[#1A1A1A] transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brand-orange/20 to-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-orange/10 to-amber-500/10 dark:from-brand-orange/20 dark:to-amber-500/20 rounded-full border border-brand-orange/30 mb-4 sm:mb-5 md:mb-6">
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
            <span className="text-xs sm:text-sm font-semibold text-brand-orange">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-theme-light-heading dark:text-white">
            Contact <span className="text-brand-orange">Us</span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-theme-light-body dark:text-theme-dark-body px-2 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for any inquiries or support
          </p>
          <div className="mt-4 sm:mt-5 md:mt-6 mx-auto h-1 w-20 sm:w-28 md:w-36 bg-gradient-to-r from-transparent via-brand-orange to-transparent rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 md:mb-16">
          {/* Email Card */}
          <a
            href="mailto:contact@gyansetu.com"
            className="group relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-blue-500 flex items-center justify-center shadow-lg">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-theme-light-heading dark:text-white">
                Email Us
              </h3>
              <p className="text-xs sm:text-sm text-theme-light-body dark:text-theme-dark-body opacity-70">
                Send us an email anytime
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-theme-light-heading dark:text-white break-words">
                contact@gyansetu.com
              </p>
            </div>
            <div className="absolute top-5 sm:top-6 right-5 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+911234567890"
            className="group relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-theme-light-heading dark:text-white">
                Call Us
              </h3>
              <p className="text-xs sm:text-sm text-theme-light-body dark:text-theme-dark-body opacity-70">
                Mon-Fri, 9AM-6PM IST
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-theme-light-heading dark:text-white">
                +91 123 456 7890
              </p>
            </div>
            <div className="absolute top-5 sm:top-6 right-5 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
            </div>
          </a>

          {/* Location Card */}
          <div className="group relative p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-brand-orange/20 hover:border-brand-orange/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 rounded-lg md:rounded-xl bg-purple-500 flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-theme-light-heading dark:text-white">
                Visit Us
              </h3>
              <p className="text-xs sm:text-sm text-theme-light-body dark:text-theme-dark-body opacity-70">
                Our office location
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-theme-light-heading dark:text-white break-words leading-relaxed">
                123 Education Street, New Delhi, India 110001
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white to-orange-50/50 dark:from-theme-dark-bg dark:to-brand-orange/5 border border-brand-orange/20 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative text-center space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-light-heading dark:text-white">
              Ready to Transform <span className="text-brand-orange">Education</span>?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-theme-light-body dark:text-theme-dark-body max-w-2xl mx-auto px-2">
              Join thousands of educators and students already using GyanSetu to make learning more engaging and effective.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="mailto:contact@gyansetu.com"
                className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange/90 hover:to-amber-500/90 text-white font-bold text-xs sm:text-sm md:text-base rounded-xl shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span>Send Us a Message</span>
              </a>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-3.5 bg-white dark:bg-theme-dark-bg border-2 border-brand-orange/30 hover:border-brand-orange/50 text-theme-light-heading dark:text-white font-bold text-xs sm:text-sm md:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
