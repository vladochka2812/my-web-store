import { createAction } from "@reduxjs/toolkit";
import { ADD_TO_WISHLIST } from "./reducers/addToWishListReducer";
import { REMOVE_FROM_WISHLIST } from "./reducers/removeFromWishListReducer";
import { CLEAN_WISHLIST } from "./reducers/cleanWishListReducer";

export const addToWishList = createAction(ADD_TO_WISHLIST);
export const removeFromWishList = createAction(REMOVE_FROM_WISHLIST);
export const cleanWishList = createAction(CLEAN_WISHLIST);
