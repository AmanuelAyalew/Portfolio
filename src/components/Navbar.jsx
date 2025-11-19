import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];


  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          {/* Replace with your name or logo */}
          Portfolio
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={`hamburger ${open ? "open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-item">
              <Link
                to={link.to}
                className="navbar-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
