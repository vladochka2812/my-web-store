export const removeFromCartReducer = (state, action) => {
  const { id, removeCompletely } = action.payload;
  const existingItem = state.items.find((item) => item.id === id);

  if (existingItem) {
    if (removeCompletely) {
      state.totalPrice -= existingItem.price * existingItem.amount;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalAmount -= existingItem.amount;
    } else {
      if (existingItem.amount > 1) {
        existingItem.amount--;
        state.totalPrice -= existingItem.price;
      } else {
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter((item) => item.id !== id);
      }
      state.totalAmount--;
    }
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

export const REMOVE_FROM_CARD = "cart/removeFromCart";
