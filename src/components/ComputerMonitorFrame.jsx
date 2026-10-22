'use client';

import React from 'react';
import VacantImage from '@/components/VacantImage';

export default function ComputerMonitorFrame({ src, alt, priority = false }) {
  return (
    <div className="computer-monitor">
      {/* Corpo do Monitor (Gabinete da Tela) */}
      <div className="computer-monitor__cabinet">
        {/* Webcam superior */}
        <div className="computer-monitor__webcam" aria-hidden="true">
          <span className="computer-monitor__webcam-lens" />
        </div>

        {/* Tela Display com a Foto do Telecentro (somente a foto, sem botões) */}
        <div className="computer-monitor__screen">
          <VacantImage
            src={src}
            alt={alt}
            className="computer-monitor__img"
            priority={priority}
          />
        </div>

        {/* Borda inferior lisa do monitor */}
        <div className="computer-monitor__chin" aria-hidden="true" />
      </div>

      {/* Suporte e Base Metálica do Monitor */}
      <div className="computer-monitor__mount" aria-hidden="true">
        <div className="computer-monitor__neck" />
        <div className="computer-monitor__base" />
      </div>
    </div>
  );
}
