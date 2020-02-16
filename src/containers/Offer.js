import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../components/css/offer.css";

const moment = require("moment");

function Offer(props) {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api-2003.herokuapp.com/offer/" + id
      );
      setOffer(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p>Loading page</p>
      ) : (
        <div className="wrapper offer">
          <div className="product-item">
            <div className="product-details">
              <img src={offer.pictures} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.price} €</p>
              <span>
                {moment(offer.created).format("L") +
                  " à " +
                  moment(offer.created).format("LT")}
              </span>
            </div>

            <div className="description">
              <h4>Description</h4>
              <p>{offer.description}</p>
            </div>
          </div>
          <div className="user">
            <p>{offer.creator.account.username}</p>
            <p>17 annonces en ligne</p>
            <p></p>
            <div className="buy">
              <i className="fas fa-shopping-cart"></i>
              <span>Acheter</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Offer;
