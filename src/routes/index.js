import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Error} />
    </Router>
  );
};

export default Routes;
