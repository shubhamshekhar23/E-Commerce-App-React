import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "",
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
  },
});

export const { setSearchTerm, setCategory } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;
