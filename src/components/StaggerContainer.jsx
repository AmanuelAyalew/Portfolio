import React, { useEffect } from 'react';

const StaggerContainer = ({ children, className = '', staggerDelay = 80 }) => {
  useEffect(() => {
    // Inject minimal keyframes/styles once
    if (typeof document === 'undefined') return;
    if (document.getElementById('stagger-container-styles')) return;

    const style = document.createElement('style');
    style.id = 'stagger-container-styles';
    style.innerHTML = `
      .stagger-container { display: contents; }
      .stagger-item { opacity: 0; transform: translateY(8px); animation: stagger-fade 420ms ease forwards; }
      @keyframes stagger-fade { to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className={`stagger-container ${className}`.trim()}>
      {React.Children.map(children, (child, i) => (
        <div className="stagger-item" style={{ animationDelay: `${i * Number(staggerDelay)}ms` }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerContainer;
