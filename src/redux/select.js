import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.items;
export const selectWishListItems = (state) => state.wishList.items;

export const selectItems = createSelector(
  [selectCartItems, selectWishListItems],
  (cart, wishList) => ({ cart, wishList })
);
