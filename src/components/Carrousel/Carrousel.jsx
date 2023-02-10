// Importation de la bibliothèque React et du hook useState de React
import React from "react";
import { useState } from "react";

// Importation des images svg de la flèche gauche et de la flèche droite
import LeftArrow from "./images/Vector left.svg";
import RightArrow from "./images/Vector right.svg";

import "./Carrousel.css";

// Déclaration et export par défaut du composant Slider
export default function Slider({ imageSlider }) {
  // Déclaration de l'état currentIndex avec le hook useState et initialisation à 0
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher la prochaine image du diaporama
  const nextSlide = () => {
    // Incrémentation de currentIndex
    setCurrentIndex(currentIndex + 1);
    // Si currentIndex atteint la dernière image, on retourne à la première image
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
  };

  // Fonction pour afficher la précédente image du diaporama
  const prevSlide = () => {
    // Décrémentation de currentIndex
    setCurrentIndex(currentIndex - 1);
    // Si currentIndex atteint la première image, on retourne à la dernière image
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="carrousel"
    >
      {/* Affichage des flèches de navigation et du compteur de slides uniquement si le diaporama contient plus d'une image */}
      {imageSlider.length > 1 && (
        <>
          {/* Image de la flèche gauche, cliquable pour afficher la précédente image */}
          <img
            className="left-arrow"
            src={LeftArrow}
            alt="Previous Slide"
            onClick={prevSlide}
          />
          {/* Image de la flèche droite, cliquable pour afficher la prochaine image */}
          <img
            className="right-arrow"
            src={RightArrow}
            alt="Next Slide"
            onClick={nextSlide}
          />
          {/* Affichage du numéro de la diapositive courante et du nombre total de diapositives */}
          <p className="slideCount">
            {currentIndex + 1} / {imageSlider.length}{" "}
          </p>
        </>
      )}
    </section>
  );
}
