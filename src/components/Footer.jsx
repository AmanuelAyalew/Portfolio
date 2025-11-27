
import React from "react";
import Data from "../utils/Data";
import AnimatedSection from "../components/AnimatedSection";
import { Mail } from 'lucide-react';


const Footer = () => (
  <footer id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
     {/* Decorative background elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

    <AnimatedSection className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
      <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">C1 - SAY HELLO</span>
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's work together.</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        I am currently open for new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a 
        href="mailto:anders@example.com" 
        className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden shadow-2xl shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-indigo-600/50"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
        <Mail className="w-5 h-5 mr-3" />
        Send a Message
      </a>
      
      <div className="flex justify-center space-x-8 mt-16">
        {Data.socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a key={index} href={social.href} aria-label={social.label} className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <Icon {...(social.iconProps || {})} />
            </a>
          );
        })}
      </div>

      <div className="mt-24 text-sm text-gray-600 font-mono">
        &copy; {new Date().getFullYear()} {Data.name}. <span className="mx-2">|</span> Designed & Built with React.
      </div>
    </AnimatedSection>
  </footer>
);
export default Footer;