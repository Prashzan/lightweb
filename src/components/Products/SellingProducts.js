import React from "react";
import { ProductContext } from "../../context/ProductContext";
// import Loading from "../Loading";
import SaleProductList from "./SaleProductList";

const SellingProducts = () => {
  const { saleproduct } = React.useContext(ProductContext);
  console.log(saleproduct);

  return <SaleProductList title="Sale Products" products={saleproduct} />;
};

export default SellingProducts;
