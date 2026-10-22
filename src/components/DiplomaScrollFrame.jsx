'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

/* Ícone de Capelo / Chapéu de Formatura */
function GraduationCapIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" opacity="0.85" />
    </svg>
  );
}

/* Ícone de Ramos de Louro da Formatura */
function LaurelsIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 5c1 3 0 7-3 9" />
      <path d="M18 5c-1 3 0 7 3 9" />
      <path d="M8 8c1.5 2 1.5 5 0 7" />
      <path d="M16 8c-1.5 2-1.5 5 0 7" />
      <path d="M12 19v3" />
      <path d="M9 22h6" />
    </svg>
  );
}

/* Espiral Lateral Realista da Folha de Pergaminho Enrolada */
function ScrollSpiralEnd({ side = 'left' }) {
  const isRight = side === 'right';
  return (
    <div className={`diploma-scroll__spiral-wrap diploma-scroll__spiral-wrap--${side}`}>
      <svg
        width="26"
        height="38"
        viewBox="0 0 26 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="diploma-scroll__spiral-svg"
        style={isRight ? { transform: 'scaleX(-1)' } : undefined}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`cavityGrad-${side}`} cx="55%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1206" />
            <stop offset="45%" stopColor="#3E2610" />
            <stop offset="75%" stopColor="#6C4A26" />
            <stop offset="100%" stopColor="#966C3B" />
          </radialGradient>
          
          <linearGradient id={`parchmentRim-${side}`} x1="0" y1="0" x2="0" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5EED9" />
            <stop offset="30%" stopColor="#EADBBA" />
            <stop offset="70%" stopColor="#D0B683" />
            <stop offset="100%" stopColor="#9C7F4E" />
          </linearGradient>

          <linearGradient id={`coilGrad-${side}`} x1="0" y1="0" x2="26" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5EED9" />
            <stop offset="50%" stopColor="#E0CA9E" />
            <stop offset="100%" stopColor="#B89B65" />
          </linearGradient>
        </defs>

        {/* Fundo escuro da cavidade oca do interior do rolo */}
        <ellipse cx="14" cy="19" rx="11" ry="18" fill={`url(#cavityGrad-${side})`} />

        {/* Espiral Externa do Pergaminho */}
        <path
          d="M25 36.5 C16 37.5 4 33 3 20 C2 7 13 1.5 25 1.5"
          stroke={`url(#parchmentRim-${side})`}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Espiral Interna curvando em caracol */}
        <path
          d="M24 4.5 C16 4.5 7 10 7 19.5 C7 28 14 32.5 21 30.5 C25 29.5 25 24 23 20 C21 16 16 14 12 16.5 C9 18.5 9 22.5 12 24.5 C15 26 18 24 18 21 C18 19 16 18 14 19"
          stroke={`url(#coilGrad-${side})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Linha de borda fosca de papel */}
        <path
          d="M25 36.5 C16 37.5 4 33 3 20 C2 7 13 1.5 25 1.5"
          stroke="#FAF4E3"
          strokeWidth="0.8"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Linha de sombra suave na junção com o cilindro */}
        <path d="M24.5 1.5 V36.5" stroke="#4A341A" strokeWidth="1.2" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}

export default function DiplomaScrollFrame({ src, alt, priority = false }) {
  return (
    <div className="diploma-scroll">
      {/* Rolo 3D Superior do Diploma / Canudo de Formatura Desenrolando */}
      <div className="diploma-scroll__top-roll" aria-hidden="true">
        {/* Espiral lateral esquerda realista de papel enrolado */}
        <ScrollSpiralEnd side="left" />
        
        {/* Corpo cilíndrico do rolo do diploma */}
        <div className="diploma-scroll__roll-body">
          {/* Fita de cetim vermelha com medalhão de ouro */}
          <div className="diploma-scroll__ribbon">
            <span className="diploma-scroll__ribbon-band" />
            <div className="diploma-scroll__wax-seal" title="Certificação SOBEI">
              <GraduationCapIcon className="diploma-scroll__cap-icon" />
            </div>
            <span className="diploma-scroll__ribbon-tail diploma-scroll__ribbon-tail--left" />
            <span className="diploma-scroll__ribbon-tail diploma-scroll__ribbon-tail--right" />
          </div>
        </div>

        {/* Espiral lateral direita realista de papel enrolado */}
        <ScrollSpiralEnd side="right" />
      </div>

      {/* Folha de Pergaminho do Diploma se desenrolando para baixo */}
      <div className="diploma-scroll__parchment">
        {/* Moldura clássica de certificado com borda dourada ornamental */}
        <div className="diploma-scroll__inner-border">
          {/* Cabeçalho do Diploma de Qualificação */}
          <div className="diploma-scroll__header">
            <div className="diploma-scroll__header-badge">
              <LaurelsIcon className="diploma-scroll__laurels-icon" />
              <span className="diploma-scroll__cert-label">QUALIFICAÇÃO PROFISSIONAL</span>
              <LaurelsIcon className="diploma-scroll__laurels-icon" />
            </div>
            <h4 className="diploma-scroll__cert-title">CEDESP • FORMAÇÃO TÉCNICA</h4>
          </div>

          {/* Janela com a Fotografia das Aulas e Oficinas */}
          <div className="diploma-scroll__photo-window">
            <div className="diploma-scroll__photo-frame">
              <VacantImage
                src={src}
                alt={alt}
                className="diploma-scroll__img"
                priority={priority}
              />
            </div>
          </div>

          {/* Rodapé do Certificado / Selo de Conclusão */}
          <div className="diploma-scroll__footer">
            <span className="diploma-scroll__seal-text">
              SOBEI • CERTIFICADO DE CAPACITAÇÃO
            </span>
            <span className="diploma-scroll__stars">★ ★ ★ ★ ★</span>
          </div>
        </div>

        {/* Efeito 3D da borda enrolada inferior do pergaminho */}
        <div className="diploma-scroll__bottom-curl" aria-hidden="true" />
      </div>
    </div>
  );
}
