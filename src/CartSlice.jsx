import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems:0, // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const itemToRemove = state.items.find((item) => item.name === name);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.name !== name); // Return all elements except the item to be removed
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    updateTotalItems: (state, action) => {
      state.totalItems = action.payload;
    }
  },
});

export const { addItem, removeItem, updateQuantity, updateTotalItems } = CartSlice.actions;

export const selectTotalItems = (state) => state.cart.totalItems;

export default CartSlice.reducer;
