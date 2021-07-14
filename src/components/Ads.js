import React from "react";

const Ads = ({ title, image, alt }) => {
  return (
    <section className="ads-placeholder">
      <p className="product-title">This space is Reserved for ads</p>
      <p className="product-price">{title}</p>
      <p className="product-price">Get 15 % off</p>
      <img src={image} alt={alt} />
    </section>
  );
};

export default Ads;
