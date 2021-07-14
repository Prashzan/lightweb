import React from "react";
import Product from "./Product";

const ProductList = ({ title, products }) => {
  // console.log(products);
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
