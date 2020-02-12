import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Product from "./components/Product";

function App() {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );

      setOffers(response.data.offers);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(offers);
  return (
    <>
      {isLoading ? (
        <p>Loading page</p>
      ) : (
        <>
          <Header />
          <Search />
          <Product offers={offers} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
