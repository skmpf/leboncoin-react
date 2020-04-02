import React from "react";
import nophoto from "../assets/img/nophoto.png";
const moment = require("moment");

function Card({ offer }) {
  return (
    <>
      {offer.pictures.length === 0 ? (
        <img
          style={{ backgroundColor: "#cbd1d8" }}
          src={nophoto}
          alt={offer.title}
        />
      ) : (
        <img src={offer.pictures[0]} alt={offer.title} />
      )}
      <div className="photo-count">
        <i class="fas fa-camera"></i>
        {offer.pictures.length}
      </div>
      <div className="details">
        <h3>{offer.title}</h3>
        {offer.price ? <p>{offer.price} €</p> : <p>0 €</p>}
        <span>
          {moment(offer.created).format("L") +
            " à " +
            moment(offer.created).format("LT")}
        </span>
      </div>
    </>
  );
}

export default Card;
