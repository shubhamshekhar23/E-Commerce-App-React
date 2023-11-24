import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsSuccess(state, action) {
      state.status = "succeeded";
      state.products = action.payload;
    },
  },
});

export const { fetchProductsSuccess } = productSlice.actions;

export default productSlice.reducer;
