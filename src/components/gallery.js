import React from "react";
import ImageGallery from "react-image-gallery";

const mapImg = img => ({
  original: img.original,
  thumbnail: img.thumb
});

export default ({ images }) => <ImageGallery items={images.map(mapImg)} />;
