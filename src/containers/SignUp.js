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
  const [isChecked, setIsChecked] = useState(false);

  const history = useHistory();

  const createAccount = async () => {
    try {
      await axios
        .post("http://localhost:3000/user/sign_up", {
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
    <div className="sign-up wrapper">
      <ul className="sign-up-infos">
        <li>
          <h4>Pourquoi créer un compte ?</h4>
        </li>
        <li>
          <ul>
            <li>
              <i className="far fa-clock"></i>
            </li>
            <li>
              <h5>Gagnez du temps</h5>
              <p>
                Gagnez du temps Publiez vos annonces rapidement, avec vos
                informations pré-remplies chaque fois que vous souhaitez déposer
                une nouvelle annonce.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <i className="far fa-bell"></i>
            </li>
            <li>
              <h5>Soyez les premiers informés</h5>
              <p>
                Soyez les premiers informés Créez des alertes Immo ou Emploi et
                ne manquez jamais l’annonce qui vous intéresse.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <i className="far fa-eye"></i>
            </li>
            <li>
              <h5>Visibilité</h5>
              <p>
                Visibilité Suivez les statistiques de vos annonces (nombre de
                fois où votre annonce a été vue, nombre de contacts reçus).
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="sign-up-list">
        <li>
          <h4>Créer un compte</h4>
        </li>
        <li></li>
        <li>
          <p>Pseudo *</p>
        </li>
        <li>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </li>
        <li>
          <p>Adresse email *</p>
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
        <div className="password">
          <ul>
            <li>
              <p>Mot de passe *</p>
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
          </ul>
          <ul>
            <li>
              <p>Confirmer le mot de passe *</p>
            </li>
            <li>
              <input
                type="password"
                name="confirm"
                required
                value={confirm}
                onChange={event => {
                  setConfirm(event.target.value);
                }}
              />
            </li>
          </ul>
        </div>
        <li>
          <input
            type="checkbox"
            onChange={event => {
              setIsChecked(!isChecked);
            }}
          />
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
              } else if (!isChecked) {
                alert("Vous devez accepter les CGV et CGU");
              } else if (password && confirm && name && email && isChecked) {
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
