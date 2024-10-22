import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import wishListReducer from "./wishList/wishListSlice";
import categoryReducer from "./category/categoryItemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    category: categoryReducer,
  },
});
