import React, { useState } from 'react';

interface QamarPowerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'amber' | 'light' | 'dark';
}

export const QamarPowerLogo: React.FC<QamarPowerLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  variant = 'amber'
}) => {
  const [imgError, setImgError] = useState(false);

  const iconDimensions = {
    sm: { box: 'w-10 h-10', text: 'text-base', subText: 'text-[9px]' },
    md: { box: 'w-12 h-12', text: 'text-xl', subText: 'text-[10px]' },
    lg: { box: 'w-16 h-16', text: 'text-2xl', subText: 'text-xs' }
  }[size];

  const colorStyle = {
    amber: {
      bg: 'bg-white border-amber-400/60 text-black',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
    },
    light: {
      bg: 'bg-white border-slate-900 text-slate-950',
      badge: 'bg-slate-900 text-amber-400 border-slate-900'
    },
    dark: {
      bg: 'bg-slate-900 border-slate-700 text-white',
      badge: 'bg-amber-400 text-slate-950 border-amber-400'
    }
  }[variant];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram QP Logo Frame */}
      <div
        className={`${iconDimensions.box} relative flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform`}
      >
        {!imgError ? (
          <img
            src="/assets/images/logo.png"
            alt="Qamar Power Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain rounded"
          />
        ) : (
          <div className="w-full h-full bg-white border border-slate-300 rounded flex items-center justify-center p-0.5 shadow-md">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top Solid Black Line */}
              <rect x="0" y="3" width="100" height="7" fill="black" />

              {/* Calligraphic Script 'Q' */}
              <path
                d="M 42,16 C 24,16 8,30 8,50 C 8,66 18,78 32,78 C 36,78 40,76 44,72 C 38,76 28,76 22,70 C 16,64 16,52 22,38 C 28,24 40,20 48,24 C 52,26 52,30 48,34 C 42,40 30,48 24,56 C 20,62 20,70 24,74 C 26,76 30,76 34,74 C 44,68 52,56 56,44 C 58,38 58,30 52,24 C 48,20 44,18 42,16 Z M 26,62 C 24,56 30,50 38,44 C 42,40 44,34 42,32 C 40,30 36,32 32,36 C 26,42 22,50 22,58 C 22,62 24,64 26,62 Z M 32,76 C 42,74 54,64 64,88 L 56,90 C 48,72 38,78 32,76 Z"
                fill="black"
              />

              {/* Calligraphic Script 'P' */}
              <path
                d="M 54,16 C 68,14 96,20 96,42 C 96,62 74,68 56,66 L 46,90 L 38,90 L 52,26 L 54,16 Z M 56,24 L 48,58 C 62,60 86,56 86,40 C 86,28 68,22 56,24 Z"
                fill="black"
              />

              {/* Bottom Solid Black Line */}
              <rect x="0" y="90" width="100" height="7" fill="black" />
            </svg>
          </div>
        )}
      </div>

      {/* Stacked Branding Name */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`${iconDimensions.text} font-black tracking-tight text-white uppercase font-sans`}>
            QAMAR
          </span>
          <span className={`text-xs font-black px-1.5 py-0.5 rounded border uppercase tracking-wider ${colorStyle.badge}`}>
            POWER
          </span>
        </div>
        {showTagline && (
          <span className={`${iconDimensions.subText} text-slate-400 font-medium tracking-wider uppercase mt-1`}>
            Electrical Services • Islamabad & Rawalpindi
          </span>
        )}
      </div>
    </div>
  );
};

