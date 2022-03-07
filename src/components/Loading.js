import React from "react";
import ReactLoading from "react-loading";
import "./Loading.scss";

const Loading = () => (
  <div id="loading">
    <ReactLoading type="cylon" color="#000" />
    <h1>Loading...</h1>
  </div>
);

export default Loading;
