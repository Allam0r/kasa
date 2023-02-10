import React from "react";
import AboutImg from "../../assets/images/AboutImg.png";
import MAboutImg from "../../assets/images/MAboutImg.png";
import Collapse from "../../components/Collapse/Collapse";

import "./About.css";

const About = () => {
  let list = ["test1", "test2", "equipement3"];
  return (
    <div className="About-box">
      <img className="DBanner" src={AboutImg} alt="Kasa a propos" />
      <img className="MBanner" src={MAboutImg} alt="Kasa a propos" />
      <Collapse
        title="Fiabilité"
        tag="text"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Collapse
        title="Respect"
        tag="text"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        title="Service"
        tag="text"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Collapse
        title="Sécurité"
        tag="text"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      <Collapse title="Sécurité" tag="list" content={list} />
    </div>
  );
};

export default About;
