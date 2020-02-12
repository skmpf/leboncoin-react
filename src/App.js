import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
