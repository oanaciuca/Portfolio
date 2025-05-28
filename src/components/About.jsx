import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section__title">A PROPOS</h2>
      <div className="about__content">
        <div className="about__block">
          <h3 className="section__subtitle">Présentation</h3>
          <p className="about__text">
            De formation ingénieure, j’ai récemment suivi une formation en développement web dans le
            cadre d’une reconversion professionnelle. Durant cette formation, j’ai réalisé plusieurs
            projets concrets qui m’ont permis d’acquérir les bases nécessaires pour débuter dans ce
            métier. Je souhaite désormais approfondir ces compétences en intégrant une équipe
            professionnelle.
          </p>
        </div>
        <div className="about__block">
          <h3 className="section__subtitle">Formations</h3>
          <ul className="about__list">
            <li>Ingénierie Mécanique – Mécanique de précision, Université Polytechnique de Bucarest</li>
            <li>Formation d’intégrateur web – OpenClassrooms</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
