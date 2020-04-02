import React, { useEffect } from "react";
import "../components/css/offers.css";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Offers({ fetchOffers, offers, isLoading }) {
  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products wrapper">
          <Search />
          {offers.map(offer => {
            return (
              <Link key={offer._id} to={"/offer/" + offer._id}>
                <div className="product">
                  <Card offer={offer} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Offers;
