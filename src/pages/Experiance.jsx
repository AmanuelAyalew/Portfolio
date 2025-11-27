
import React from "react";
import Data from "../utils/Data";
import StaggerContainer from "../components/StaggerContainer";
import AnimatedSection from "../components/AnimatedSection";
import { Briefcase } from 'lucide-react';


const Experience = () => (
  <section id="experience" className="py-24 bg-[#1f3044] border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <AnimatedSection className="text-center mb-16">
        <span className="text-indigo-400 font-mono text-sm tracking-wider">E2 - CAREER PATH</span>
        <h2 className="text-4xl font-bold text-white mt-3">My Journey</h2>
      </AnimatedSection>
      
      <StaggerContainer className="max-w-4xl mx-auto space-y-4" staggerDelay={150}>
        {Data.experience.map((job, index) => (
          <div key={index} className="group relative pl-8 sm:pl-0">
             {/* Timeline styling */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-8 bg-gray-900/50 hover:bg-gray-800 border border-transparent hover:border-indigo-500/30 rounded-2xl transition-all duration-300">
              <div className="flex items-center">
                <div className="hidden sm:flex h-12 w-12 rounded-full bg-gray-800 items-center justify-center text-indigo-400 border border-gray-700 mr-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <Briefcase className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{job.role}</h3>
                    <p className="text-gray-400 mt-1 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>{job.company}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                  <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-mono border border-gray-700 group-hover:border-indigo-500/50 transition-colors">
                      {job.years}
                  </span>
                  <p className="text-gray-500 text-xs mt-2 text-left sm:text-right">{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
 export default Experience;