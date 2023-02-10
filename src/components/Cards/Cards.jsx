import React from "react";

import "./Cards.css";

const Cards = ({ cover, title }) => {
  return (
    <article className="card_logement">
      <img className="card-img" src={cover} alt="Location Kasa" />
      <div className="filter-card">
        <div className="card-logement_text">
          <p className="card-logement_title">{title}</p>
        </div>
      </div>
    </article>
  );
};

export default Cards;
