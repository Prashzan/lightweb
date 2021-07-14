export const productFilter = (data) => {
  let saleproduct = [];
  let specialproduct = [];
  let otherproduct = [];
  data.forEach((item) => {
    if (item.special) specialproduct.push(item);
    else if (item.onsale) saleproduct.push(item);
    else otherproduct.push(item);
  });
  return { saleproduct, specialproduct, otherproduct };
};

export const productFilterByCategory = (data, category) => {
  let saleproduct = [];
  let specialproduct = [];
  let otherproduct = [];
  data.forEach((item) => {
    if (item.category === category) {
      if (item.special) specialproduct.push(item);
      else if (item.onsale) saleproduct.push(item);
      else otherproduct.push(item);
    }
  });
  return { saleproduct, specialproduct, otherproduct };
};
