import * as productApiService from "../../../../services/api/product-api.service";
import {
  fetchAllProducts,
  fetchProductsOfCategory,
  productUpdateStore,
} from "./fetchProductsThunk";

export function handleIfQuerySearchPresent(category, querySearch, options) {
  return async (dispatch) => {
    const response = await productApiService.searchProducts(
      querySearch,
      options
    );
    const products = response.data.products;
    if (!category) {
      dispatch(productUpdateStore(products, options));
      return;
    }
    let filteredProducts = products;
    filteredProducts = products.filter((item) => item.category === category);
    dispatch(productUpdateStore(filteredProducts, options));
  };
}

export function handleIfQuerySearchAbsent(category, options) {
  return async (dispatch) => {
    if (category) {
      dispatch(fetchProductsOfCategory(category, options));
      return;
    }
    dispatch(fetchAllProducts(options));
  };
}
