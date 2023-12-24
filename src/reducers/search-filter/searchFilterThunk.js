import * as productService from "../../services/product.service";
import { setSearchTerm, setCategory } from "./searchFilterReducer";

export const updateSearchTerm = (category, searchTerm, options = null) => {
  return async (dispatch) => {
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
};
