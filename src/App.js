import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import LodgingPage from "./pages/LodgingPage/Lodging";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Error /> */}
      <Footer />
    </>
  );
};

export default App;
