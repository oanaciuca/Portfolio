import htmlIcon   from '../assets/html.svg';
import cssIcon    from '../assets/css.svg';
import jsIcon     from '../assets/js.svg';
import reactIcon  from '../assets/react.svg';
import reduxIcon  from '../assets/redux.svg';
import sassIcon   from '../assets/sass.svg';

import postmanIcon  from '../assets/postman.svg';
import swaggerIcon  from '../assets/swagger.svg';
import yamlIcon     from '../assets/yaml.svg';

import gitIcon    from '../assets/github.svg';
import npmIcon    from '../assets/npm.svg';
import vercelIcon from '../assets/vercel.svg';
import trelloIcon from '../assets/trello.svg';
import vscodeIcon from '../assets/vscode.svg';

import figmaIcon from '../assets/figma.svg';
import canvaIcon from '../assets/canva.svg';

export const skillsData = [
  {
    category: 'Front-end',
    icons: [
      { src: htmlIcon,   alt: 'HTML5' },
      { src: cssIcon,    alt: 'CSS3' },
      { src: jsIcon,     alt: 'JavaScript' },
      { src: reactIcon,  alt: 'React' },
      { src: reduxIcon,  alt: 'Redux' },
      { src: sassIcon,   alt: 'Sass' },
    ],
  },
  {
    category: 'API & Testing',
    icons: [
      { src: postmanIcon, alt: 'Postman', scale: 2.2 },
      { src: swaggerIcon, alt: 'Swagger', scale: 2.1 },
      { src: yamlIcon,    alt: 'YAML' },
    ],
  },
  {
    category: 'Outils & Déploiement',
    icons: [
      { src: gitIcon,    alt: 'GitHub' },
      { src: npmIcon,    alt: 'npm' },
      { src: vercelIcon, alt: 'Vercel', scale: 2.0 },
      { src: trelloIcon, alt: 'Trello', scale: 2.0 },
      { src: vscodeIcon, alt: 'VS Code' },
    ],
  },
  {
    category: 'Design UI',
    icons: [
      { src: figmaIcon, alt: 'Figma' },
      { src: canvaIcon, alt: 'Canva' },
    ],
  },
];
