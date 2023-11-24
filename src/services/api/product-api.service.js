import api from "./api.service";

export const fetchAllProducts = () => api.get(`/products`);

export const fetchProductsOfCategory = (category) =>
  api.get(`/products/category/${category}`);

export const searchProducts = (searchQuery) =>
  api.get(`/products/search?q=${searchQuery}`);
