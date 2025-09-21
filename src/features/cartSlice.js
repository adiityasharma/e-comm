import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items?.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },

    removeToCart: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter(product => product.id !== action.payload)
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },
  }
})

export const { addToCart, decreaseQuantity, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;