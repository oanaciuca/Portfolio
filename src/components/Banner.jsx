import React from 'react';
import banner from '../assets/banner.jpg';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-text">
          <small className="banner-pretitle">Bonjour !</small>
          <h1 className="banner-title">
            Je suis Oana Ciuca,<br/>
            développeuse front-end
          </h1>
          <p className="banner-subtitle">
            Création d’interfaces modernes et responsives
          </p>
        </div>
        <div className="banner-image">
          <img src={banner} alt="Illustration développement front-end" />
        </div>
      </div>
    </section>
  );
}
