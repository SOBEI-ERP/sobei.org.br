'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

/* Bandô / Festão Superior das Cortinas em Puro Veludo Vermelho (sem detalhes em dourado) */
function TheaterValance() {
  return (
    <div className="theater-curtain__valance" aria-hidden="true">
      <svg
        className="theater-curtain__valance-svg"
        viewBox="0 0 500 52"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Veludo Vermelho Profundo Realista */}
          <linearGradient id="tc-velvet-valance" x1="0" y1="0" x2="0" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2c0303" />
            <stop offset="20%" stopColor="#550808" />
            <stop offset="55%" stopColor="#7f1212" />
            <stop offset="85%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#3d0303" />
          </linearGradient>
        </defs>

        {/* Fita / trilho superior onde as cortinas são suspensas */}
        <rect x="0" y="0" width="500" height="9" fill="#1c0202" />
        <line x1="0" y1="9" x2="500" y2="9" stroke="#120101" strokeWidth="1" strokeOpacity="0.8" />

        {/* Swag Esquerdo (0 a 175) */}
        <path
          d="M 0,9 L 175,9 C 155,42 25,42 0,34 Z"
          fill="url(#tc-velvet-valance)"
        />
        <path
          d="M 15,9 C 35,34 135,34 160,9"
          stroke="#150101"
          strokeWidth="2.5"
          strokeOpacity="0.6"
        />
        <path
          d="M 15,10 C 35,35 135,35 160,10"
          stroke="#ef4444"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <path
          d="M 35,9 C 50,26 120,26 140,9"
          stroke="#150101"
          strokeWidth="2"
          strokeOpacity="0.45"
        />

        {/* Swag Direito (325 a 500) */}
        <path
          d="M 325,9 L 500,9 C 500,34 370,42 325,9 Z"
          fill="url(#tc-velvet-valance)"
        />
        <path
          d="M 340,9 C 365,34 465,34 485,9"
          stroke="#150101"
          strokeWidth="2.5"
          strokeOpacity="0.6"
        />
        <path
          d="M 340,10 C 365,35 465,35 485,10"
          stroke="#ef4444"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <path
          d="M 360,9 C 380,26 450,26 465,9"
          stroke="#150101"
          strokeWidth="2"
          strokeOpacity="0.45"
        />

        {/* Swag Central (160 a 340) - Sobreposto harmonicamente no centro */}
        <path
          d="M 160,9 L 340,9 C 315,48 185,48 160,9 Z"
          fill="url(#tc-velvet-valance)"
        />
        <path
          d="M 178,9 C 198,39 302,39 322,9"
          stroke="#150101"
          strokeWidth="2.5"
          strokeOpacity="0.65"
        />
        <path
          d="M 178,10 C 198,40 302,40 322,10"
          stroke="#ef4444"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M 198,9 C 214,28 286,28 302,9"
          stroke="#150101"
          strokeWidth="2"
          strokeOpacity="0.5"
        />

        {/* Acabamento de bainha suave na curva inferior dos festões */}
        <path
          d="M 0,34 C 25,42 155,42 175,9 M 160,9 C 185,48 315,48 340,9 M 325,9 C 370,42 475,42 500,34"
          stroke="#1a0202"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Roseta discreta em veludo escuro no encontro dos festões */}
        <g transform="translate(250, 9)">
          <circle cx="0" cy="0" r="4" fill="#1c0202" stroke="#550808" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

/* Cortina Lateral em Puro Veludo com Caimento Natural sem Amarra Dourada */
function TheaterSideDrape({ side = 'left' }) {
  const isRight = side === 'right';
  const idSuffix = side;

  return (
    <div className={`theater-curtain__drape theater-curtain__drape--${side}`} aria-hidden="true">
      <svg
        className="theater-curtain__drape-svg"
        viewBox="0 0 54 360"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={isRight ? { transform: 'scaleX(-1)' } : undefined}
      >
        <defs>
          <linearGradient id={`tc-velvet-drape-${idSuffix}`} x1="0" y1="0" x2="54" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#240303" />
            <stop offset="25%" stopColor="#4c0707" />
            <stop offset="60%" stopColor="#721010" />
            <stop offset="85%" stopColor="#8f1818" />
            <stop offset="100%" stopColor="#320202" />
          </linearGradient>
        </defs>

        {/* Silhueta da Cortina em curva suave abrindo espaço para a foto */}
        <path
          d="M 0,0 L 52,0 C 48,70 34,140 26,190 C 22,230 28,290 38,360 L 0,360 Z"
          fill={`url(#tc-velvet-drape-${idSuffix})`}
        />

        {/* Dobra 1 (externa, rente à moldura) */}
        <path
          d="M 12,0 C 11,70 8,140 6,190 C 5,230 7,290 10,360"
          stroke="#140101"
          strokeWidth="3"
          strokeOpacity="0.7"
        />
        <path
          d="M 13,0 C 12,70 9,140 7,190 C 6,230 8,290 11,360"
          stroke="#dc2626"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Dobra 2 (intermediária) */}
        <path
          d="M 26,0 C 24,70 17,140 13,190 C 11,230 15,290 20,360"
          stroke="#140101"
          strokeWidth="3"
          strokeOpacity="0.65"
        />
        <path
          d="M 27,0 C 25,70 18,140 14,190 C 12,230 16,290 21,360"
          stroke="#ef4444"
          strokeWidth="1.1"
          strokeOpacity="0.25"
        />

        {/* Dobra 3 (borda interna da cortina) */}
        <path
          d="M 40,0 C 37,70 26,140 20,190 C 17,230 22,290 29,360"
          stroke="#140101"
          strokeWidth="2.5"
          strokeOpacity="0.55"
        />
        <path
          d="M 41,0 C 38,70 27,140 21,190 C 18,230 23,290 30,360"
          stroke="#f87171"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Acabamento escuro de bainha de tecido na beirada interna */}
        <path
          d="M 52,0 C 48,70 34,140 26,190 C 22,230 28,290 38,360"
          stroke="#1a0202"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
}

export default function TheaterCurtainFrame({ src, alt, priority = false }) {
  return (
    <div className="theater-curtain">
      <div className="theater-curtain__proscenium">
        {/* Iluminação Cênica Suave do Palco (Spotlight central neutro) */}
        <div className="theater-curtain__spotlight" aria-hidden="true" />

        {/* Foto central como Atração no Palco */}
        <div className="theater-curtain__stage-window">
          <VacantImage
            src={src}
            alt={alt}
            className="theater-curtain__img"
            priority={priority}
          />
        </div>

        {/* Cortina Lateral Esquerda */}
        <TheaterSideDrape side="left" />

        {/* Cortina Lateral Direita */}
        <TheaterSideDrape side="right" />

        {/* Bandô Superior em Festão de Puro Veludo Vermelho */}
        <TheaterValance />

        {/* Tablado / Base do Palco sóbria e moderna */}
        <div className="theater-curtain__stage-floor" aria-hidden="true" />
      </div>
    </div>
  );
}
