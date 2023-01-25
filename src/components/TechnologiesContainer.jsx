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
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "csharp", name: "CSharp", icon: <SiCsharp /> },
  { id: "firestore", name: "Firestore", icon: <TbBrandFirebase /> },
  { id: "gcp", name: "GCP", icon: <DiGoogleCloudPlatform /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
