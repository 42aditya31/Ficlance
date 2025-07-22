import React from 'react';
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApple,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Company Info - Takes 2 columns on xl screens */}
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <a href="#" className="inline-flex items-center mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Ficlance
                </span>
              </a>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                Bridging the gap between learning and real-world freelancing through immersive simulations. 
                Transform your skills into real opportunities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-300">
                  <FaEnvelope className="w-4 h-4 mr-3 text-emerald-400" />
                  <span className="text-sm">hello@ficlance.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <FaPhone className="w-4 h-4 mr-3 text-emerald-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <FaMapMarkerAlt className="w-4 h-4 mr-3 text-emerald-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { Icon: FaTwitter, label: 'Twitter' },
                  { Icon: FaLinkedinIn, label: 'LinkedIn' },
                  { Icon: FaFacebookF, label: 'Facebook' },
                  { Icon: FaInstagram, label: 'Instagram' }
                ].map(({Icon, label }, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon className="text-white w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Platform
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </h3>
              <ul className="space-y-4">
                {['Dashboard', 'Projects', 'Learning Path', 'Portfolio', 'Integrations', 'Analytics'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item}</span>
                      <FaArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </h3>
              <ul className="space-y-4">
                {['Blog', 'Documentation', 'Community', 'Support', 'Pricing', 'API'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item}</span>
                      <FaArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
              
              <div className="mb-8">
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-800/50 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  />
                  <button
                    type="button"
                    onClick={() => console.log('Subscribe clicked')}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center"
                  >
                    Subscribe
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t border-slate-700 pt-6">
                <p className="text-slate-400 text-xs mb-3 uppercase tracking-wider">Secure Payments</p>
                <div className="flex items-center space-x-3">
                  {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaApple].map((Icon, i) => (
                    <div key={i} className="bg-slate-800 p-2 rounded-lg">
                      <Icon className="text-slate-300 text-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-slate-400 text-sm">
                  © 2025 Ficlance. All rights reserved. Built with ❤️ for freelancers.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-sm">
                {[
                  'Terms of Service', 
                  'Privacy Policy', 
                  'Cookie Policy',
                  'Accessibility'
                ].map((text) => (
                  <a 
                    key={text} 
                    href="#" 
                    className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
                  >
                    {text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-slate-500 text-xs">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;