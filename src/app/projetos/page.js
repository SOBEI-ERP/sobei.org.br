'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import VacantImage from '@/components/VacantImage';
import VintageFilmFrame from '@/components/VintageFilmFrame';
import DiplomaScrollFrame from '@/components/DiplomaScrollFrame';
import ComputerMonitorFrame from '@/components/ComputerMonitorFrame';
import TheaterCurtainFrame from '@/components/TheaterCurtainFrame';
import OrchestraScoreFrame from '@/components/OrchestraScoreFrame';
import { projectsData } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const queryId = searchParams.get('id');
  const activeId = (queryId && projectsData[queryId]) ? queryId : 'ccinter';

  const project = projectsData[activeId] || projectsData['ccinter'];
  const isCcinter = activeId === 'ccinter' || project.title.toLowerCase().includes('ccinter');
  const isCedesp = activeId === 'cedesp' || project.title.toLowerCase().includes('cedesp');
  const isTelecentro = activeId === 'telecentro' || project.title.toLowerCase().includes('telecentro');
  const isNci = activeId.startsWith('nci') || project.title.toLowerCase().includes('nci');
  const isOrquestra = activeId === 'orquestra' || project.title.toLowerCase().includes('orquestra');

  return (
    <div>
      {/* Main Content Layout */}
      <section className="container">
        <div className="details-layout">
          
          {/* Project Details */}
          <main className="unit-detail fade-in" key={activeId}>
            <div className="unit-detail__header-grid">
              
              {/* Left Column: Photo (Rolo de filme para CCINTER / Rolo de diploma para CEDESP / Monitor para Telecentro / Cortinas de Teatro para NCI / Estante de Partitura para Orquestra Jovem) */}
              {isCcinter ? (
                <VintageFilmFrame
                  src={project.image}
                  alt={project.title}
                  priority={true}
                />
              ) : isCedesp ? (
                <DiplomaScrollFrame
                  src={project.image}
                  alt={project.title}
                  priority={true}
                />
              ) : isTelecentro ? (
                <ComputerMonitorFrame
                  src={project.image}
                  alt={project.title}
                  priority={true}
                />
              ) : isNci ? (
                <TheaterCurtainFrame
                  src={project.image}
                  alt={project.title}
                  priority={true}
                />
              ) : isOrquestra ? (
                <OrchestraScoreFrame
                  src={project.image}
                  alt={project.title}
                  priority={true}
                />
              ) : (
                <div className="unit-detail__image-wrapper">
                  <VacantImage
                    src={project.image}
                    alt={project.title}
                    className="unit-detail__image"
                  />
                </div>
              )}

              {/* Right Column: Details Info (Barra divisória estilizada: fio USB no Telecentro / Batuta do Maestro na Orquestra Jovem) */}
              <div className={`unit-detail__info-column ${isTelecentro ? 'unit-detail__info-column--usb-mouse' : ''} ${isOrquestra ? 'unit-detail__info-column--conductor-baton' : ''}`}>
                {isOrquestra && (
                  <div className="unit-detail__conductor-baton" aria-hidden="true" title="Batuta do Maestro">
                    <svg
                      width="18"
                      height="46"
                      viewBox="0 0 18 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Cabo anatômico de madeira em gota */}
                      <path
                        d="M9 2 C6 2 4 5 4 10 C4 16 7 20 9 22 C11 20 14 16 14 10 C14 5 12 2 9 2 Z"
                        fill="url(#baton-wood)"
                        stroke="#451a03"
                        strokeWidth="1"
                      />
                      {/* Anel de união torneado */}
                      <rect x="7" y="21" width="4" height="3" rx="0.5" fill="#D97706" stroke="#92400e" strokeWidth="0.8" />
                      {/* Haste fina afilada em marfim descendo para a linha divisória */}
                      <path
                        d="M8.5 24 L8.5 46 L9.5 46 L9.5 24 Z"
                        fill="#FAF5FF"
                        stroke="#1e1b4b"
                        strokeWidth="0.8"
                      />
                      <defs>
                        <linearGradient id="baton-wood" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#92400e" />
                          <stop offset="50%" stopColor="#b45309" />
                          <stop offset="100%" stopColor="#78350f" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                {isTelecentro && (
                  <div className="unit-detail__usb-mouse" aria-hidden="true" title="Mouse USB">
                    <svg
                      width="22"
                      height="42"
                      viewBox="0 0 22 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Curva suave do fio que sai da divisória e entra no mouse */}
                      <path
                        d="M1 0V1C1 2.4 2.1 3.5 3.5 3.5H8.5C11.3 3.5 13.5 5.7 13.5 8.5V15"
                        stroke="#000000"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Corpo do mouse em cápsula compacta branca com borda preta */}
                      <rect
                        x="6"
                        y="15"
                        width="15"
                        height="26"
                        rx="7.5"
                        fill="#FFFFFF"
                        stroke="#000000"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Linha vertical central */}
                      <line
                        x1="13.5"
                        y1="15"
                        x2="13.5"
                        y2="22"
                        stroke="#000000"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      {/* Botão de rolagem (scroll wheel) verde-água/teal */}
                      <rect
                        x="11.5"
                        y="22"
                        width="4"
                        height="8"
                        rx="2"
                        fill="#8EA8A1"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <h2 className="unit-detail__title">{project.title}</h2>
                
                <div className="unit-detail__info-list">
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">Público-Alvo</span>
                    <span className="unit-detail__info-value">{project.ageGroup}</span>
                  </div>
                  
                  <div className="unit-detail__info-item">
                    <span className="unit-detail__info-label">O que o projeto oferece</span>
                    <ul className="detail-card__list" style={{ marginTop: '5px', marginBottom: '0' }}>
                      {project.benefits.map((benefit, index) => (
                        <li key={index} className="detail-card__list-item">
                          <span style={{ fontSize: '13px', fontWeight: '500' }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Description Below */}
            <div className="unit-detail__description-section">
              <h3 className="unit-detail__section-title">Sobre o Projeto</h3>
              <p className="unit-detail__text">{project.description}</p>
            </div>

            {/* Contact / Registration Form */}
            <ContactForm unitTitle={project.title} />
          </main>

        </div>
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>Carregando projetos...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
