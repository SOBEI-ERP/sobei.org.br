'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

export default function VintageFilmFrame({ src, alt, priority = false }) {
  // 8 furos de perfuração (sprocket holes) ao longo do filme 35mm
  const sprocketHoles = Array.from({ length: 8 });

  return (
    <div className="vintage-film">
      <div className="vintage-film__strip">
        {/* Efeito 3D da borda curvada do rolo de filme à esquerda */}
        <div className="vintage-film__roll-spool" aria-hidden="true">
          <span className="vintage-film__roll-cap vintage-film__roll-cap--top" />
          <span className="vintage-film__roll-core" />
          <span className="vintage-film__roll-cap vintage-film__roll-cap--bottom" />
        </div>

        {/* Trilha Superior de Perfurações 35mm */}
        <div className="vintage-film__track vintage-film__track--top" aria-hidden="true">
          <div className="vintage-film__holes">
            {sprocketHoles.map((_, i) => (
              <span key={`top-${i}`} className="vintage-film__hole" />
            ))}
          </div>
          <div className="vintage-film__markings">
            <span>SOBEI SAFETY FILM</span>
            <span>▶ 18</span>
            <span>ISO 400</span>
          </div>
        </div>

        {/* Janela Central do Fotograma / Fotografia */}
        <div className="vintage-film__frame">
          <div className="vintage-film__lens-glare" aria-hidden="true" />
          <div className="vintage-film__img-wrapper">
            <VacantImage
              src={src}
              alt={alt}
              className="vintage-film__img"
              priority={priority}
            />
          </div>
        </div>

        {/* Trilha Inferior de Perfurações 35mm */}
        <div className="vintage-film__track vintage-film__track--bottom" aria-hidden="true">
          <div className="vintage-film__holes">
            {sprocketHoles.map((_, i) => (
              <span key={`bottom-${i}`} className="vintage-film__hole" />
            ))}
          </div>
          <div className="vintage-film__markings">
            <span>▶ 18A</span>
            <span>CONVIVÊNCIA INTERGERACIONAL</span>
            <span>35mm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
