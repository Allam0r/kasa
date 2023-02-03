import React, { useState } from 'react';
import up from "./images/VectorUP.svg";
import down from "./images/VectorDOWN.svg";

import "./Collapse.css";

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='collapse-box'>
      <h2 className='title-collapse'>
        {title}
        <img className='collapse-img' onClick={toggleCollapse}
          src={isCollapsed ? down : up}
          alt={`Toggle ${title}`}
        />
      </h2>
      {!isCollapsed && (
        <p className='collapse-desc'>
          {content}
        </p>
      )}
    </div>
  );
};

export default Collapse
