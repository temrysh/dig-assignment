import React from "react";

export default ({ title, price, image }) => (
  <div>
    <h3>{title}</h3>
    <h4>{price}</h4>
    <img src={image} />
  </div>
);
