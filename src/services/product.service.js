import * as productApiService from "./api/product-api.service";
import { fetchProductsSuccess } from "../reducers/productReducer";
import { store } from "../reducers/";

export const fetchAllProducts = async () => {
  const dispatch = store.dispatch;
  try {
    const response = await productApiService.fetchAllProducts();
    console.log(response);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsOfCategory = async (categoryName) => {
  const dispatch = store.dispatch;
  try {
    const response = await productApiService.fetchProductsOfCategory(
      categoryName
    );
    console.log(response);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = async (querySearch) => {
  const dispatch = store.dispatch;
  try {
    const response = await productApiService.searchProducts(querySearch);
    console.log(response);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    console.log(error);
  }
};

export const searchProductsAndFilterWithCategory = async (
  category,
  querySearch
) => {
  const dispatch = store.dispatch;
  try {
    if (!querySearch) {
      _handleIfQuerySearchAbsent(category);
      return;
    }
    _handleIfQuerySearchPresent(category, querySearch, dispatch);
  } catch (error) {
    console.log(error);
  }
};

async function _handleIfQuerySearchPresent(category, querySearch, dispatch) {
  const response = await productApiService.searchProducts(querySearch);
  const products = response.data.products;
  if (!category) {
    dispatch(fetchProductsSuccess(products));
    return;
  }
  let filteredProducts = products;
  filteredProducts = products.filter((item) => item.category === category);
  dispatch(fetchProductsSuccess(filteredProducts));
}

async function _handleIfQuerySearchAbsent(category) {
  if (category) {
    fetchProductsOfCategory(category);
    return;
  }
  fetchAllProducts();
}
