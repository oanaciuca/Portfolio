import React from 'react';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

export default function Realisations() {
  return (
    <section id="realisations" className="realisations">
      <h2 className="section__title">RÉALISATIONS</h2>
      <div className="realisations__grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
