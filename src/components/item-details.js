import React from "react";
import Gallery from "./gallery";

export default ({ title, description, specification, price, images }) => (
  <div>
    <h1>{title}</h1>
    <h2>{price}</h2>
    <p>{description}</p>
    <p>{specification}</p>
    <Gallery images={images} />
  </div>
);
