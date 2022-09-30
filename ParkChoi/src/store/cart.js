import { createSlice } from '@reduxjs/toolkit';

// const exam = {
//   count: 2,
//   isChecked: false,
//   id: 'p1',
// };

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      // TODO: 중복된 항목을 기존 배열에 count만 늘린다.
      state.cart = [...state.cart, action.payload];
    },
    clearCart(state) {
      state.cart = [];
    },
    toggleItemChecked(state, action) {
      state.cart.forEach((item) => {
        if (item.id === action.payload) item.isChecked = !item.isChecked;
      });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
