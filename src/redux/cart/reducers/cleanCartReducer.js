export const cleanCartReducer = (state) => {
  state.items = [];
  state.totalPrice = 0;
  state.totalAmount = 0;
  localStorage.setItem("cart", JSON.stringify(state));
};

export const CLEAN_CART = "cart/cleanCart";
