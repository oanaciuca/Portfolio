import React from 'react';
import { skillsData } from '../data/skillsData';

export default function Competences() {
  const BASE = 64; // taille de référence

  return (
    <section id="competences" className="competences">
      <h2 className="section__title">COMPÉTENCES</h2>
      {skillsData.map(({ category, icons }) => (
        <div key={category} className="competences__group">
          <h3 className="section__subtitle">{category}</h3>
          <div className="competences__icons">
            {icons.map(({ src, alt, scale = 1 }) => {
              const size = BASE * scale; 
              return (
                <div
                  key={alt}
                  className="icon-container"
                  style={{ width: size, height: size }}
                >
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
