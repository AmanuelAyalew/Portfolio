import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm [Your Name].</h1>
          <p className="hero-subtitle">
            I build accessible, performant web applications and delightful user
            experiences. I specialize in React, modern JavaScript, and clean
            interfaces.
          </p>

          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="hero-avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
