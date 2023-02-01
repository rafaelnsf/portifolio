import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiAngularSimple,
  DiReact,
  DiGoogleCloudPlatform,
  DiDocker,
  DiJava,
} from "react-icons/di";
import { TbBrandFirebase } from "react-icons/tb";
import { SiTypescript, SiCsharp } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description: "Conhecimento e experiência avançado adquirido com cursos e aplicado em projetos que trabalhei",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description: "Conhecimento avançado adquirido com cursos e projetos que participei",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description: "Domìnio avançado na linguagem adquirido com cursos, na faculdade e em projetos que desenvolvi",
    icon: <DiJsBadge />,
  },
  {
    id: "react",
    name: "React",
    description: "Conhecimento amplo adquirido com cursos e projetos conforme visto abaixo",
    icon: <DiReact />,
  },
  {
    id: "angular",
    name: "Angular",
    description: "Aprendi com aulas na graduação e projetos que criei para praticar",
    icon: <DiAngularSimple />,
  },
  {
    id: "typescript",
    name: "Typescript",
    description: "Aprendizado adquirido com cursos e projetos onde apliquei junto com angular no projeto abaixo",
    icon: <SiTypescript />,
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Conhecimento prático e didático adquirido com cursos e projetos desenvolvidos na necessidade de um backend",
    icon: <DiNodejsSmall />,
  },
  { id: "java", name: "Java", description: "Conhecimento adquirido com cursos e na Graduação de SI", icon: <DiJava /> },
  {
    id: "csharp",
    name: "CSharp",
    description: "Estudo adquirido com cursos na Master Premium",
    icon: <SiCsharp />,
  },
  {
    id: "firestore",
    name: "Firestore",
    description: "Desenvolvimento prático aplicado a nessecidades da empresa Lifty",
    icon: <TbBrandFirebase />,
  },
  {
    id: "gcp",
    name: "GCP",
    description:
      "Estudo junto a plataforma Cursera onde completei todos os módulos de Programa de cursos integrados Architecting with Google Compute Engine",
    icon: <DiGoogleCloudPlatform />,
  },
  {
    id: "docker",
    name: "Docker",
    description: "Conhecimento necessário para desenvolvimento de apps com gerenciamento de infraestrutura",
    icon: <DiDocker />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
