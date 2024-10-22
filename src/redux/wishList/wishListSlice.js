import { createSlice } from "@reduxjs/toolkit";
import {
  ADD_TO_WISHLIST,
  addToWishListReducer,
} from "./reducers/addToWishListReducer";
import {
  REMOVE_FROM_WISHLIST,
  removeFromWishListReducer,
} from "./reducers/removeFromWishListReducer";
import {
  CLEAN_WISHLIST,
  cleanWishListReducer,
} from "./reducers/cleanWishListReducer";

const getWishListData = () => {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  } else {
    return { items: [] };
  }
};

const initialState = getWishListData();

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_TO_WISHLIST, addToWishListReducer)
      .addCase(REMOVE_FROM_WISHLIST, removeFromWishListReducer)
      .addCase(CLEAN_WISHLIST, cleanWishListReducer);
  },
});

export default wishListSlice.reducer;
