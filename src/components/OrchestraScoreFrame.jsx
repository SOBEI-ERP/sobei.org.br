'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

/* Clave de Sol Clássica da Orquestra Sinfônica */
function TrebleClefIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 62"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.5 2C11.8 2 11.2 2.7 11.2 3.6c0 1.2.6 2.2 1.3 3.6 1.4 2.8 2.5 5.8 2.5 9 0 2.2-.5 4.3-1.4 6.2-.2-.5-.4-1-.7-1.4-1.2-1.7-2.9-2.7-5-2.7-3.6 0-6.4 2.9-6.4 6.6 0 3.6 2.7 6.4 6.1 6.4 1.7 0 3.3-.7 4.5-1.9.1 1.2.1 2.4.1 3.6 0 4.1-.7 8.3-2.1 12.1-1.1 3-2.7 4.8-4.5 4.8-1.5 0-2.6-1.1-2.6-2.6 0-1.2.9-2.2 2.1-2.2.4 0 .8.1 1.1.4.2.2.4.3.7.3.3 0 .6-.3.6-.6 0-.6-.6-1.2-1.4-1.2-2.1 0-3.8 1.7-3.8 3.9 0 2.5 2 4.4 4.6 4.4 3.1 0 5.4-2.8 6.9-6.9 1.5-4.1 2.2-8.5 2.2-13 0-1.2-.1-2.4-.2-3.6 1.2.9 2.6 1.4 4.1 1.4 3.1 0 5.5-2.4 5.5-5.5 0-3.3-2.6-5.8-6.1-5.8-1.2 0-2.3.3-3.2.9.8-1.8 1.2-3.8 1.2-5.8 0-3.5-1.3-6.8-2.9-9.8C13.6 3.8 13 2.9 13 2.2c0-.1-.2-.2-.5-.2zm-4.9 19.3c1.9 0 3.3 1.2 4.1 2.9-.5 1-1.2 1.9-2.2 2.5-.6.4-1.3.6-2 .6-2.1 0-3.7-1.6-3.7-3.6 0-1.4 1.7-2.4 3.8-2.4zm5.8 5.6c.7-.6 1.4-1.3 1.8-2.2.8.2 1.4.9 1.4 1.8 0 1.5-1.2 2.7-2.7 2.7-.2 0-.3 0-.5-.1v-2.2z" />
    </svg>
  );
}

export default function OrchestraScoreFrame({ src, alt, priority = false }) {
  return (
    <div className="orchestra-score">
      {/* Mesa da Estante de Música Sinfônica (Metal grafite fosco) */}
      <div className="orchestra-score__desk">
        
        {/* Clipe / Prendedor Metálico Superior de Partitura */}
        <div className="orchestra-score__clip" aria-hidden="true" title="Prendedor de Partitura">
          <span className="orchestra-score__clip-screw" />
          <span className="orchestra-score__clip-ridge" />
        </div>

        {/* Folha da Partitura de Concerto (Papel Marfim Encorpado) */}
        <div className="orchestra-score__sheet">
          <div className="orchestra-score__border">
            
            {/* Cabeçalho da Partitura com Pauta Musical, Clave de Sol e Título */}
            <div className="orchestra-score__header">
              <div className="orchestra-score__stave-badge">
                <TrebleClefIcon className="orchestra-score__clef-icon" />
                <h4 className="orchestra-score__title">ORQUESTRA JOVEM</h4>
              </div>

              {/* Fórmula de Compasso 3/3 */}
              <div className="orchestra-score__time-sig" title="Compasso 3/3">
                <span>3</span>
                <span>3</span>
              </div>
            </div>

            {/* Janela Central com a Fotografia da Orquestra */}
            <div className="orchestra-score__photo-window">
              <div className="orchestra-score__photo-frame">
                <VacantImage
                  src={src}
                  alt={alt}
                  className="orchestra-score__img"
                  priority={priority}
                />
              </div>
            </div>

            {/* Pauta Musical Inferior com Pentagrama e Compasso Final */}
            <div className="orchestra-score__footer">
              <div className="orchestra-score__stave-lines" aria-hidden="true">
                <span className="orchestra-score__stave-line" />
                <span className="orchestra-score__stave-line" />
                <span className="orchestra-score__stave-line" />
                <span className="orchestra-score__stave-line" />
                <span className="orchestra-score__stave-line" />
              </div>

              {/* Barra Dupla Final de Compasso */}
              <div className="orchestra-score__finale" aria-hidden="true" title="Compasso Final">
                <span className="orchestra-score__thin-bar" />
                <span className="orchestra-score__thick-bar" />
              </div>
            </div>

          </div>
        </div>

        {/* Lábio / Borda de Apoio Inferior da Estante de Música com a Batuta */}
        <div className="orchestra-score__lip" aria-hidden="true">
          <span className="orchestra-score__page-retainer orchestra-score__page-retainer--left" title="Prendedor esquerdo" />
          
          {/* Batuta do Maestro repousando na estante */}
          <div className="orchestra-score__baton" title="Batuta do Maestro">
            <span className="orchestra-score__baton-handle" />
            <span className="orchestra-score__baton-collar" />
            <span className="orchestra-score__baton-shaft" />
          </div>

          <span className="orchestra-score__page-retainer orchestra-score__page-retainer--right" title="Prendedor direito" />
        </div>

      </div>
    </div>
  );
}
