export const fetchList = () =>
  fetch(
    "http://private-5815fe-recommendationsknip.apiary-mock.com/products"
  ).then(res => res.json());
