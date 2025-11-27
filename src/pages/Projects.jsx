
import React from "react";
import Data from "../utils/Data";
import AnimatedSection from "../components/AnimatedSection";
import { ChevronRight } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-24 bg-gray-950 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <AnimatedSection>
        <div className="text-center mb-20">
            <span className="text-indigo-400 font-mono text-sm tracking-wider">P1 - MY WORK</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-3">Selected Works</h2>
        </div>
      </AnimatedSection>

      <div className="space-y-24">
        {Data.projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 100}>
            <div className="flex flex-col lg:flex-row bg-[#1f3044] rounded-[40px] overflow-hidden shadow-2xl hover:shadow-indigo-900/20 border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 group">
              <div className="lg:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-900/50 rounded-full border border-indigo-500/30">{tag}</span>
                    ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-indigo-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-8 mb-10 border-t border-gray-700/50 pt-8">
                  <div>
                    <span className="block text-2xl font-bold text-white">{project.location}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Location</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-white">{project.duration}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-white">{project.year}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Year</span>
                  </div>
                </div>

                <a href="#" className="w-fit inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full font-bold transition-all duration-300 transform group-hover:translate-x-2">
                  View Case Study <ChevronRight className="w-5 h-5 ml-2"/>
                </a>
              </div>

              <div className="lg:w-5/12 bg-gray-900 relative min-h-[400px] lg:min-h-full overflow-hidden flex items-center justify-center p-8 group-hover:bg-gray-800 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f3044] to-transparent opacity-50 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="relative z-0 w-full max-w-xs md:max-w-sm rounded-[2rem] shadow-2xl border-4 border-gray-700 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-2 group-hover:-translate-y-2"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x600/1e1e2e/999999?text=UI+Preview"; }}
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
export default Projects;