import { setSearchTerm, setCategory } from "../searchFilterReducer";
import { searchProductsAndFilterWithCategory } from "../../product/thunks/productListingThunk";

export const updateSearchTerm = (category, searchTerm, options = null) => {
  return async (dispatch) => {
    try {
      dispatch(setSearchTerm(searchTerm));
      dispatch(setCategory(category));

      dispatch(
        searchProductsAndFilterWithCategory(category, searchTerm, options)
      );
    } catch (error) {
      console.log(error);
    }
  };
};
