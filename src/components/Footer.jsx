import React from 'react';
import logo        from '../assets/logo.gif';
import githubIcon  from '../assets/github.svg';
import mailIcon    from '../assets/mail.svg';
import whatsappIcon from '../assets/whatsapp.svg';

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneNumber = '40724173715';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logo} alt="Logo" className="footer__logo" />

        <p className="footer__text">
          © {year} Oana Ciuca — Tous droits réservés.
        </p>

        <div className="footer__links">
          <a
            href="https://github.com/oanaciuca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="footer__icon" />
          </a>
          <a href="#contact" aria-label="Aller à la section contact">
            <img src={mailIcon} alt="Contactez-moi" className="footer__icon" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-moi sur WhatsApp"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="footer__icon"
            />
          </a>
        </div>
      </div>  
    </footer>
  );
}
