import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Carousel from "nuka-carousel";

import nophoto from "../assets/img/nophoto.png";
import Loading from "../components/Loading";
import "../components/css/offer.css";

const moment = require("moment");

function Offer({ user }) {
  const [offer, setOffer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // "https://leboncoin-api-2003.herokuapp.com/offer/" + id
        "http://localhost:3000/offer/" + id
      );
      setOffer(response.data);
      console.log(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper offer">
          <div className="product-item">
            <div className="product-details">
              {offer.pictures.length === 0 ? (
                <img src={nophoto} alt={offer.title} />
              ) : (
                <Carousel
                  className="carousel"
                  defaultControlsConfig={{
                    nextButtonClassName: "nextButton",
                    prevButtonClassName: "prevButton",
                    nextButtonText: <i class="fas fa-chevron-right"></i>,
                    prevButtonText: <i class="fas fa-chevron-left"></i>
                  }}
                >
                  {offer.pictures.map(url => {
                    console.log(offer.pictures);
                    return <img src={url} alt={offer.title} />;
                  })}
                </Carousel>
              )}

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
            {offer.creator.offers > 1 ? (
              <p>{offer.creator.offers} annonces en ligne</p>
            ) : (
              <p>{offer.creator.offers} annonce en ligne</p>
            )}
            <p></p>
            <div
              className="buy"
              onClick={event => {
                event.preventDefault();
                if (user === null) {
                  history.push("/user/sign_in");
                } else {
                  history.push("/payment", {
                    offer
                  });
                }
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span>Acheter</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Offer;
