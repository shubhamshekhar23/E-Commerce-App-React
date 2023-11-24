import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategoriesSuccess(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { fetchCategoriesSuccess } = categorySlice.actions;

export default categorySlice.reducer;
