import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h4>
        Réplique de leboncoin - Codée par{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/kempfsebastien/"
        >
          Seb
        </a>{" "}
        - <a href="http://LeReacteur.io">LeReacteur.io</a>
      </h4>
    </div>
  );
}

export default Footer;
