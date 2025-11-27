import React from 'react';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const style = {
    animation: `fadeInUp 520ms ease forwards`,
    animationDelay: `${delay}ms`,
    opacity: 0,
  };

  // Ensure keyframes are present once
  if (typeof document !== 'undefined' && !document.getElementById('animated-section-styles')) {
    const s = document.createElement('style');
    s.id = 'animated-section-styles';
    s.innerHTML = `
      @keyframes fadeInUp { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    `;
    document.head.appendChild(s);
  }

  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};

export default AnimatedSection;
