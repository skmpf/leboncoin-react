import React from "react";
import "./css/search.css";

function Search() {
  return (
    <div className="search">
      <div className="search-box">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Que recherchez-vous ?" />
      </div>
      <button>Rechercher</button>
    </div>
  );
}

export default Search;
