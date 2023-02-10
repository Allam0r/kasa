import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Lodging from "../pages/LodgingPage/Lodging";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesPath;
