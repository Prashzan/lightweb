import React from "react";
import all_products from "../data";
import { productFilter } from "../utils/helper";
import Loading from "../components/Loading";

export const ProductContext = React.createContext();

// consumer, provider, useContext

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [special, setSpeical] = React.useState([]);
  const [saleproduct, setSaleproduct] = React.useState([]);
  const [originalproduct] = React.useState([...all_products]);
  const setContextStateProducts = (
    saleproduct,
    specialproduct,
    otherproduct
  ) => {
    setProducts(otherproduct);
    setSpeical(specialproduct);
    setSaleproduct(saleproduct);
  };
  React.useEffect(() => {
    const { saleproduct, specialproduct, otherproduct } = productFilter(
      all_products
    );
    setContextStateProducts(saleproduct, specialproduct, otherproduct);
    // setProducts(otherproduct);
    // setSpeical(specialproduct);
    // setSaleproduct(saleproduct);
    setLoading(false);
    return () => {};
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <ProductContext.Provider
      value={{
        originalproduct,
        setContextStateProducts,
        products,
        special,
        saleproduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
