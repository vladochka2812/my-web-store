export const cleanWishListReducer = (state) => {
  state.items = [];
  localStorage.setItem("wishList", JSON.stringify(state));
};

export const CLEAN_WISHLIST = "wishList/cleanWishList";
