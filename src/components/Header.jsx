import React from 'react';
import logo from '../assets/logo.gif';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src={logo} alt="Logo OC" width="60" height="40"/>
        </a>
        <nav>
          <ul className="header-menu">
            <li>
              <a href="#about" className="header-menu-link">
                A PROPOS
              </a>
            </li>
            <li>
              <a href="#competences" className="header-menu-link">
                COMPÉTENCES
              </a>
            </li>
            <li>
              <a href="#realisations" className="header-menu-link">
                RÉALISATIONS
              </a>
            </li>
            <li>
              <a href="#contact" className="header-menu-link">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
