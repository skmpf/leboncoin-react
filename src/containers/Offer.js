import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../components/css/offer.css";

function Offer(props) {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
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
              <p>{offer.created}</p>
            </div>

            <div className="description">
              <h4>Description</h4>
              <p>{offer.description}</p>
            </div>
          </div>
          <div className="user">
            <p>{offer.creator.account.username}</p>
            <p>count offers</p>
            <div className="buy">
              <i className="far fa-shopping-cart"></i>Acheter
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Offer;
