import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/offers.css";
import { Link } from "react-router-dom";

import Search from "../components/Search";

function Offers() {
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
      <Search />
      <div className="products wrapper">
        {offers.map(offer => {
          return (
            <Link to="/offer/" {offer.map}>
              <div className="product">
                <>
                  {isLoading ? (
                    <p>Loading page</p>
                  ) : (
                    <>
                      {offer.pictures === [] ? (
                        <i className="far fa-mountains"></i>
                      ) : (
                        <img src={offer.pictures} alt={offer.title} />
                      )}
                      <div className="details">
                        <h3>{offer.title}</h3>
                        <p>{offer.price} €</p>
                        <p>{offer.created}</p>
                      </div>
                    </>
                  )}
                </>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Offers;
