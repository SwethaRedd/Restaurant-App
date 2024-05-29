import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here : Directly modifying the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length === 0;
    },
  },
});
// export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export reducers
export default cartSlice.reducer;
