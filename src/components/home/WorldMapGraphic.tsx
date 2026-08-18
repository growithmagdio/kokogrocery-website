import React from 'react';
import { motion } from 'framer-motion';

export const WorldMapGraphic: React.FC = () => {
  // Trade route endpoints on 1000x500 SVG canvas
  const origin = { x: 640, y: 250, label: 'INDIA (ORIGIN)', code: 'IN' };
  
  const destinations = [
    { x: 210, y: 190, label: 'USA', desc: 'North America Market' },
    { x: 480, y: 160, label: 'EUROPE', desc: 'UK & EU Importers' },
    { x: 575, y: 220, label: 'UAE', desc: 'GCC Trade Hub' },
    { x: 560, y: 212, label: 'KUWAIT', desc: 'Direct Food Imports' },
    { x: 830, y: 190, label: 'JAPAN', desc: 'Strict Quality Line' },
    { x: 820, y: 370, label: 'AUSTRALIA', desc: 'Oceania Network' },
  ];

  return (
    <div className="relative h-[340px] sm:h-[440px] w-full flex items-center justify-center rounded-2xl bg-[#0B0C0E] border border-[#2D303E] overflow-hidden shadow-2xl">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F59E0B]/10 via-[#0B0C0E]/70 to-[#0B0C0E] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* SVG CANVAS WITH CONTINENTS & TRADE ARCS */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full object-contain relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* GRADIENT FOR TRADE ARCS */}
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>

          {/* GLOW FILTER */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* CONTINENT MAP OUTLINES (Sleek Dark Vector Paths) */}
        <g fill="#1A1C25" stroke="#2D303E" strokeWidth="0.75" opacity="0.85">
          {/* NORTH AMERICA */}
          <path d="M 120,110 Q 180,90 280,120 T 320,220 Q 260,260 210,240 T 130,170 Z" />
          <path d="M 170,240 Q 230,260 250,310 T 210,340 Z" />
          {/* SOUTH AMERICA */}
          <path d="M 280,310 Q 340,320 350,390 T 300,470 T 260,370 Z" />
          {/* EUROPE */}
          <path d="M 440,110 Q 520,100 550,140 T 490,200 T 430,150 Z" />
          {/* AFRICA */}
          <path d="M 450,210 Q 540,210 560,280 T 510,380 T 440,290 Z" />
          {/* ASIA & INDIA */}
          <path d="M 550,110 Q 750,90 850,150 T 820,260 Q 720,270 630,220 T 550,150 Z" />
          {/* INDIA SUBCONTINENT DETAIL */}
          <path d="M 610,210 Q 660,210 670,260 T 630,290 T 600,240 Z" fill="#252836" stroke="#F59E0B" strokeWidth="0.5" />
          {/* AUSTRALIA */}
          <path d="M 760,340 Q 860,330 870,390 T 790,430 T 750,370 Z" />
        </g>

        {/* CURVED EXPORT TRADE ARCS FROM INDIA TO WORLD */}
        {destinations.map((dest, idx) => {
          // Calculate quadratic control point for smooth arc
          const midX = (origin.x + dest.x) / 2;
          const midY = Math.min(origin.y, dest.y) - 60;
          const pathD = `M ${origin.x} ${origin.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

          return (
            <g key={dest.label}>
              {/* BACKGLOW LINE */}
              <path
                d={pathD}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeOpacity="0.25"
              />

              {/* ANIMATED DASHED TRADE ROUTE */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + idx * 0.5,
                  ease: 'linear',
                }}
              />
            </g>
          );
        })}

        {/* DESTINATION PINS & BADGES */}
        {destinations.map((dest, idx) => (
          <g key={`pin-${dest.label}`}>
            {/* PULSE RINGS */}
            <circle
              cx={dest.x}
              cy={dest.y}
              r="7"
              fill="#F59E0B"
              fillOpacity="0.2"
              className="animate-ping"
            />
            <circle
              cx={dest.x}
              cy={dest.y}
              r="4"
              fill="#0B0C0E"
              stroke="#F59E0B"
              strokeWidth="2"
            />

            {/* DESTINATION LABEL BOX */}
            <foreignObject
              x={dest.x - 45}
              y={dest.y > origin.y ? dest.y + 10 : dest.y - 32}
              width="90"
              height="28"
            >
              <div className="flex items-center justify-center">
                <span className="text-[10px] font-extrabold text-white bg-[#16171E]/95 px-2 py-0.5 rounded border border-[#2D303E] hover:border-[#F59E0B] shadow-md tracking-wider uppercase transition-colors">
                  {dest.label}
                </span>
              </div>
            </foreignObject>
          </g>
        ))}

        {/* INDIA ORIGIN BEACON (GOLDEN HUB) */}
        <g filter="url(#goldGlow)">
          <circle
            cx={origin.x}
            cy={origin.y}
            r="16"
            fill="#F59E0B"
            fillOpacity="0.25"
            className="animate-pulse"
          />
          <circle
            cx={origin.x}
            cy={origin.y}
            r="10"
            fill="#F59E0B"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <text
            x={origin.x}
            y={origin.y + 3.5}
            textAnchor="middle"
            fill="#0B0C0E"
            fontSize="9"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            IN
          </text>
        </g>

        {/* INDIA ORIGIN FLOATING BADGE */}
        <foreignObject
          x={origin.x - 65}
          y={origin.y + 18}
          width="130"
          height="32"
        >
          <div className="flex items-center justify-center">
            <span className="text-[11px] font-extrabold text-[#0B0C0E] bg-[#F59E0B] px-2.5 py-0.5 rounded-full border border-white shadow-gold-sm tracking-widest uppercase">
              INDIA ORIGIN
            </span>
          </div>
        </foreignObject>

      </svg>

      {/* FOOTER OVERLAY BAR */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-extrabold text-white/75 bg-[#16171E]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#2D303E]">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
          <span>Active Export Trade Hub: Chennai • Tuticorin • Mundra • JNPT</span>
        </span>
        <span className="text-[#F59E0B] hidden sm:inline">
          Sea & Air Container Shipments
        </span>
      </div>

    </div>
  );
};
