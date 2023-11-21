import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    AddToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 0 };
        state.push(productClone);
      }
    },
    DeleteFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    Clear: (state, action) => {
      return [];
    },
  },
});

export const { AddToCart, DeleteFromCart, Clear } = cartSlice.actions;
export default cartSlice.reducer;
