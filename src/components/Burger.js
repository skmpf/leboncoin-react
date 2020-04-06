import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./css/burger.css";

import logo from "../assets/img/leboncoin.png";

function Burger({ user, setUser, burger, setBurger }) {
  return (
    <div className="burger">
      <section>
        <div>
          <Link
            to="/"
            onClick={() => {
              setBurger(false);
            }}
          >
            <img src={logo} alt="leboncoin-logo" />
          </Link>
        </div>
        <Link
          to="/offer/post"
          onClick={() => {
            setBurger(false);
          }}
        >
          <div>
            <i className="far fa-plus-square"></i>
            <p>Déposer une annonce</p>
          </div>
        </Link>
        <Link
          to="/"
          onClick={() => {
            setBurger(false);
          }}
        >
          <div>
            <i className="fas fa-search"></i>
            <p>Rechercher</p>
          </div>
        </Link>
        {user !== null ? (
          <Link
            to="/"
            onClick={() => {
              setBurger(false);
            }}
          >
            <div
              onClick={() => {
                Cookies.remove("userToken");
                setUser(null);
              }}
            >
              <p>Se déconnecter</p>
            </div>
          </Link>
        ) : (
          <Link
            to="/user/sign_in"
            onClick={() => {
              setBurger(false);
            }}
          >
            <div>
              <p>Se connecter</p>
            </div>
          </Link>
        )}
      </section>
      <section
        onClick={() => {
          setBurger(false);
        }}
      >
        <i className="fas fa-times"></i>
      </section>
    </div>
  );
}

export default Burger;
