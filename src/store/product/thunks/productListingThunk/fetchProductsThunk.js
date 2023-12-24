import * as productApiService from "../../../../services/api/product-api.service";
import {
  fetchProductsSuccess,
  fetchSkipLimitedProductsSuccess,
} from "../../productReducer";

export const fetchAllProducts = (options = null) => {
  return async (dispatch) => {
    try {
      const response = await productApiService.fetchAllProducts(options);
      dispatch(productUpdateStore(response.data.products, options));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProductsOfCategory = (categoryName, options = null) => {
  return async (dispatch) => {
    try {
      const response = await productApiService.fetchProductsOfCategory(
        categoryName,
        options
      );
      dispatch(productUpdateStore(response.data.products, options));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProducts = (querySearch, options = null) => {
  return async (dispatch) => {
    try {
      const response = await productApiService.searchProducts(
        querySearch,
        options
      );
      dispatch(productUpdateStore(response.data.products, options));
    } catch (error) {
      console.log(error);
    }
  };
};

export function productUpdateStore(products, options) {
  return async (dispatch) => {
    if (options) {
      dispatch(fetchSkipLimitedProductsSuccess(products));
      return;
    }
    dispatch(fetchProductsSuccess(products));
  };
}
