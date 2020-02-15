import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../components/css/sign-in.css";
import { Link, useHistory } from "react-router-dom";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const logIn = async () => {
    try {
      await axios
        .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
          email: email,
          password: password
        })
        .then(response => {
          const token = response.data.token;
          props.setUser({ token: token });
          Cookies.set("userToken", token, { expires: 7 });
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-in wrapper">
      <ul>
        <li>
          <h4>Connexion</h4>
        </li>
        <li></li>
        <li>
          <p>Adresse email</p>
        </li>
        <li>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </li>
        <li>
          <p>Mot de passe</p>
        </li>
        <li>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </li>
        <li>
          <button
            onClick={event => {
              event.preventDefault();
              logIn();
              history.push("/");
            }}
          >
            Se connecter
          </button>
        </li>
        <li></li>
        <li>
          <p>Vous n'avez pas de compte ?</p>
        </li>
        <li>
          <Link to="/user/sign_up">
            <button>Créer un compte</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SignIn;
