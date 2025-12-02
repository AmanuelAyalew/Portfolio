
import React from "react";
import Data from "../utils/Data";
import { Menu, X, ArrowDown, Briefcase, ChevronRight, User, Aperture, Globe, MapPin, Calendar, Mail, Linkedin, Twitter } from 'lucide-react';
import StaggerContainer from "../components/StaggerContainer";  


const About = () => (
  <section id="about" className="py-24 bg-[#1f3044] border-b border-gray-800 relative px-5 md:px-12 m-40">
    {/* <AnimatedSection className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16"> */}
      
      <div className="lg:col-span-2 text-gray-400 space-y-8 text-lg">
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-indigo-300 bg-indigo-900/30 rounded-lg mb-2">A1 - GET TO KNOW ME</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">A Versatile Creator</h2>
        <p className="leading-relaxed text-gray-300">{Data.bio}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-700/50">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                {/* <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400"><Briefcase className="w-6 h-6"/></div> */}
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Current Role</p>
                    <p className="text-white font-medium">{Data.currentRole}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400"><MapPin className="w-6 h-6"/></div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">{Data.location}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="lg:row flex overflow-x-auto space-x-4 p-10 px-10">
        <h2 className="text-3xl font-bold text-white mb-8 lg:mt-10 mt-18">Tools & Expertise</h2>
        <StaggerContainer className="flex gap-4 overflow-x-auto py-2 px-2 snap-x snap-mandatory" staggerDelay={50}>
          {Data.skillsIcons.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex-shrink-0 w-46 flex flex-row items-start pt-10 ml-5 justify-center p-4  bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-indigo-500 hover:bg-gray-800 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group cursor-default h-32 snap-start">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon {...(skill.iconProps || {})} />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.label}</span>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    {/* </AnimatedSection> */}
  </section>
);

export default About;