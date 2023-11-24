import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import searchFilterReducer from "./searchFilterReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    searchFilters: searchFilterReducer,
  },
});
