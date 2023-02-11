import React, { useState } from "react";
import up from "./images/VectorUP.svg";
import down from "./images/VectorDOWN.svg";

import "./Collapse.css";

const Collapse = ({ title, content, tag, type = "big" }) => {
  // Définition de l'état isCollapsed pour savoir si le contenu est développé ou réduit
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Fonction pour basculer l'état isCollapsed lorsque l'utilisateur clique sur le bouton
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-box">
      <h2
        className={`title-collapse ${
          type === "small" ? "title-collapse-small" : ""
        }`}
      >
        {title}
        <img
          className="collapse-img"
          onClick={toggleCollapse}
          src={isCollapsed ? down : up}
          alt={`Toggle ${title}`}
        />
      </h2>
      {/* Contenu développé ou réduit en fonction de l'état isCollapsed */}
      {!isCollapsed && tag === "text" && (
        <p className="collapse-desc">{content}</p>
      )}

      {!isCollapsed && tag === "list" && (
        <div className="collapse-desc">
          {content.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Collapse;
