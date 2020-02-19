import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/offers.css";
import { Link } from "react-router-dom";
import nophoto from "../assets/img/nophoto.png";

import Search from "../components/Search";

const moment = require("moment");

function Offers() {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // "https://leboncoin-api-2003.herokuapp.com/offer/with-count"
        "http://localhost:3000/offer/with-count"
      );

      setOffers(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Search />
      <div className="products wrapper">
        {offers.map(offer => {
          return (
            <Link key={offer._id} to={"/offer/" + offer._id}>
              <div className="product">
                <>
                  {isLoading ? (
                    <p>Loading page</p>
                  ) : (
                    <>
                      {offer.pictures.length === 0 ? (
                        <img
                          style={{ backgroundColor: "#cbd1d8" }}
                          src={nophoto}
                          alt=""
                        />
                      ) : (
                        <img src={offer.pictures[0]} alt={offer.title} />
                      )}
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
