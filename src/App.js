// import packages
import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import containers
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Post from "./containers/Post";
import Payment from "./containers/Payment";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  tokenFromCookie ? (newState = { token: tokenFromCookie }) : (newState = null);

  const [user, setUser] = useState(newState);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOffers = async () => {
    const response = await axios.get(
      // "https://leboncoin-api-2003.herokuapp.com/offer/with-count"
      "http://localhost:3000/offer/with-count"
    );
    setOffers(response.data);
    console.log(response.data);

    setIsLoading(false);
  };

  return (
    <main>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/payment">
            <StripeProvider apiKey="pk_test_z8k3Pda4PMn319wPwudsWh1C0001l1liIX">
              <Elements>
                <Payment user={user} />
              </Elements>
            </StripeProvider>
          </Route>
          <Route path="/offer/post">
            <Post user={user} fetchOffers={fetchOffers} />
          </Route>
          <Route path="/offer/:id">
            <Offer user={user} />
          </Route>
          <Route path="/user/sign_up">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/user/sign_in">
            <SignIn setUser={setUser} />
          </Route>
          <Route exact path="/">
            <Offers
              fetchOffers={fetchOffers}
              offers={offers}
              isLoading={isLoading}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
