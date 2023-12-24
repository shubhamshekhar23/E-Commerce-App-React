import * as categoryService from "./api/category-api.service";
import { fetchCategoriesSuccess } from "../reducers/category/categoryReducer";
import { store } from "../reducers/";

export const fetchCategories = async () => {
  // const dispatch = store.dispatch;
  // try {
  //   const response = await categoryService.fetchCategories();
  //   dispatch(fetchCategoriesSuccess(response.data));
  // } catch (error) {
  //   console.log(error);
  // }
};
