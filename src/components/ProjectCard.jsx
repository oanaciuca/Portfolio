import React, { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, image, description, skills, repo, demo } = project;

  const imgSrc = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <>
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2>{title}</h2>
            <img src={imgSrc} alt={title} />
            <p>{description}</p>
            <ul>
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div className="modal-links">
              {repo && <a href={repo} target="_blank" rel="noopener noreferrer">Voir le code</a>}
              {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Voir la démo</a>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
