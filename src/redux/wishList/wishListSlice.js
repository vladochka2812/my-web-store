import { createSlice } from "@reduxjs/toolkit";

const getWishListData = () => {
  const storedWishList = localStorage.getItem("wishList");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  } else {
    return { items: [] };
  }
};

const initialState = getWishListData();

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const newItem = action.payload;
      state.items.push({ id: newItem.id });
      localStorage.setItem("wishList", JSON.stringify(state));
    },
    removeFromWishList(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("wishList", JSON.stringify(state));
    },
    cleanWishList(state) {
      state.items = [];
      localStorage.setItem("wishList", JSON.stringify(state));
    },
  },
});

export const { addToWishList, removeFromWishList, cleanWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
