import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Adv. Abhay A. Kulkarni",
      designation: "Director",
      qualification: "B.Sc., LL.M., MBA (H.R.), C.P.C.T.",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1751826586/Director_image_j167br.jpg",
      description: "Director, Gyansetu Global Growth Pvt. Ltd. & Waves Classes, Jalgaon | Trustee, Shikshan Prasarak Mandal | Chartered Secretary, Rotary Club of Jalgaon Green City"
    },
    {
      name: "Sagar M. Patil",
      designation: "Director",
      qualification: "B.Tech (Information Technology), VIT",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421070/sagar_sir_ywruow.jpg",
      description: "Founder & Director at Spectrum Classes, Educator at Vision Classes, and Private Home Tutor in Navi Mumbai"
    },
    {
      name: "Pushpendra Singh Rathore",
      designation: "Director",
      qualification: "B.Tech (Mechanical Engineering), KNIT",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421600/sir_zjfntp.jpg",
      description: "Engineer & Educator with 12+ years of experience, teaching Physics, Mathematics, and Logical Reasoning for IIT-JEE, NEET, CAT, Banking, and SSC aspirants."
    },
    {
      name: "Abhijit Balwant Patil",
      designation: "Director",
      qualification: "M.A. in Mass Communication, B.A. (Sociology)",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769446615/e5ab2613-d6a3-420e-b316-e35ad4e4f56c_tswzoz.jpg",
      description: "Sub-Editor & Reporter at Lokmat since 2011, former Video Journalist at IBN Lokmat, LAADLI Media Award (UNFPA) winner, with experience in news coverage, camerawork, and social awareness initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-theme-dark-bg transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--bridge-gold)]/10 to-transparent py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-theme-light-body dark:text-theme-dark-body hover:text-brand-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-light-heading dark:text-white mb-4">
            About GyanSetu
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-theme-light-body dark:text-theme-dark-body max-w-3xl">
            Meet the passionate team behind India's innovative educational technology platform
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-12 md:py-16 bg-[#F5F1EA] dark:bg-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-theme-dark-bg ring-1 ring-[var(--bridge-gold)]/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-theme-light-heading dark:text-white mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-theme-light-body dark:text-theme-dark-body leading-relaxed">
                To bridge traditional educational wisdom with modern technology by building intuitive tools that empower both students and educators to achieve meaningful learning outcomes.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-theme-dark-bg ring-1 ring-[var(--bridge-gold)]/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-theme-light-heading dark:text-white mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-theme-light-body dark:text-theme-dark-body leading-relaxed">
                To create a learning ecosystem where curiosity leads, understanding follows, and education becomes meaningful for every student across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-theme-light-heading dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-theme-light-body dark:text-theme-dark-body max-w-2xl mx-auto">
              Dedicated professionals committed to transforming education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-theme-dark-bg rounded-2xl overflow-hidden ring-1 ring-[var(--bridge-gold)]/20 hover:ring-[var(--bridge-gold)]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-light-heading dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-orange font-semibold text-sm mb-2">
                    {member.designation}
                  </p>
                  <p className="text-sm text-theme-light-body dark:text-theme-dark-body mb-3">
                    {member.qualification}
                  </p>
                  <p className="text-sm text-theme-light-body dark:text-theme-dark-body leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-12 md:py-16 bg-[#F5F1EA] dark:bg-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-theme-light-heading dark:text-white mb-8 md:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", description: "Constantly pushing boundaries in educational technology" },
              { title: "Quality", description: "Delivering excellence in every product and service" },
              { title: "Accessibility", description: "Making quality education available to all" },
              { title: "Collaboration", description: "Working together with educators and learners" },
              { title: "Impact", description: "Creating meaningful change in education" },
              { title: "Integrity", description: "Maintaining highest standards of ethics" }
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-theme-dark-bg ring-1 ring-[var(--bridge-gold)]/20"
              >
                <h3 className="text-lg font-bold text-theme-light-heading dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-theme-light-body dark:text-theme-dark-body">
                  {value.description}
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
