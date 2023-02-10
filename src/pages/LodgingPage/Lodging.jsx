import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LodgingInfo from "../../data/lodging.json";
import Slider from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import greyStar from "../../assets/images/greystar.svg";
import redStar from "../../assets/images/redstar.svg";

// Composant Lodging qui gère l'affichage des informations sur un logement en particulier
const Lodging = () => {
  // Déclaration de l'état qui contiendra les images du slider
  const [imageSlider, setImageSlider] = useState([]);

  // Récupération de l'id du logement actuel à partir de l'URL
  const idLodging = useParams("id").id;
  // Filtrage des données du logement actuel à partir de l'id
  const dataCurrentLodging = LodgingInfo.filter(
    (data) => data.id === idLodging
  );

  // useEffect pour mettre à jour l'état de l'imageSlider lorsque l'ID de l'hébergement change
  useEffect(() => {
    // Récupération des informations pour l'hébergement actuel en utilisant son ID
    const dataCurrentLodging = LodgingInfo.filter(
      (data) => data.id === idLodging
    );
    // Mise à jour de l'état de l'imageSlider avec les images pour l'hébergement actuel
    setImageSlider(dataCurrentLodging[0].pictures);
  }, [idLodging]);

  // Découpage du nom du propriétaire pour n'afficher que les prénoms
  const name = dataCurrentLodging[0].host.name.split(" ");
  // Note attribuée à l'hébergement
  const rating = dataCurrentLodging[0].rating;
  // Description de l'hébergement
  const description = dataCurrentLodging[0].description;
  // Équipements inclus dans l'hébergement
  const equipments = dataCurrentLodging[0].equipments;

  return (
    <>
      {/* Affichage du Slider */}
      <Slider imageSlider={imageSlider} />
      <div className="lodging">
        <div className="lodging-content">
          <div className="lodging-content_infos">
            <h1> {dataCurrentLodging[0].title} </h1>
            <p> {dataCurrentLodging[0].location} </p>
            <div>
              {dataCurrentLodging[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="lodging-content-host">
            <span>{name[0]}</span>
            <span>{name[1]}</span>
          </div>
          <img
            src={dataCurrentLodging[0].host.picture}
            alt="Propriétaire du logement"
          />
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
          <Collapse title="Description" tag="text" content={description} />
          <Collapse title="Équipements" tag="list" content={equipments} />
        </div>
      </div>
    </>
  );
};

export default Lodging;
