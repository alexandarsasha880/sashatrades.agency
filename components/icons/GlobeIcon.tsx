
import React from 'react';

export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <style>
        {`
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes rotate-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
          .orbit1 { animation: rotate 30s linear infinite; transform-origin: 50px 50px; }
          .orbit2 { animation: rotate-reverse 40s linear infinite; transform-origin: 50px 50px; }
          .orbit3 { animation: rotate 50s linear infinite; transform-origin: 50px 50px; }
        `}
      </style>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#globeGradient)" fillOpacity="0.1" />
    <circle cx="50" cy="50" r="40" stroke="url(#globeGradient)" strokeWidth="0.5" fill="none" />
    
    <g className="orbit1">
      <ellipse cx="50" cy="50" rx="40" ry="15" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="0.5" fill="none" />
    </g>
    <g className="orbit2">
      <ellipse cx="50" cy="50" rx="40" ry="25" transform="rotate(60 50 50)" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="0.5" fill="none" />
    </g>
    <g className="orbit3">
      <ellipse cx="50" cy="50" rx="20" ry="40" transform="rotate(-45 50 50)" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="0.5" fill="none" />
    </g>

    <path d="M10 50 C 30 30, 70 30, 90 50" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="0.5" fill="none" />
    <path d="M10 50 C 30 70, 70 70, 90 50" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="0.5" fill="none" />
    <path d="M50 10 C 30 30, 30 70, 50 90" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="0.5" fill="none" />
    <path d="M50 10 C 70 30, 70 70, 50 90" stroke="#38bdf8" strokeOpacity="0.2" strokeWidth="0.5" fill="none" />

    <circle cx="50" cy="50" r="3" fill="#f0f9ff" />
  </svg>
);
