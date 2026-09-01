import React from 'react';

/**
 * Reusable architectural curved section divider
 * Supports multiple architectural curve types, colors, and vertical flips.
 */
export default function SectionDivider({
  variant = 'light', // 'light' (#F5F3EE), 'dark' (#111315), 'secondaryDark' (#1B1F21), 'orange' (#E8892D)
  type = 'convex-arch', // 'convex-arch', 'concave-arch', 'slope-right', 'wave-architectural', 'steep-curve'
  flipY = false,
  fillPosition = 'bottom', // 'bottom' or 'top'
  className = '',
  id = undefined
}) {
  const colorMap = {
    light: '#F1F5F9',
    dark: '#0D1522',
    secondaryDark: '#162238',
    surface: '#1E2D48',
    deepest: '#090E17',
    orange: '#E8892D',
    concrete: '#E2E8F0',
    transparent: 'transparent'
  };

  const fillColor = colorMap[variant] || variant;

  const renderPath = () => {
    const closure = fillPosition === 'top' ? 'L1440,0 L0,0 Z' : 'L1440,80 L0,80 Z';
    
    switch (type) {
      case 'convex-arch':
        return <path d={`M0,0 C360,70 1080,70 1440,0 ${closure}`} fill={fillColor} />;
      case 'concave-arch':
        return <path d={`M0,80 C480,10 960,10 1440,80 ${closure}`} fill={fillColor} />;
      case 'slope-right':
        return <path d={`M0,80 C360,80 840,20 1440,0 ${closure}`} fill={fillColor} />;
      case 'slope-left':
        return <path d={`M0,0 C600,20 1080,80 1440,80 ${closure}`} fill={fillColor} />;
      case 'wave-architectural':
        return <path d={`M0,40 C320,80 480,10 800,45 C1120,80 1280,15 1440,50 ${closure}`} fill={fillColor} />;
      case 'steep-curve':
      default:
        return <path d={`M0,0 Q720,100 1440,0 ${closure}`} fill={fillColor} />;
    }
  };

  return (
    <div
      id={id}
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 relative ${className}`}
      style={{
        transform: flipY ? 'scaleY(-1)' : 'none',
        marginTop: '-1px',
        marginBottom: '-1px'
      }}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px] lg:h-[95px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderPath()}
      </svg>
    </div>
  );
}
