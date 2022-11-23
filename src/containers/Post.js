import React, { useState } from "react";
import "../components/css/post.css";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function Post({ user, fetchData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const pictures = [];
  const token = Cookies.get("userToken");
  const history = useHistory();

  const createPost = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      for (let i = 0; i < pictures.length; i++) {
        formData.append("files", pictures[i]);
      }

      await axios.post(
        "https://leboncoin-api-2003.fly.dev/offer/publish",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  if (user === null) {
    return <Redirect to="/user/sign_in" />;
  } else {
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
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </li>
          <li>
            <p>Texte de l'annonce *</p>
          </li>
          <li>
            <textarea
              type="text"
              required
              value={description}
              onChange={(event) => {
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
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
            <span> €</span>
          </li>
          <li>
            <p>Photo *</p>
          </li>
          <li>
            <input
              type="file"
              multiple
              onChange={(event) => {
                for (let i = 0; i < event.target.files.length; i++) {
                  pictures.push(event.target.files[i]);
                }
              }}
            />
          </li>
          <li>
            <button
              onClick={(event) => {
                event.preventDefault();
                if (title && description && price) {
                  createPost();
                  alert(
                    "Votre annonce est postée, elle apparaîtra sur notre plateforme dans quelques instants !"
                  );
                  history.push("/");
                  fetchData();
                } else {
                  alert("Veuillez compléter tous les champs indiqués par un *");
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
}

export default Post;
