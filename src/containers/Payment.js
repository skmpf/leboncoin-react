import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import { useLocation } from "react-router-dom";

import "../components/css/payment.css";

import nophoto from "../assets/img/nophoto.png";
import axios from "axios";

function Payment({ user, stripe }) {
  const location = useLocation();
  const offer = location.state.offer;

  return (
    <ul className="checkout wrapper">
      <li>
        <h4>Acheter en ligne</h4>
      </li>
      <li>
        <img src={offer.pictures} alt={nophoto} />
      </li>
      <li>
        <h4>{offer.title}</h4>
      </li>
      <li>
        <p>{offer.price} €</p>
      </li>
      <li>
        <h4>Vos coordonnées bancaires</h4>
      </li>
      <li>
        <CardElement />
      </li>
      <li>
        <button
          onClick={async () => {
            const stripeResponse = await stripe.createToken({
              userToken: user.token
            });
            const stripeToken = stripeResponse.token.id;
            await axios.post("http://localhost:3000/payment", {
              stripeToken: stripeToken,
              description: offer.title,
              amount: offer.price
            });
          }}
        >
          Procéder au paiement
        </button>
      </li>
    </ul>
  );
}

export default injectStripe(Payment);
