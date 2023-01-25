import "../styles/components/projectcontainer.sass";
import Project1 from "../img/project1-dashboard.png";
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiAngularSimple, DiReact } from "react-icons/di";

import { BsDisplay, BsGithub } from "react-icons/bs";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <a href="#" className="btn">
        Ver Projetos
      </a>
      <div className="projects-card">
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-info">
              <h3>User Dashboard</h3>
              <div className="projects-links">
                <a href="#" className="projects-link">
                  <div className="link-btn">
                    <span style={{ marginRight: "5px" }}>
                      <BsDisplay />
                    </span>
                    Demo
                  </div>
                </a>
                <a href="#" className="projects-link">
                  <div className="link-btn">
                    <span style={{ marginRight: "5px" }}>
                      <BsGithub />
                    </span>
                    GitHub
                  </div>
                </a>
              </div>
              <p>
                Durante meu trabalho na Lifty, fui principal responsavel por desenvolver o painel do usuário que
                controlava todas as opções do aplicativo de chatbot. Isso foi feito usando os elementos React e
                MaterialUI.
              </p>
            </div>
          </div>
          <div className="projects-column">
            <div className="projects-img">
              <img src={Project1} alt="Project1" className="img-style" />
            </div>
          </div>
        </div>
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-links">
              <a href="#" className="projects-link">
                <div className="link-btn">
                  <span style={{ marginRight: "5px" }}>
                    <DiHtml5 />
                  </span>
                  HTML5
                </div>
              </a>
              <a href="#" className="projects-link">
                <div className="link-btn">
                  <span style={{ marginRight: "5px" }}>
                    <DiCss3 />
                  </span>
                  CSS3
                </div>
              </a>
              <a href="#" className="projects-link">
                <div className="link-btn">
                  <span style={{ marginRight: "5px" }}>
                    <DiReact />
                  </span>
                  ReactJs
                </div>
              </a>
              <a href="#" className="projects-link">
                <div className="link-btn">
                  <span style={{ marginRight: "5px" }}>
                    <DiJsBadge />
                  </span>
                  JavaScript
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
