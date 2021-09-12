import React, { useState } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { useLocation } from "react-router-dom";

import "../components/css/payment.css";
import Loading from "../components/Loading";

import nophoto from "../assets/img/nophoto.png";
import axios from "axios";

function Payment({ user, stripe }) {
  const location = useLocation();
  const offer = location.state.offer;

  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    const stripeResponse = await stripe.createToken({
      userToken: user.token
    });
    const stripeToken = stripeResponse.token.id;
    await axios.post("https://leboncoin-api-2003.herokuapp.com/payment", {
      stripeToken: stripeToken,
      description: offer.title,
      amount: offer.price
    });
    setIsPaid(true);
  };

  return (
    <ul className="checkout wrapper">
      <li>
        <h4>Acheter en ligne</h4>
      </li>
      {offer.pictures.length > 0 ? (
        <li>
          <img src={offer.pictures[0]} alt={nophoto} />
        </li>
      ) : null}
      <li>
        <h4>{offer.title}</h4>
      </li>
      <li>
        <p>{offer.price} €</p>
      </li>

      {isPaid ? (
        <li>
          <h4>Votre paiement a été effectué !</h4>
        </li>
      ) : (
        <>
          <li>
            <h4>Vos coordonnées bancaires</h4>
          </li>
          <li>
            <CardElement />
          </li>
          {isLoading ? (
            <li className="center">
              <Loading />
            </li>
          ) : (
            <li className="">
              <button
                onClick={async () => {
                  setIsLoading(true);
                  handlePayment();
                  setIsLoading(false);
                }}
              >
                Procéder au paiement
              </button>
            </li>
          )}
        </>
      )}
    </ul>
  );
}

export default injectStripe(Payment);
