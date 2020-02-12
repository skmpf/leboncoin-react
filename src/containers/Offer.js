import React from "react";
import { useParams } from "react-router-dom";

function Offer(props) {
  const { id } = useParams();
  return <span>Offer {id}</span>;
}

export default Offer;
