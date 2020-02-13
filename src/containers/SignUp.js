import React from "react";

import "../components/css/sign-up.css";

function SignUp() {
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
          <input type="text" name="username" />
        </li>
        <li>Adresse email *</li>
        <li>
          <input type="email" name="email" />
        </li>
        <li>Mot de passe *</li>
        <li>
          <input type="password" name="password" />
        </li>
        <li>Confirmer le mot de passe *</li>
        <li>
          <input type="password" name="password" />
        </li>
        <li>
          <input type="checkbox" />
          <span>
            "J'accepte les Conditions Générales de Vente et les Conditions
            Générales d'Utilisation"
          </span>
        </li>
        <li>
          <button>Créer mon Compte Personnel</button>
        </li>
      </ul>
    </div>
  );
}

export default SignUp;
