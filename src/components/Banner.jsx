import React from 'react';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <header className="banner-text">
          <small className="banner-pretitle">Bonjour !</small>
          <h1 className="banner-title">
            Je suis Oana Ciuca,<br/>
            développeuse front-end
          </h1>
          <p className="banner-subtitle">
            Création d’interfaces modernes et responsives
          </p>
        </header>
        <div className="banner-image">
          <img src="/assets/banner.jpg" alt="Illustration développement front-end" />
        </div>
      </div>
    </section>
  );
}