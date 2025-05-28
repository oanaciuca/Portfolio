import React from 'react';

import htmlIcon     from '../assets/html.svg';
import cssIcon      from '../assets/css.svg';
import jsIcon       from '../assets/js.svg';
import reactIcon    from '../assets/react.svg';
import reduxIcon    from '../assets/redux.svg';
import sassIcon     from '../assets/sass.svg';

import postmanIcon  from '../assets/postman.svg';
import swaggerIcon  from '../assets/swagger.svg';
import yamlIcon     from '../assets/yaml.svg';

import gitIcon      from '../assets/github.svg';
import npmIcon      from '../assets/npm.svg';
import vercelIcon   from '../assets/vercel.svg';
import trelloIcon   from '../assets/trello.svg';
import vscodeIcon   from '../assets/vscode.svg';

import figmaIcon    from '../assets/figma.svg';
import canvaIcon    from '../assets/canva.svg';

export default function Competences() {
  return (
    <section id="competences" className="competences">
      <h2 className="section__title">COMPÉTENCES</h2>

      <div className="competences__group">
        <h3 className="section__subtitle">Front-end</h3>
        <div className="competences__icons">
          <img src={htmlIcon}  alt="HTML5" />
          <img src={cssIcon}   alt="CSS3" />
          <img src={jsIcon}    alt="JavaScript" />
          <img src={reactIcon} alt="React" />
          <img src={reduxIcon} alt="Redux" />
          <img src={sassIcon}  alt="Sass" />
        </div>
      </div>

      <div className="competences__group">
        <h3 className="section__subtitle">API & testing</h3>
        <div className="competences__icons">
          <img src={postmanIcon} alt="Postman" />
          <img src={swaggerIcon} alt="Swagger" />
          <img src={yamlIcon}    alt="YAML" />
        </div>
      </div>

      <div className="competences__group">
        <h3 className="section__subtitle">Outils & Déploiement</h3>
        <div className="competences__icons">
          <img src={gitIcon}    alt="GitHub" />
          <img src={npmIcon}    alt="npm" />
          <img src={vercelIcon} alt="Vercel" />
          <img src={trelloIcon} alt="Trello" />
          <img src={vscodeIcon} alt="VS Code" />
        </div>
      </div>

      <div className="competences__group">
        <h3 className="section__subtitle">Design UI</h3>
        <div className="competences__icons">
          <img src={figmaIcon} alt="Figma" />
          <img src={canvaIcon} alt="Canva" />
        </div>
      </div>
    </section>
  );
}
