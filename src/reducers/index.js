import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productReducer";
import categoryReducer from "./category/categoryReducer";
import searchFilterReducer from "./search-filter/searchFilterReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    searchFilters: searchFilterReducer,
  },
});
