export const removeFromWishListReducer = (state, action) => {
  const { id } = action.payload;
  state.items = state.items.filter((item) => item.id !== id);
  localStorage.setItem("wishList", JSON.stringify(state));
};

export const REMOVE_FROM_WISHLIST = "wishList/removeFromWishList";
