import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LodgingInfo from "../../data/lodging.json";
import Collapse from "../../components/Collapse/Collapse";
import greyStar from "../../assets/images/greystar.svg";
import redStar from "../../assets/images/redstar.svg";

const Lodging = () => {
  const idLodging = useParams("id").id;
  const dataCurrentLodging = LodgingInfo.filter(
    (data) => data.id === idLodging
  );

  useEffect(() => {
    const dataCurrentLodging = LodgingInfo.filter(
      (data) => data.id === idLodging
    );
    // setImageSlider(dataCurrentLodging[0].pictures);
  }, [idLodging]);

  const name = dataCurrentLodging[0].host.name.split(" ");
  const rating = dataCurrentLodging[0].rating;
  const description = dataCurrentLodging[0].description;
  const equipments = dataCurrentLodging[0].equipments;

  return (
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
  );
};

export default Lodging;
