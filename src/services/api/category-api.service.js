import api from "./api.service";

export const fetchCategories = () => api.get("/products/categories");
