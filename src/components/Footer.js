import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h4>
        Réplique de{" "}
        <a href="https://www.leboncoin.fr/" target="_blank">
          leboncoin
        </a>{" "}
        - Codée par{" "}
        <a href="https://www.linkedin.com/in/kempfsebastien/" target="_blank">
          Seb
        </a>{" "}
        -{" "}
        <a href="http://LeReacteur.io" target="_blank">
          LeReacteur.io
        </a>
      </h4>
    </div>
  );
}

export default Footer;
