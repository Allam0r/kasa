import React, { useEffect, useState } from "react";

// On importe le composant Link de react-router pour permettre la navigation entre les pages.
import { Link } from "react-router-dom";

// On importe le fichier css pour la mise en forme de la page.
import "./Home.css";

// On importe les images nécessaires à la mise forme de la page.
import Banner from "../../assets/images/Banner.png";
import BannerM from "../../assets/images/BannerM.png";

// On importe le composant Cards.
import Cards from "../../components/Cards/Cards";

// On importe les données sur les logements à partir du fichier lodging.json.
import Lodging from "../../data/lodging.json";

const Home = () => {
  // On utilise useState pour définir un état local pour stocker les infos sur les logements.
  const [data, setData] = useState([]);

  // On utilise useEffect pour charger les infos sur les logements une fois que le composant est monté.
  useEffect(() => {
    setData(Lodging);
  }, []);

  return (
    <div className="body-box">
      {/* On affiche les bannières de la page d'accueil. */}
      <img className="banner-img" src={Banner} alt="Bannière Kasa" />
      <img className="bannerM-img" src={BannerM} alt="Bannière Kasa" />
      <div className="box-gallery">
        {/* On affiche chaque logements en utilisant le composant Cards enveloppé dans un lien vers la page du logement. */}
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
