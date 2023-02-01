import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/RAFAEL LEMOS Desenvolvedor front-end.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Lemos Desenvolvedor Front-End" />
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1KrY0ZkePfAafWijK9LVG1d8atDl4VaU8/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
