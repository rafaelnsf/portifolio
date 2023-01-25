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
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
