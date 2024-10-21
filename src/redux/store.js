import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import wishListReducer from "./wishList/wishListSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, wishList: wishListReducer },
});
