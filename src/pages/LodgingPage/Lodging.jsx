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
        <div className="lodging">
          <div className="lodging-content">
            <div className="lodging-content-infos">
              <p className="titleLodging"> {lodging.title} </p>
              <p className="locationLodging"> {lodging.location} </p>
              <div>
                {lodging.tags.map((tag, index) => {
                  return <button key={index}>{tag}</button>;
                })}
              </div>
            </div>
            <div className="host-info">
              <div className="lodging-content-host">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                className="host-pic"
                src={lodging.host.picture}
                alt="Propriétaire du logement"
              />
            </div>
          </div>
          <div className="lodging-content-rating">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="Star"
                />
              );
            })}
          </div>
          <div className="lodging-content-collapse">
            <Collapse
              className="lodging-collapse-desc"
              title="Description"
              tag="text"
              content={description}
              type="small"
            />
            <Collapse
              className="lodging-collapse-stuff"
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
