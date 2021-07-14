import React from "react";
import SaleProduct from "./SaleProduct";

const SaleProductList = ({ title, products }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map((product) => (
          <SaleProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default SaleProductList;
