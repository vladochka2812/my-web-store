export const addToWishListReducer = (state, action) => {
  const newItem = action.payload;
  state.items.push({ id: newItem.id });
  localStorage.setItem("wishList", JSON.stringify(state));
};

export const ADD_TO_WISHLIST = "wishList/addToWishList";
