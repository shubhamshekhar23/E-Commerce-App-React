import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "",
  skip: 0,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSkip: (state, action) => {
      state.skip = action.payload;
    },
  },
});

export const { setSearchTerm, setCategory, setSkip } =
  searchFilterSlice.actions;

export default searchFilterSlice.reducer;
