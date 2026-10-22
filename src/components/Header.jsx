'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'projects' | 'units' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();



  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Handle clicking outside to close dropdowns and mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeAllMenus();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fechar dropdowns e menu mobile ao mudar de rota
  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (active) {
        closeAllMenus();
      }
    });
    return () => {
      active = false;
    };
  }, [pathname]);

  const [lastActiveDropdown, setLastActiveDropdown] = useState(null);

  // Rastrear último dropdown ativo para animações de saída
  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => {
      if (active && activeDropdown) {
        setLastActiveDropdown(activeDropdown);
      }
    });
    return () => {
      active = false;
    };
  }, [activeDropdown]);

  const handleDropdownToggle = (type) => {
    if (activeDropdown === type) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(type);
    }
  };

  return (
    <header
      className={`header ${activeDropdown ? 'header--dropdown-active' : ''} ${isMobileMenuOpen ? 'header--mobile-open' : ''}`}
      ref={headerRef}
    >
      <div className="header__container">

        {/* Logo */}
        <Link href="/" className="header__logo" onClick={closeAllMenus}>
          <Image
            src="/images/logo-header.webp"
            alt="SOBEI Logo"
            width={60}
            height={60}
            className="header__logo-img"
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav 
          id="header-main-nav"
          aria-label="Navegação principal"
          className={`header__nav ${isMobileMenuOpen ? 'header__nav--mobile-open' : ''} ${activeDropdown ? 'header__nav--dropdown-active' : ''} ${lastActiveDropdown ? `header__nav--origin-${lastActiveDropdown}` : ''}`}
        >
          <ul className="header__nav-list">

            {/* Mobile CTA inside nav */}
            <li className="header__nav-item header__nav-item--mobile-cta">
              <Link href="/vagas" className="header__btn" onClick={closeAllMenus}>
                Trabalhe conosco
              </Link>
            </li>

            {/* Sobre a Sobei Link */}
            <li className="header__nav-item">
              <Link href="/" className="header__nav-link" onClick={closeAllMenus}>
                Sobre a Sobei
              </Link>
            </li>

            {/* Nossos Projetos Dropdown Tab */}
            <li
              className={`header__nav-item ${activeDropdown === 'projects' ? 'header__nav-item--active' : ''}`}
            >
              <button
                type="button"
                onClick={() => handleDropdownToggle('projects')}
                className={`header__nav-link ${activeDropdown === 'projects' ? 'header__nav-link--active' : ''}`}
                aria-expanded={activeDropdown === 'projects'}
                aria-haspopup="true"
                aria-controls="dropdown-projects"
              >
                Nossos projetos
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Mobile inline dropdown for projects */}
              {activeDropdown === 'projects' && (
                <ul className="header__mobile-dropdown" id="dropdown-projects-mobile">
                  <li><Link href="/projetos?id=ccinter" className="header__mobile-dropdown-link" onClick={closeAllMenus}>CCINTER</Link></li>
                  <li><Link href="/projetos?id=cedesp" className="header__mobile-dropdown-link" onClick={closeAllMenus}>CEDESP</Link></li>
                  <li><Link href="/projetos?id=nci-imbuias" className="header__mobile-dropdown-link" onClick={closeAllMenus}>NCI</Link></li>
                  <li><Link href="/projetos?id=orquestra" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Orquestra Jovem</Link></li>
                  <li><Link href="/projetos?id=telecentro" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Telecentro</Link></li>
                </ul>
              )}
            </li>

            {/* Nossas Unidades Dropdown Tab */}
            <li
              className={`header__nav-item ${activeDropdown === 'units' ? 'header__nav-item--active' : ''}`}
            >
              <button
                type="button"
                onClick={() => handleDropdownToggle('units')}
                className={`header__nav-link ${activeDropdown === 'units' ? 'header__nav-link--active' : ''}`}
                aria-expanded={activeDropdown === 'units'}
                aria-haspopup="true"
                aria-controls="dropdown-units"
              >
                Nossas unidades
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Mobile inline dropdown for units */}
              {activeDropdown === 'units' && (
                <ul className="header__mobile-dropdown" id="dropdown-units-mobile">
                  <li><Link href="/unidades?id=araucarias" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Araucárias</Link></li>
                  <li><Link href="/unidades?id=cedro" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Cedro</Link></li>
                  <li><Link href="/unidades?id=oliveiras" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Oliveiras</Link></li>
                  <li><Link href="/unidades?id=macaubas" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Macaúbas</Link></li>
                  <li><Link href="/unidades?id=montanaro" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Montanaro</Link></li>
                  <li><Link href="/unidades?id=leblon" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Leblon</Link></li>
                  <li><Link href="/unidades?id=imbuias" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Imbuias</Link></li>
                  <li><Link href="/unidades?id=acacias" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Acácias</Link></li>
                  <li><Link href="/unidades?id=ipes" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Ipês</Link></li>
                  <li><Link href="/unidades?id=bela-vista" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Bela Vista</Link></li>
                  <li><Link href="/unidades?id=sabias" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Sabiás</Link></li>
                  <li><Link href="/unidades?id=orquideas" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Orquídeas</Link></li>
                  <li><Link href="/unidades?id=jacomo" className="header__mobile-dropdown-link" onClick={closeAllMenus}>Cerejeiras/Jacomo Tatto</Link></li>
                </ul>
              )}
            </li>

          </ul>
        </nav>

        {/* Action Button */}
        <div className="header__cta">
          <Link href="/vagas" className="header__btn">
            Trabalhe conosco
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          className={`header__toggle ${isMobileMenuOpen ? 'header__toggle--active' : ''}`}
          onClick={() => {
            if (isMobileMenuOpen) {
              closeAllMenus();
            } else {
              setIsMobileMenuOpen(true);
            }
          }}
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="header-main-nav"
        >
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
        </button>

      </div>

      {/* --- Projects Dropdown --- */}
      <div 
        id="dropdown-projects"
        className={`header__dropdown ${activeDropdown === 'projects' ? 'header__dropdown--active' : ''}`}
        aria-hidden={activeDropdown !== 'projects'}
      >
        <div className="header__dropdown-container">
          <ul className="header__projects-list">
            <li>
              <Link href="/projetos?id=ccinter" className="header__projects-link" onClick={closeAllMenus}>CCINTER</Link>
            </li>
            <li>
              <Link href="/projetos?id=cedesp" className="header__projects-link" onClick={closeAllMenus}>CEDESP</Link>
            </li>
            <li>
              <Link href="/projetos?id=nci-imbuias" className="header__projects-link" onClick={closeAllMenus}>NCI</Link>
            </li>
            <li>
              <Link href="/projetos?id=orquestra" className="header__projects-link" onClick={closeAllMenus}>Orquestra Jovem</Link>
            </li>
            <li>
              <Link href="/projetos?id=telecentro" className="header__projects-link" onClick={closeAllMenus}>Telecentro</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Units Dropdown --- */}
      <div 
        id="dropdown-units"
        className={`header__dropdown ${activeDropdown === 'units' ? 'header__dropdown--active' : ''}`}
        aria-hidden={activeDropdown !== 'units'}
      >
        <div className="header__dropdown-container">
          <div className="header__units-grid">
            {/* Col 1 */}
            <div className="header__units-column">
              <Link href="/unidades?id=araucarias" className="header__units-link" onClick={closeAllMenus}>Araucárias</Link>
              <Link href="/unidades?id=cedro" className="header__units-link" onClick={closeAllMenus}>Cedro</Link>
              <Link href="/unidades?id=oliveiras" className="header__units-link" onClick={closeAllMenus}>Oliveiras</Link>
              <Link href="/unidades?id=macaubas" className="header__units-link" onClick={closeAllMenus}>Macaúbas</Link>
            </div>
            {/* Col 2 */}
            <div className="header__units-column">
              <Link href="/unidades?id=montanaro" className="header__units-link" onClick={closeAllMenus}>Montanaro</Link>
              <Link href="/unidades?id=leblon" className="header__units-link" onClick={closeAllMenus}>Leblon</Link>
              <Link href="/unidades?id=imbuias" className="header__units-link" onClick={closeAllMenus}>Imbuias</Link>
            </div>
            {/* Col 3 */}
            <div className="header__units-column">
              <Link href="/unidades?id=acacias" className="header__units-link" onClick={closeAllMenus}>Acácias</Link>
              <Link href="/unidades?id=ipes" className="header__units-link" onClick={closeAllMenus}>Ipês</Link>
              <Link href="/unidades?id=bela-vista" className="header__units-link" onClick={closeAllMenus}>Bela Vista</Link>
            </div>
            {/* Col 4 */}
            <div className="header__units-column">
              <Link href="/unidades?id=sabias" className="header__units-link" onClick={closeAllMenus}>Sabiás</Link>
              <Link href="/unidades?id=orquideas" className="header__units-link" onClick={closeAllMenus}>Orquídeas</Link>
              <Link href="/unidades?id=jacomo" className="header__units-link" onClick={closeAllMenus}>Cerejeiras/Jacomo Tatto</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
