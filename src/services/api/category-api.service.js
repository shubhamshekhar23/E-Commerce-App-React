import api from "./api.service";

const fetchCategories = () => api.get("/products/categories");

const categoryApiService = {
  fetchCategories,
};

export default categoryApiService;
