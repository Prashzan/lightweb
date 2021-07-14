import React from "react";
import { ProductContext } from "../../context/ProductContext";
// import Loading from "../Loading";
import ProductList from "./ProductList";
const OtherProducts = () => {
  const { products } = React.useContext(ProductContext);

  return <ProductList title="Other Products" products={products} />;
};

export default OtherProducts;
