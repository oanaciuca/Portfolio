import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Realisations() {
  return (
    <section id="realisations" className="realisations">
      <motion.h2
        className="section__title"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        RÉALISATIONS
      </motion.h2>

      <div className="realisations__grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2, 
              ease: 'easeOut'
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
