import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Portfolio
          </Link>
          <p className="footer-tag">Crafting thoughtful interfaces and apps.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-social" aria-hidden>
          {/* Replace with real social links or icons */}
          <a
            href="#"
            className="social-link"
            aria-label="Twitter (placeholder)"
          >
            Twitter
          </a>
          <a href="#" className="social-link" aria-label="GitHub (placeholder)">
            GitHub
          </a>
          <a
            href="#"
            className="social-link"
            aria-label="LinkedIn (placeholder)"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <small className="copyright">
          © {year} Portfolio. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
