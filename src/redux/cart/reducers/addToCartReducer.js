export const addToCartReducer = (state, action) => {
  const newItem = action.payload;
  const existedItem = state.items.find((item) => item.id === newItem.id);
  if (!existedItem) {
    state.items.push({ id: newItem.id, price: newItem.price, amount: 1 });
  } else {
    existedItem.amount++;
  }
  state.totalAmount++;
  state.totalPrice += newItem.price;
  localStorage.setItem("cart", JSON.stringify(state));
};

export const ADD_TO_CARD = "cart/addToCart";
