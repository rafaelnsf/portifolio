import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rafaelnsf/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/rafaelnsf/" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/urafaellemos/" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} target="_blank" key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
