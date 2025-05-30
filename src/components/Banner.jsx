import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <header className="banner-text">
          <motion.small
            className="banner-pretitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Bonjour !
          </motion.small>

          <motion.h1
            className="banner-title"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Je suis Oana Ciuca,<br />
            développeuse front-end
          </motion.h1>

          <motion.p
            className="banner-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Création d’interfaces modernes et responsives
          </motion.p>
        </header>

        <motion.div
          className="banner-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img
            src="/assets/banner.webp"
            alt="Illustration développement front-end"
            width="490"
            height="442"
          />
        </motion.div>
      </div>
    </section>
  );
}
