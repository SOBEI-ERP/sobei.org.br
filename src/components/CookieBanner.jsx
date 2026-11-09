'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import '@/styles/cookie-banner.css';

const STORAGE_KEY = 'sobei_cookie_consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Falha ao acessar localStorage (ex: navegação restrita/modo anônimo estrito)
    }
  }, []);

  const handleConsent = (level) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ level, date: new Date().toISOString() })
      );
    } catch {
      // Ignora falhas de escrita
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="cookie-banner"
      aria-label="Aviso de Consentimento de Cookies e Privacidade"
      role="region"
    >
      <div className="cookie-banner__card">
        {/* Botão de Fechar Rápido (Assume essenciais) */}
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          aria-label="Fechar aviso e manter apenas cookies essenciais"
          className="cookie-banner__close"
        >
          <X size={18} />
        </button>

        {/* Cabeçalho */}
        <div className="cookie-banner__header">
          <div className="cookie-banner__icon-box">
            <Cookie size={20} />
          </div>
          <div className="cookie-banner__title-group">
            <h3 className="cookie-banner__title">
              Privacidade & Cookies
              <span className="cookie-banner__title-badge">
                <ShieldCheck size={16} />
              </span>
            </h3>
            <span className="cookie-banner__subtitle">
              Em conformidade com a LGPD
            </span>
          </div>
        </div>

        {/* Descrição */}
        <p className="cookie-banner__description">
          A SOBEI utiliza cookies essenciais para manter o correto funcionamento deste portal institucional, além de métricas anônimas de desempenho para garantir acessibilidade e estabilidade. Você pode aceitar todos ou manter apenas os essenciais.
        </p>

        {/* Links Legais */}
        <div className="cookie-banner__links">
          <Link href="/politica-de-privacidade" className="cookie-banner__link">
            Política de Privacidade
          </Link>
          <span className="cookie-banner__divider" aria-hidden="true">•</span>
          <Link href="/termos-de-uso" className="cookie-banner__link">
            Termos de Uso
          </Link>
        </div>

        {/* Ações */}
        <div className="cookie-banner__actions">
          <button
            type="button"
            onClick={() => handleConsent('all')}
            className="cookie-banner__btn cookie-banner__btn--primary"
          >
            Aceitar Todos
          </button>
          <button
            type="button"
            onClick={() => handleConsent('essential')}
            className="cookie-banner__btn cookie-banner__btn--secondary"
          >
            Apenas Essenciais
          </button>
        </div>
      </div>
    </aside>
  );
}
