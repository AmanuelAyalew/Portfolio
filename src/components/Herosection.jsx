
import React from "react";
import Data from "../utils/Data";
import { data } from "react-router-dom";
import  img1 from "../assets/profile.png"


const HeroSection = () => (
  <section id="home" className="pt-32 pb-0 min-h-screen flex flex-col justify-between bg-blue-950 relative overflow-hidden">
    {/* Dynamic Background */}
    <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A7B9B] via-gray-950 to-black opacity-90 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col justify-center relative z-10 flex-grow pt-16 pb-24">
      {/* Floating Bubble */}
      <div className="mb-8 animate-[float_6s_ease-in-out_infinite]">
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-white/20 shadow-lg">
            {/* <div className="w-8 h-8 rounded-full bg-indigo-500 overflow-hidden flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
            </div> */}
            <p className="text-sm font-semibold text-white tracking-wide">Hi, there!</p>
        </div>
      </div>

      {/* Main Heading with Typewriter */}
      <div className="max-w-5xl">

        <div className="flex items-center space-x-6 align-middle">
           <img src={Data.image} alt={`${Data.name} Profile`} className="w-40 h-40 rounded-full object-cover mb-6" />
           
           <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-6 animate-[fade-in-up_1s_ease-out_forwards]">
            {Data.name},
          </h1>
         
        </div>
          
          <div className="h-24 sm:h-32 lg:h-40"> {/* Fixed height to prevent layout shift */}
            <span className="block font-light text-white/90 text-4xl sm:text-6xl lg:text-7xl leading-tight">
                {/* <TypewriterEffect text={Data.title} className="" /> */}
                <span className="animate-blink">|</span>
            </span>
          </div>
      </div>

      <a href="#projects" className="absolute bottom-12 left-1/2 -translate-x-1/2 group cursor-pointer hidden sm:block">
        <div className="p-4 rounded-full bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 group-hover:bg-indigo-600 transition-all duration-300">
            {/* <ArrowDown className="w-6 h-6 text-white animate-bounce"/> */}
        </div>
      </a>
    </div>
    
    
  </section>
);

 export default HeroSection;