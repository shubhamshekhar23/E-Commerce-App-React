import api from "./api.service";

export const fetchAllProducts = (options = null) => {
  let path = `/products`;
  if (options) {
    path += `?limit=${options.limit}&skip=${options.skip}`;
  }
  return api.get(path);
};

export const fetchProductsOfCategory = (category, options = null) => {
  let path = `/products/category/${category}`;
  if (options) {
    path += `?limit=${options.limit}&skip=${options.skip}`;
  }
  return api.get(path);
};

export const searchProducts = (searchQuery, options = null) => {
  let path = `/products/search?q=${searchQuery}`;
  /* disabling below as pagination not supported by 3rdparty-api */
  if (false && options) {
    path += `?limit=${options.limit}&skip=${options.skip}`;
  }
  return api.get(path);
};
