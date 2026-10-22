'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import UnitNotebookSheet from '@/components/UnitNotebookSheet';
import { unitsData } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

function UnitsContent() {
  const searchParams = useSearchParams();
  const queryId = searchParams.get('id');
  const activeId = (queryId && unitsData[queryId]) ? queryId : 'araucarias';

  const unit = unitsData[activeId] || unitsData['araucarias'];

  return (
    <div>
      {/* Main Content Layout */}
      <section className="container">
        <div className="details-layout">
          
          {/* Unit Details */}
          <main className="unit-detail fade-in" key={activeId}>
            <div className="unit-detail__header-grid">
              
              {/* Left Column: Folha de Caderno Amarelada com Nome em Lápis e Foto da Unidade */}
              <UnitNotebookSheet
                unitName={unit.name}
                imageSrc={unit.image}
                priority={true}
              />

              {/* Right Column: Details Info */}
              <div className="unit-detail__info-column unit-detail__info-column--cut">
                {/* Símbolo de tesoura cortando a linha pontilhada */}
                <div className="unit-detail__cut-scissors" aria-hidden="true" title="Recorte aqui">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                  </svg>
                </div>

                <h2 className="unit-detail__title">Onde estamos:</h2>
                
                <div className="unit-detail__info-list">
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">Endereço</span>
                    <span className="unit-detail__info-value">{unit.address}</span>
                  </div>
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">Horário de Funcionamento</span>
                    <span className="unit-detail__info-value">Segunda a Sexta, das 08h às 17h</span>
                  </div>
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">Contato</span>
                    <span className="unit-detail__info-value">{unit.phone}</span>
                  </div>
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">Capacidade de Atendimento</span>
                    <span className="unit-detail__info-value">{unit.capacity}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Description Below */}
            <div className="unit-detail__description-section">
              <h3 className="unit-detail__section-title">Sobre a Unidade</h3>
              <p className="unit-detail__text">{unit.description}</p>
            </div>

            {/* Contact / Registration Form */}
            <ContactForm unitTitle={unit.name} />
          </main>

        </div>
      </section>
    </div>
  );
}

export default function UnitsPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Carregando unidades...</div>}>
      <UnitsContent />
    </Suspense>
  );
}
