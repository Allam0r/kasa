import React, { useState } from "react";
import up from "./images/VectorUP.svg";
import down from "./images/VectorDOWN.svg";

import "./Collapse.css";

const Collapse = ({ title, content, tag }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-box">
      <h2 className="title-collapse">
        {title}
        <img
          className="collapse-img"
          onClick={toggleCollapse}
          src={isCollapsed ? down : up}
          alt={`Toggle ${title}`}
        />
      </h2>

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
