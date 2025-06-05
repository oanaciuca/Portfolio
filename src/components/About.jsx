import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const titleZoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        className="section__title"
        variants={titleZoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        A PROPOS
      </motion.h2>

      <div className="about__content">
        <motion.div
          className="about__block"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="section__subtitle">Présentation</h3>
          <p className="about__text">
            De formation ingénieure, j’ai récemment suivi une formation en développement web dans le
            cadre d’une reconversion professionnelle. Durant cette formation, j’ai réalisé plusieurs projets concrets qui m’ont permis d’acquérir les bases nécessaires pour débuter dans ce métier. Je souhaite désormais approfondir ces compétences en intégrant une équipe professionnelle.
          </p>
        </motion.div>

        <motion.div
          className="about__block"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="section__subtitle">Formations</h3>
          <ul className="about__list">
            <li>Ingénierie Mécanique – Université Polytechnique de Bucarest</li>
            <li>Formation d’intégrateur web – OpenClassrooms</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
