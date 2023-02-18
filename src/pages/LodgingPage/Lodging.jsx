//import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LodgingInfo from "../../data/lodging.json";
import Slider from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import greyStar from "../../assets/images/greystar.svg";
import redStar from "../../assets/images/redstar.svg";
import Error from "../Error/Error";

import "./Lodging.css";

// Composant Lodging qui gère l'affichage des informations sur un logement en particulier
const Lodging = () => {
  // Récupération de l'id du logement actuel à partir de l'URL
  const idLodging = useParams("id").id;

  // Récupération des informations pour l'hébergement actuel en utilisant son ID
  const dataCurrentLodging = LodgingInfo.filter(
    (data) => data.id === idLodging
  );
  if (dataCurrentLodging.length !== 1) {
    // redirection sur error

    return <Error />;
  } else {
    // Afficher les details de l'element
    const lodging = dataCurrentLodging[0];

    // Découpage du nom du propriétaire pour n'afficher que les prénoms
    const name = lodging.host.name.split(" ");
    // Note attribuée à l'hébergement
    const rating = lodging.rating;
    // Description de l'hébergement
    const description = lodging.description;
    // Équipements inclus dans l'hébergement
    const equipments = lodging.equipments;

    return (
      <>
        {/* Affichage du Slider */}
        <Slider imageSlider={lodging.pictures} />
        <div className="lodging-info">
          <div className="lodging-title">
            <p className="title-lodging">{lodging.title}</p>
            <p className="location-lodging">{lodging.location}</p>
            <div className="lodging-filter">
              {lodging.tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>

          <div className="lodging-host">
            <div className="host-info">
              <div className="host-name">
                <p className="name-1">{name[0]}</p>
                <p className="name-2">{name[1]}</p>
              </div>
              <div className="host-picture">
                <img
                  className="img-host"
                  src={lodging.host.picture}
                  alt="Propriétaire du logement"
                />
              </div>
            </div>
            <div className="host-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    className="stars"
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="Star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="lodging-collapse">
          <div className="lodging-collapse-desc">
            <Collapse
              title="Description"
              tag="text"
              content={description}
              type="small"
            />
          </div>
          <div className="lodging-collapse-stuff">
            <Collapse
              title="Équipements"
              tag="list"
              content={equipments}
              type="small"
            />
          </div>
        </div>
      </>
    );
  }
};

export default Lodging;
