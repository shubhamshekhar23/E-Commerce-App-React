import categoryApiService from "../../services/api/category-api.service";
import { fetchCategoriesSuccess } from "./categoryReducer";

export const fetchCategoriesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await categoryApiService.fetchCategories();
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
