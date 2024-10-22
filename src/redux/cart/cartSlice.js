import { createSlice } from "@reduxjs/toolkit";
import { ADD_TO_CARD, addToCartReducer } from "./reducers/addToCartReducer";
import {
  REMOVE_FROM_CARD,
  removeFromCartReducer,
} from "./reducers/removeFromCartReducer";
import { CLEAN_CART, cleanCartReducer } from "./reducers/cleanCartReducer";

const getCartData = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return { items: [], totalPrice: 0, totalAmount: 0 };
  }
};

const initialState = getCartData();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_TO_CARD, addToCartReducer)
      .addCase(REMOVE_FROM_CARD, removeFromCartReducer)
      .addCase(CLEAN_CART, cleanCartReducer);
  },
});

export default cartSlice.reducer;
