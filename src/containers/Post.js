import React, { useState } from "react";
import "../components/css/post.css";

function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  console.log(title);
  console.log(description);
  console.log(price);

  return (
    <div className="post wrapper">
      <ul>
        <li>
          <h4>Déposer une annonce</h4>
        </li>
        <li></li>
        <li>
          <p>Titre de l'annonce *</p>
        </li>
        <li>
          <input
            type="text"
            required="required"
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
        </li>
        <li>
          <p>Texte de l'annonce *</p>
        </li>
        <li>
          <input
            type="text"
            required="required"
            value={description}
            onChange={event => {
              setDescription(event.target.value);
            }}
          />
        </li>
        <li>
          <p>Prix *</p>
        </li>
        <li>
          <input
            type="text"
            required="required"
            value={price}
            onChange={event => {
              setPrice(event.target.value);
            }}
          />
          <span> €</span>
        </li>
        <li>
          <p>Photo *</p>
        </li>
        <li>
          <button>Choose file</button>
          <span> No file chosen</span>
        </li>
        <li>
          <button>Valider</button>
        </li>
      </ul>
    </div>
  );
}

export default Post;
