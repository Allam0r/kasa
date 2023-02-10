import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import Banner from "../../assets/images/Banner.svg";
import BannerM from "../../assets/images/BannerM.svg";
import Cards from "../../components/Cards/Cards";
import Lodging from "../../data/lodging.json";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Lodging);
  }, []);

  return (
    <div className="body-box">
      <img className="banner-img" src={Banner} alt="Bannière Kasa" />
      <img className="bannerM-img" src={BannerM} alt="Bannière Kasa" />
      <div className="box-gallery">
        {data.map((appart, id) => (
          <div className="card_logement" key={id}>
            <Link className="link_card_logement" to={`/lodging/${appart.id}`}>
              <Cards cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
