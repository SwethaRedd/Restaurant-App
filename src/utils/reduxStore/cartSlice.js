import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      //new react tool kit:  mutating the state here : Directly modifying the state
      state.items.push(action.payload);
      /*
        Vanila(older) redux version => 
            1. DON'T MUTATE STATE,
            2. returning was mandatory

        const newState= [...state];   you copy the state
        newState.items.push(action.payload);   you modify the new copied State.
        return newState ;   you return the newState

      */
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // state.items.length === 0; // originalState = []
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});
// export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export reducers
export default cartSlice.reducer;
