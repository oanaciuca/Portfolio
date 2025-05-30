import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Competences() {
  const BASE = 64;

  return (
    <section id="competences" className="competences">
      <motion.h2
        className="section__title"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        COMPÉTENCES
      </motion.h2>

      {skillsData.map(({ category, icons }, groupIndex) => (
        <motion.div
          key={category}
          className="competences__group"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: groupIndex * 0.3 }}
        >
          <h3 className="section__subtitle">{category}</h3>
          <div className="competences__icons">
            {icons.map(({ src, alt, scale = 1 }, iconIndex) => {
              const size = BASE * scale;
              return (
                <motion.div
                  key={alt}
                  className="icon-container"
                  style={{ width: size, height: size }}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.3 + iconIndex * 0.05 }}
                >
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
