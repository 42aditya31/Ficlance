import React from "react";

// Custom icon components with enhanced styling
const FlagIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const MedalIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="5" strokeWidth={2}/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13l-4 8 2-1 2-3 2 3 2 1-4-8z"/>
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17h14l-2-6V7a4 4 0 00-8 0v4L7 17zM7 17v1a2 2 0 002 2h6a2 2 0 002-2v-1M6 7H2v3c0 1 1 2 2 2h2M18 7h4v3c0 1-1 2-2 2h-2"/>
  </svg>
);

const CrownIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 6 4-7 4 7 4-6v13a1 1 0 01-1 1H6a1 1 0 01-1-1V3z" />
  </svg>
);

export default function JourneyTimeline() {
  const timelineData = [
    {
      icon: <FlagIcon />,
      title: "Journey Began",
      date: "January 15, 2025",
      desc: "Started my simulated freelance journey on Ficlance. Completed onboarding and set up my initial profile.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <AwardIcon />,
      title: "First Project Completed",
      date: "February 3, 2025",
      desc: 'Successfully delivered my first e-commerce project with a 5-star rating. Earned "First Win" badge.',
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-500",
      textColor: "text-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      icon: <MedalIcon />,
      title: "Level Up: Intermediate",
      date: "March 20, 2025",
      desc: "Advanced to Intermediate level after completing 5 projects with an average rating of 4.8. Unlocked new project types.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      textColor: "text-purple-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: <TrophyIcon />,
      title: "Specialization Achieved",
      date: "April 15, 2025",
      desc: 'Earned "Frontend Expert" specialization after completing multiple UI-focused projects with exceptional feedback.',
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      textColor: "text-orange-600",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: <CrownIcon />,
      title: "Level Up: Advanced",
      date: "June 10, 2025",
      desc: "Reached Advanced level status after completing 12 projects. Unlocked premium project opportunities and mentorship features.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      textColor: "text-amber-600",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Professional Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
            Tracking growth and achievements throughout my freelance career journey, 
            showcasing key milestones and professional development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line - Enhanced */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-300 to-emerald-200 hidden md:block rounded-full shadow-sm"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-300 to-emerald-200 md:hidden rounded-full"></div>

          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
              style={{ 
                opacity: 0,
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
              }}
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center w-full">
                {index % 2 === 0 ? (
                  <>
                    {/* Content Card - Left Side */}
                    <div className="w-5/12 pr-12">
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                          <div className="flex items-start mb-6">
                            <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center text-white mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                              <div className="flex items-center text-sm font-semibold text-gray-500 mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {item.date}
                              </div>
                              <p className="text-gray-700 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Point */}
                    <div className="relative flex items-center justify-center">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full bg-white ${item.borderColor} border-4 shadow-xl z-10 animate-pulse`}></div>
                        <div className={`absolute inset-0 w-8 h-8 rounded-full ${item.iconBg} opacity-20 animate-ping`}></div>
                      </div>
                    </div>

                    {/* Empty space */}
                    <div className="w-5/12 pl-12"></div>
                  </>
                ) : (
                  <>
                    {/* Empty space */}
                    <div className="w-5/12 pr-12"></div>

                    {/* Center Point */}
                    <div className="relative flex items-center justify-center">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full bg-white ${item.borderColor} border-4 shadow-xl z-10 animate-pulse`}></div>
                        <div className={`absolute inset-0 w-8 h-8 rounded-full ${item.iconBg} opacity-20 animate-ping`}></div>
                      </div>
                    </div>

                    {/* Content Card - Right Side */}
                    <div className="w-5/12 pl-12">
                      <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-emerald-200 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                          <div className="flex items-start mb-6">
                            <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center text-white mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                              <div className="flex items-center text-sm font-semibold text-gray-500 mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {item.date}
                              </div>
                              <p className="text-gray-700 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Layout - Enhanced */}
              <div className="md:hidden flex items-start w-full pl-20">
                {/* Timeline Point */}
                <div className="absolute left-6 flex items-center justify-center">
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full bg-white ${item.borderColor} border-4 shadow-lg z-10 animate-pulse mt-8`}></div>
                    <div className={`absolute inset-0 w-6 h-6 rounded-full ${item.iconBg} opacity-20 animate-ping mt-8`}></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="group relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <div className="flex items-center text-sm font-semibold text-gray-500 mb-3">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.date}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Achievement Summary */}
        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-5 blur-3xl"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                  Journey Highlights
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                  <div className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">5</div>
                  <div className="text-gray-700 font-semibold text-lg">Major Milestones</div>
                </div>
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                  <div className="text-4xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">12+</div>
                  <div className="text-gray-700 font-semibold text-lg">Projects Completed</div>
                </div>
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                  <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">4.8</div>
                  <div className="text-gray-700 font-semibold text-lg">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}