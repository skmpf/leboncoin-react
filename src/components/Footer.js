import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Réplique de leboncoin - Codée par{" "}
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/kempfsebastien/"
        >
          Seb
        </a>{" "}
        - <a href="http://LeReacteur.io">LeReacteur.io</a>
      </p>
    </div>
  );
}

export default Footer;
