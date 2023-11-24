import * as productService from "./product.service";
import { setCategory, setSearchTerm } from "../reducers/searchFilterReducer";
import { store } from "../reducers/";

export const updateCategory = async (category) => {
  const dispatch = store.dispatch;
  try {
    dispatch(setCategory(category));
  } catch (error) {
    console.log(error);
  }
};

export const updateSearchTerm = async (category, searchTerm) => {
  const dispatch = store.dispatch;
  try {
    dispatch(setSearchTerm(searchTerm));
    dispatch(setCategory(category));

    productService.searchProductsAndFilterWithCategory(category, searchTerm);
  } catch (error) {
    console.log(error);
  }
};
