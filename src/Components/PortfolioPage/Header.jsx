import React from "react";
import {
  MapPin,
  Github,
  Mail,
  Phone
} from "lucide-react";

// Example JSON data (replace this with API data later)
const profileData = {
  name: "Aditya Sharma",
  role: "Senior Frontend Developer",
  location: "Gandhinagar, India",
  github: "42aditya31",
  email: "adit28012004@gmail.com",
  phone: "+91 9081472372",
  skills: [
    { name: "React", value: 95 },
    { name: "TypeScript", value: 90 },
    { name: "UI/UX Design", value: 85 },
    { name: "Node.js", value: 80 }
  ],
  stats: [
    { label: "Projects", value: "12" },
    { label: "Rating", value: "4.9" },
    { label: "Badges", value: "8" }
  ],
  bgImage:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  profileImage:
    "https://sharma-folio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthors.bf6af78f.webp&w=640&q=75"
};

const Header = ({ data = profileData }) => {
  return (
    <header
      className="relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(55, 65, 81, 0.6)), url(${data.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center md:text-left flex-1">
            {/* Name & Role */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {data.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200">
              {data.role}
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 my-8 justify-center md:justify-start">
              {[
                { key: "location", icon: MapPin, value: data.location },
                { key: "github", icon: Github, value: `github.com/${data.github}` },
                { key: "email", icon: Mail, value: data.email },
                { key: "phone", icon: Phone, value: data.phone }
              ].map(
                ({ key, icon: Icon, value }) =>
                  value && (
                    <div
                      key={key}
                      className="flex items-center gap-2 text-gray-200"
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{value}</span>
                    </div>
                  )
              )}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                {data.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-300">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-300/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center md:justify-start">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
