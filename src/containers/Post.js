import React, { useState } from "react";
import "../components/css/post.css";
import Cookies from "js-cookie";
import axios from "axios";

function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const token = Cookies.get("userToken");

  console.log(typeof price);

  const createPost = async () => {
    try {
      await axios.post(
        "https://leboncoin-api-2003.herokuapp.com/offer/publish",
        {
          title,
          description,
          price
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      alert(error.message);
    }
  };

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
            required
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
            required
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
            type="number"
            required
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
          <button
            onClick={event => {
              event.preventDefault();
              if (title && description && price) {
                createPost();
                alert("Votre annonce est postée");
              }
            }}
          >
            Valider
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Post;
