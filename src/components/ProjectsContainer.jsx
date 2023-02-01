import "../styles/components/projectcontainer.sass";
import Project1 from "../img/project1-dashboard.png";
import Project2 from "../img/projeto2.jpg";
import Project3 from "../img/projeto3.jpg";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiAngularSimple,
  DiReact,
  DiSass,
  DiGoogleCloudPlatform,
} from "react-icons/di";

import { BsDisplay, BsGithub } from "react-icons/bs";

import { SiTypescript } from "react-icons/si";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>

      {/* #################### PRIMEIRO PROJETO DASHBOARD REACT ########################*/}
      <div className="projects-card">
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-info">
              <h3>User Dashboard</h3>
              <div className="projects-links">
                <a href="https://user.botty.com.br/" className="projects-link" target="_blank">
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
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiHtml5 />
                </span>
                HTML5
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiCss3 />
                </span>
                CSS3
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiReact />
                </span>
                ReactJs
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiJsBadge />
                </span>
                JavaScript
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiGoogleCloudPlatform />
                </span>
                GCP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* #################### SEGUNDO PROJETO RHCONTROL ANGULAR ########################*/}
      <div className="projects-card">
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-info">
              <h3>RH Control</h3>
              <div className="projects-links">
                <a href="https://github.com/rafaelnsf/rhControl" className="projects-link" target="_blank">
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
              <p>Projeto Angular desenvolvido em sala de aula da minha graduação.</p>
              <p>
                Projeto básico apenas para cadastros de funcionários de uma empresa, utilizando CRUD em arquivos JSON e
                framework BOOTSTRAP.
              </p>
            </div>
          </div>
          <div className="projects-column">
            <div className="projects-img">
              <img src={Project2} alt="Project2" className="img-style" />
            </div>
          </div>
        </div>
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-links">
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiHtml5 />
                </span>
                HTML5
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiCss3 />
                </span>
                CSS3
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiAngularSimple />
                </span>
                Angular
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <SiTypescript />
                </span>
                TypesCript
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiJsBadge />
                </span>
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* #################### TERCEIRO PROJETO PORTIFÓLIO ########################*/}

      <div className="projects-card">
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-info">
              <h3>Meu Portifólio</h3>
              <div className="projects-links">
                <a href="#" className="projects-link">
                  <div className="link-btn">
                    <span style={{ marginRight: "5px" }}>
                      <BsDisplay />
                    </span>
                    Demo
                  </div>
                </a>
                <a href="https://github.com/rafaelnsf/portifolio" target="_blank" className="projects-link">
                  <div className="link-btn">
                    <span style={{ marginRight: "5px" }}>
                      <BsGithub />
                    </span>
                    GitHub
                  </div>
                </a>
              </div>
              <p>
                Meu projeto de portfólio, construído usando ReactJs e SASS. Para o formulário de e-mail, usei emailjs.
              </p>
              <p>Objetivo deste projeto é mostrar um pouco mais minhas habilidades e o que venho estudando.</p>
            </div>
          </div>
          <div className="projects-column">
            <div className="projects-img">
              <img src={Project3} alt="Project1" className="img-style" />
            </div>
          </div>
        </div>
        <div className="projects-row">
          <div className="projects-column">
            <div className="projects-links">
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiHtml5 />
                </span>
                HTML5
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiSass />
                </span>
                SASS
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiReact />
                </span>
                ReactJs
              </div>
              <div className="link-btn">
                <span style={{ marginRight: "5px" }}>
                  <DiJsBadge />
                </span>
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
