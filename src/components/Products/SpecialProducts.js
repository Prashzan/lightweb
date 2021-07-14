import React from "react";
import { ProductContext } from "../../context/ProductContext";
// import Loading from "../Loading";
import ProductList from "./ProductList";

const SpecialProducts = () => {
  const { special } = React.useContext(ProductContext);

  return <ProductList title="Special Products" products={special} />;
};

export default SpecialProducts;
