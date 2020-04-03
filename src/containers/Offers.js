import React, { useEffect } from "react";
import "../components/css/offers.css";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

function Offers({
  fetchData,
  offers,
  count,
  skip,
  setSkip,
  searchInput,
  setSearchInput,
  isLoading
}) {
  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products wrapper">
          <Search
            fetchData={fetchData}
            skip={skip}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          {offers.length === 0 ? (
            <div>Aucune offre pour le moment</div>
          ) : (
            <>
              {offers.map(offer => {
                return (
                  <Link key={offer._id} to={"/offer/" + offer._id}>
                    <div className="product">
                      <Card offer={offer} />
                    </div>
                  </Link>
                );
              })}
              <Pagination count={count} skip={skip} setSkip={setSkip} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Offers;
