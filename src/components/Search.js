import React, { useState } from "react";
import "./css/search.css";
import axios from "axios";

function Search({ fetchData, searchInput, setSearchInput }) {
  const handleSubmit = async () => {
    fetchData();
  };
  return (
    <>
      <div className="ellipse"></div>
      <div className="search">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Que recherchez-vous ?"
            value={searchInput}
            onChange={event => {
              setSearchInput(event.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit}>Rechercher</button>
      </div>
    </>
  );
}

export default Search;
