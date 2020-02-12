import React from "react";
import "./css/product.css";

function Product({ offers }) {
  return (
    <div className="products wrapper">
      {offers.map(offer => {
        return (
          <div className="product">
            <>
              {offer.pictures === [] ? (
                <i className="far fa-mountains"></i>
              ) : (
                <img src={offer.pictures} alt={offer.title} />
              )}
            </>
            <div className="details">
              <h3>{offer.title}</h3>
              <p>{offer.price} €</p>
              <p>{offer.created}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
