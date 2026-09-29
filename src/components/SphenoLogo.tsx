import React from 'react';

interface SphenoLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SphenoLogo: React.FC<SphenoLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  // Height sizing
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10',
    xl: 'h-11 sm:h-12',
  }[size];

  // Base font color for "SPHENO" and dot "."
  const baseTextColor = variant === 'dark' ? '#FFFFFF' : '#0B0F2A';

  return (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 1080 200"
        className={`${heightClasses} w-auto transition-transform duration-300 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SPHENO.AI"
      >
        <defs>
          {/* Cyber Gradient for "AI" letters (Electric Sapphire to Violet) */}
          <linearGradient id="sphenoAiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F75FF" />
            <stop offset="35%" stopColor="#5E87FE" />
            <stop offset="70%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#A88BFE" />
          </linearGradient>

          {/* Cyan/Blue Neon Glow Bar on 'E' */}
          <linearGradient id="sphenoEBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="75%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>

          {/* Specular sheen over E-Bar */}
          <linearGradient id="sphenoESheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
          </linearGradient>

          <filter id="eBarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* 1. SPHENO BASE GLYPHS                                    */}
        {/* ======================================================== */}
        <g fill={baseTextColor}>
          {/* "S" - Modern Boxy Rounded Squircle */}
          <path d="M 68 32 L 126 32 C 150 32 165 46 165 70 L 165 76 L 140 76 L 140 70 C 140 57 132 50 119 50 L 72 50 C 56 50 48 57 48 70 L 48 78 C 48 89 57 96 78 100 L 118 108 C 149 114 165 128 165 152 L 165 160 C 165 185 148 198 122 198 L 64 198 C 36 198 20 184 20 160 L 20 152 L 45 152 L 45 160 C 45 173 53 180 70 180 L 118 180 C 133 180 141 173 141 160 L 141 152 C 141 141 132 133 111 129 L 71 121 C 39 115 22 101 22 78 L 22 70 C 22 45 39 32 68 32 Z" />

          {/* "P" */}
          <path d="M 188 32 L 254 32 C 286 32 306 50 306 80 C 306 110 286 128 254 128 L 214 128 L 214 198 L 188 198 L 188 32 Z M 214 50 L 214 110 L 252 110 C 272 110 282 100 282 80 C 282 60 272 50 252 50 L 214 50 Z" />

          {/* "H" */}
          <path d="M 328 32 L 354 32 L 354 198 L 328 198 Z" />
          <path d="M 412 32 L 438 32 L 438 198 L 412 198 Z" />
          <path d="M 354 103 L 412 103 L 412 127 L 354 127 Z" />
        </g>

        {/* Cyan Crosshair Accent on H Left Stalk */}
        <g transform="translate(341, 115)">
          <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-5.5" x2="0" y2="5.5" stroke="#00F2FE" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* "E" Base Spine & Outer Arms */}
        <g fill={baseTextColor}>
          <path d="M 460 32 L 554 32 L 554 50 L 486 50 L 486 180 L 556 180 L 556 198 L 460 198 Z" />
        </g>

        {/* "E" Neon Gradient Cyan-Blue Crossbar (Exact distinctive element from Image) */}
        <rect 
          x="486" 
          y="103" 
          width="70" 
          height="24" 
          rx="2" 
          fill="url(#sphenoEBar)" 
          filter="url(#eBarGlow)" 
        />
        <rect 
          x="486" 
          y="103" 
          width="70" 
          height="24" 
          rx="2" 
          fill="url(#sphenoESheen)" 
        />
        <line x1="486" y1="104" x2="556" y2="104" stroke="#E0F2FE" strokeWidth="1.5" />

        {/* "N" */}
        <g fill={baseTextColor}>
          <path d="M 578 32 L 604 32 L 664 152 L 664 32 L 690 32 L 690 198 L 664 198 L 604 78 L 604 198 L 578 198 Z" />
        </g>

        {/* "O" - Bold Rounded Squircle */}
        <g fill={baseTextColor}>
          <path d="M 752 32 L 792 32 C 825 32 844 50 844 80 L 844 150 C 844 180 825 198 792 198 L 752 198 C 719 198 700 180 700 150 L 700 80 C 700 50 719 32 752 32 Z M 754 50 C 735 50 726 60 726 80 L 726 150 C 726 170 735 180 754 180 L 790 180 C 809 180 818 170 818 150 L 818 80 C 818 60 809 50 790 50 Z" />
        </g>

        {/* "." (Dot separator between SPHENO and AI) */}
        <circle cx="875" cy="186" r="12" fill={baseTextColor} />

        {/* ======================================================== */}
        {/* 2. "AI" (GRADIENT SAPPHIRE-VIOLET)                      */}
        {/* ======================================================== */}
        <g fill="url(#sphenoAiGrad)">
          {/* "A" with angled geometric apex */}
          <path d="M 945 32 L 973 32 L 1022 198 L 994 198 L 980 148 L 938 148 L 924 198 L 896 198 Z M 944 126 L 974 126 L 959 68 Z" />

          {/* "I" Solid Column */}
          <path d="M 1042 32 L 1068 32 L 1068 198 L 1042 198 Z" />
        </g>
      </svg>
    </div>
  );
};
