import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RoutesPath from "./routes/RoutesPath";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesPath />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
