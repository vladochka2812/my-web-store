import { createSlice } from "@reduxjs/toolkit";

const getCartData = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return { items: [], totalPrice: 0, totalAmount: 0 };
  }
};

const initialState = getCartData();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existedItem = state.items.find((item) => item.id === newItem.id);
      if (!existedItem) {
        state.items.push({ id: newItem.id, price: newItem.price, amount: 1 });
      } else {
        existedItem.amount++;
      }
      console.log(newItem.price);
      state.totalAmount++;
      state.totalPrice += newItem.price;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
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
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
