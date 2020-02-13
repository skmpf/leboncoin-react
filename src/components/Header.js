import React from "react";

import "./css/header.css";
import logo from "../assets/img/leboncoin.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header(props) {
  return (
    <div className="header">
      <div className="wrapper menu">
        <div>
          <div>
            <Link to="/">
              <img src={logo} alt="leboncoin-logo" />
            </Link>
          </div>
          <div className="deposer-annonce">
            <i className="far fa-plus-square"></i>
            Déposer une annonce
          </div>
          <div className="search-button">
            <i className="fas fa-search"></i>Rechercher
          </div>
        </div>
        <div className="connection">
          {props.user !== null ? (
            <Link to="/">
              <div
                onClick={() => {
                  Cookies.remove("userToken");
                  props.setUser(null);
                }}
              >
                <i className="far fa-user"></i>
                <p>Se déconnecter</p>
              </div>
            </Link>
          ) : (
            <Link to="/user/sign_in">
              <i className="far fa-user"></i>
              <p>Se connecter</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
