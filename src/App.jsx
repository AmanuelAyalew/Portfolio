import React from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/Herosection.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./pages/Experiance.jsx";

function App() {
  return (
   <div className="bg-gray-950 min-h-screen font-sans scroll-smooth selection:bg-indigo-500/30 selection:text-indigo-200">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-blink { animation: blink 1s step-end infinite; }
        .animate-spin-once { animation: spin 0.5s ease-out; }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Experience/>
      </main>
      <Footer />
    </div>

  ) 
}

export default App;
