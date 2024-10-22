import { createSlice } from "@reduxjs/toolkit";
import { getCategoryItems } from "./getCategoryItems";

const initialState = {
  categoryItems: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryItems.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryItems = action.payload;
      })
      .addCase(getCategoryItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
