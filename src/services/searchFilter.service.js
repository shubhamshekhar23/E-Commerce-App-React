import * as productService from "./product.service";
import {
  setCategory,
  setSearchTerm,
  setSkip,
} from "../reducers/searchFilterReducer";
import { store } from "../reducers/";

export const resetSkip = async () => {
  const dispatch = store.dispatch;
  try {
    dispatch(setSkip(0));
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (category) => {
  const dispatch = store.dispatch;
  try {
    dispatch(setCategory(category));
  } catch (error) {
    console.log(error);
  }
};

export const updateSearchTerm = async (
  category,
  searchTerm,
  options = null
) => {
  const dispatch = store.dispatch;
  try {
    dispatch(setSearchTerm(searchTerm));
    dispatch(setCategory(category));

    productService.searchProductsAndFilterWithCategory(
      category,
      searchTerm,
      options
    );
  } catch (error) {
    console.log(error);
  }
};
