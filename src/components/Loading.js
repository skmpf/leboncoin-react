import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading type={"spin"} color={"#ff6e14"} height={"25%"} width={"25%"} />
);

export default Loading;
