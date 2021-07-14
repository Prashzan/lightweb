// import React from "react";
// import { Link } from "react-router-dom";
// import { ProductContext } from "../../context/ProductContext";

// const SaleProduct = ({ products }) => {
//   const { saleproduct } = React.useContext(ProductContext);
//   const renderSaleProducts = () =>
//     saleproduct?.map(({ id, url, title, price, saleprice }) => {
//       return (
//         <article key={id} className="product">
//           <div className="img-container">
//             <img src={url} alt={title} />
//             <Link
//               to={`products/${id}`}
//               className="btn btn-primary product-link"
//             >
//               details
//             </Link>
//           </div>
//           <div className="product-footer">
//             <p className="product-title">{title}</p>
//             <p className="product-title">ON SALE</p>
//             <p className="sale-price">${price}</p>
//             <p className="product-price">${saleprice}</p>
//           </div>
//         </article>
//       );
//     });
//   return (
//     <div>
//       <p>SALE PRODUCTS</p>
//       {renderSaleProducts()}
//     </div>
//   );
// };

// export default SaleProduct;

import React from "react";
import { Link } from "react-router-dom";

const SaleProduct = ({ image, title, id, price, saleprice, salediscount }) => {
  const url = image.url;
  return (
    <article className="product">
      <div className="img-container">
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">ON SALE</p>
        <p className="product-title">{salediscount} off</p>
        <p className="sale-price">${price}</p>
        <p className="product-price">${saleprice}</p>
      </div>
    </article>
  );
};

export default SaleProduct;
