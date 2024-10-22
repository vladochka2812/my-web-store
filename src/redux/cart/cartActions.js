import { createAction } from "@reduxjs/toolkit";
import { ADD_TO_CARD } from "./reducers/addToCartReducer";
import { CLEAN_CART } from "./reducers/cleanCartReducer";
import { REMOVE_FROM_CARD } from "./reducers/removeFromCartReducer";

export const addToCart = createAction(ADD_TO_CARD);
export const removeFromCart = createAction(REMOVE_FROM_CARD);
export const cleanCart = createAction(CLEAN_CART);
