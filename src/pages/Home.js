import React from "react";
import SpecialProducts from "../components/Products/SpecialProducts";
import OtherProducts from "../components/Products/AllProducts";
import { ProductContext } from "../context/ProductContext";

import Banner from "../components/Banner";
import Ads from "../components/Ads";
// import SaleProduct from "../components/Products/SaleProduct";
import SellingProducts from "../components/Products/SellingProducts";
import Header from "../components/Header";
import { productFilter } from "../utils/helper";

const Home = () => {
  const {
    saleproduct,
    setContextStateProducts,
    originalproduct,
  } = React.useContext(ProductContext);
  console.log({ saleproduct });
  const removeFilter = () => {
    const { saleproduct, specialproduct, otherproduct } = productFilter(
      originalproduct
    );
    setContextStateProducts(saleproduct, specialproduct, otherproduct);
  };

  return (
    <>
      <Banner />
      <button onClick={removeFilter} className="btn btn-primary btn-topped">
        All products
      </button>
      <Header />
      {saleproduct.length > 0 && <SellingProducts />}
      <SpecialProducts />
      <OtherProducts />

      <Ads
        title="Ecommerce solution"
        alt="testimage"
        image="https://i2.wp.com/4spotmarketing.com/wp-content/uploads/Internet-Marketing-SEO-PPC-Infusionsoft-4SpotMarketing_com-8412__Google-Ads-and-Marketing-1_083018.jpg?fit=1100%2C575&ssl=1"
      />
    </>
  );
};

export default Home;
