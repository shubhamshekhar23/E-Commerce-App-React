import * as productApiService from "./api/product-api.service";
import {
  fetchProductsSuccess,
  fetchSkipLimitedProductsSuccess,
} from "../reducers/productReducer";
import { store } from "../reducers/";

export const resetProducts = async () => {
  const dispatch = store.dispatch;
  try {
    dispatch(fetchProductsSuccess([]));
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllProducts = async (options = null) => {
  try {
    const response = await productApiService.fetchAllProducts(options);
    _dispatchProductUpdateStore(response.data.products, options);
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsOfCategory = async (categoryName, options = null) => {
  try {
    const response = await productApiService.fetchProductsOfCategory(
      categoryName,
      options
    );
    _dispatchProductUpdateStore(response.data.products, options);
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = async (querySearch, options = null) => {
  try {
    const response = await productApiService.searchProducts(
      querySearch,
      options
    );
    _dispatchProductUpdateStore(response.data.products, options);
  } catch (error) {
    console.log(error);
  }
};

export const searchProductsAndFilterWithCategory = async (
  category,
  querySearch,
  options
) => {
  try {
    if (!querySearch) {
      _handleIfQuerySearchAbsent(category, options);
      return;
    }
    _handleIfQuerySearchPresent(category, querySearch, options);
  } catch (error) {
    console.log(error);
  }
};

async function _dispatchProductUpdateStore(products, options) {
  const dispatch = store.dispatch;

  if (options) {
    dispatch(fetchSkipLimitedProductsSuccess(products));
    return;
  }
  dispatch(fetchProductsSuccess(products));
}

async function _handleIfQuerySearchPresent(category, querySearch, options) {
  const dispatch = store.dispatch;
  const response = await productApiService.searchProducts(querySearch, options);
  const products = response.data.products;
  if (!category) {
    _dispatchProductUpdateStore(products, options);
    return;
  }
  let filteredProducts = products;
  filteredProducts = products.filter((item) => item.category === category);
  _dispatchProductUpdateStore(filteredProducts, options);
}

async function _handleIfQuerySearchAbsent(category, options) {
  if (category) {
    fetchProductsOfCategory(category, options);
    return;
  }
  fetchAllProducts(options);
}
