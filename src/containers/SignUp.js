import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import "../components/css/sign-up.css";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const history = useHistory();

  const createAccount = async () => {
    try {
      await axios
        .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
          email: email,
          username: name,
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
    <div className="sign-up">
      <div className="sign-up-infos"></div>

      <ul className="sign-up-list">
        <li>
          <h4>Créer un compte</h4>
        </li>
        <li>
          <hr />
        </li>
        <li>Pseudo *</li>
        <li>
          <input
            type="text"
            name="name"
            required="required"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </li>
        <li>Adresse email *</li>
        <li>
          <input
            type="email"
            name="email"
            required="required"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </li>
        <li>Mot de passe *</li>
        <li>
          <input
            type="password"
            name="password"
            required="required"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </li>
        <li>Confirmer le mot de passe *</li>
        <li>
          <input
            type="password"
            name="confirm"
            required="required"
            value={confirm}
            onChange={event => {
              setConfirm(event.target.value);
            }}
          />
        </li>
        <li>
          <input type="checkbox" />
          <span>
            "J'accepte les Conditions Générales de Vente et les Conditions
            Générales d'Utilisation"
          </span>
        </li>
        <li>
          <input
            type="submit"
            value="Créer mon Compte Personnel"
            onClick={event => {
              event.preventDefault();
              if (password !== confirm) {
                alert("Les deux mots de passe doivent être identiques");
              } else {
                createAccount();
                history.push("/");
              }
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default SignUp;
