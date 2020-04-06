// import packages
import React, { useState, useCallback } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Burger from "./components/Burger";

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
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [searchInput, setSearchInput] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [burger, setBurger] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `https://leboncoin-api-2003.herokuapp.com/offer/with-count?title=${searchInput}&skip=${skip}&limit=3`
    );
    setData(response.data);
    setIsLoading(false);
  });

  return (
    <main>
      <Router>
        <Header
          user={user}
          setUser={setUser}
          burger={burger}
          setBurger={setBurger}
        />
        {burger && (
          <Burger
            user={user}
            setUser={setUser}
            burger={burger}
            setBurger={setBurger}
          />
        )}
        <Switch>
          <Route path="/payment">
            <StripeProvider apiKey="pk_test_z8k3Pda4PMn319wPwudsWh1C0001l1liIX">
              <Elements>
                <Payment user={user} />
              </Elements>
            </StripeProvider>
          </Route>
          <Route path="/offer/post">
            <Post user={user} fetchData={fetchData} />
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
              fetchData={fetchData}
              setData={setData}
              offers={data.offers}
              count={data.count}
              skip={skip}
              setSkip={setSkip}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
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
