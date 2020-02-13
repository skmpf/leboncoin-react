import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/user/sign_up">
          <SignUp />
        </Route>
        <Route path="/user/sign_in">
          <SignIn />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
