import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
    },
    fetchSkipLimitedProductsSuccess(state, action) {
      if (action.payload.length > 0) {
        state.products = [...state.products, ...action.payload];
        return;
      }
    },
  },
});

export const { fetchProductsSuccess, fetchSkipLimitedProductsSuccess } =
  productSlice.actions;

export default productSlice.reducer;
