import * as productApiService from "../../../../services/api/product-api.service";
import {
  fetchProductsSuccess,
  fetchSkipLimitedProductsSuccess,
} from "../../productReducer";
import {
  handleIfQuerySearchAbsent,
  handleIfQuerySearchPresent,
} from "./querySearchHandleThunk";

export const resetProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsSuccess([]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProductsAndFilterWithCategory = (
  category,
  querySearch,
  options
) => {
  return async (dispatch) => {
    try {
      if (!querySearch) {
        dispatch(handleIfQuerySearchAbsent(category, options));
        return;
      }
      dispatch(handleIfQuerySearchPresent(category, querySearch, options));
    } catch (error) {
      console.log(error);
    }
  };
};
