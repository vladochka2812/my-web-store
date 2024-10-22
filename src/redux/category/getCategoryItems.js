import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryItems = createAsyncThunk(
  "category/getCategoryItems",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/category/${category}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch category items");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
