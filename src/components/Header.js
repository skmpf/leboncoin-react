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
          <Link to="/">
            <img src={logo} alt="leboncoin-logo" />
          </Link>
          <Link
            to="/offer/post"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="deposer-annonce">
              <i className="far fa-plus-square"></i>
              Déposer une annonce
            </div>
          </Link>
          <Link to="/">
            <div className="search-button header-hover">
              <i className="fas fa-search"></i>
              <p>Rechercher</p>
            </div>
          </Link>
        </div>
        <div className="connection header-hover">
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
            <Link
              to="/user/sign_in"
              style={{ colore: "black", textDecoration: "none" }}
            >
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
