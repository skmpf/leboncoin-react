import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Post from "./containers/Post";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  tokenFromCookie ? (newState = { token: tokenFromCookie }) : (newState = null);

  const [user, setUser] = useState(newState);

  return (
    <main>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/offer/post">
            <Post />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/user/sign_up">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/user/sign_in">
            <SignIn setUser={setUser} />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
