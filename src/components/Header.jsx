import React, { useState } from 'react';
import logo from '../assets/logo.gif';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src={logo} alt="Logo OC" width="60" height="40"/>
        </a>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Menu mobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={`header-menu ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" className="header-menu-link" onClick={closeMenu}>
                A PROPOS
              </a>
            </li>
            <li>
              <a href="#competences" className="header-menu-link" onClick={closeMenu}>
                COMPÉTENCES
              </a>
            </li>
            <li>
              <a href="#realisations" className="header-menu-link" onClick={closeMenu}>
                RÉALISATIONS
              </a>
            </li>
            <li>
              <a href="#contact" className="header-menu-link" onClick={closeMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
