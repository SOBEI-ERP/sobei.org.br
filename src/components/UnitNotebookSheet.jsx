'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

/* Traço de lápis desenhado à mão (doodle) */
function PencilStarDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M16 3l3.5 9h9.5l-7.5 5.5 3 9.5-8.5-6-8.5 6 3-9.5-7.5-5.5h9.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PencilPaperclipDoodle({ className = '' }) {
  return (
    <svg viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M9 13v18a6 6 0 0 0 12 0V9a4 4 0 0 0-8 0v21a2 2 0 0 0 4 0V13"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function UnitNotebookSheet({ unitName, imageSrc, priority = false }) {
  return (
    <div className="unit-notebook">
      <div className="unit-notebook__paper">
        {/* Furos de fichário / espiral no canto esquerdo da folha */}
        <div className="unit-notebook__holes" aria-hidden="true">
          <span className="unit-notebook__hole" />
          <span className="unit-notebook__hole" />
          <span className="unit-notebook__hole" />
          <span className="unit-notebook__hole" />
        </div>

        {/* Linha de margem escolar vertical vermelha */}
        <div className="unit-notebook__margin-line" aria-hidden="true" />

        {/* Clipe de papel decorativo no canto superior */}
        <div className="unit-notebook__clip" aria-hidden="true">
          <PencilPaperclipDoodle className="unit-notebook__clip-icon" />
        </div>

        {/* Cabeçalho com o Nome da Unidade escrito em Lápis Grafite */}
        <div className="unit-notebook__header">
          <div className="unit-notebook__pencil-row">
            <span className="unit-notebook__pencil-badge" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
            </span>
            <h3 className="unit-notebook__pencil-title">
              {unitName}
            </h3>
          </div>
          {/* Sublinhado em grafite feito à mão */}
          <svg className="unit-notebook__pencil-underline" viewBox="0 0 260 8" fill="none" aria-hidden="true">
            <path
              d="M2 5.5c45-3 90-2 135-1.5 40 .4 80-2.5 120-1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Foto da unidade colocada/colada na folha do caderno */}
        <div className="unit-notebook__photo-card">
          {/* Fita adesiva / durex fixando a foto no caderno */}
          <div className="unit-notebook__tape" aria-hidden="true" />

          {/* Moldura da foto estilo polaroid/revelação */}
          <div className="unit-notebook__photo-wrap">
            <VacantImage
              src={imageSrc}
              alt={`Foto da unidade ${unitName}`}
              className="unit-notebook__img"
              priority={priority}
            />
          </div>

          <div className="unit-notebook__photo-footer">
            <span className="unit-notebook__photo-legend">
              SOBEI
            </span>
            <PencilStarDoodle className="unit-notebook__star-doodle" />
          </div>
        </div>
      </div>
    </div>
  );
}
