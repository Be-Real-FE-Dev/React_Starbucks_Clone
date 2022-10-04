import { createSlice } from '@reduxjs/toolkit';

// const exam = {
//   count: 2,
//   isChecked: false,
//   id: 'p1',
// };

const initialCartState = { cart: [], isAllChecked: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      // TODO: 중복된 항목을 기존 배열에 count만 늘린다.
      const addedCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      console.log(state.cart, addedCart);
      if (!addedCart) state.cart = [...state.cart, action.payload];
      else
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) item.count += action.payload.count;
        });
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    toggleItemChecked(state, action) {
      state.isAllChecked = true;
      state.cart.forEach((item) => {
        if (item.id === action.payload) item.isChecked = !item.isChecked;
        if (!item.isChecked) state.isAllChecked = false;
      });
    },
    checkAllCart(state) {
      state.isAllChecked = !state.isAllChecked;

      state.cart.forEach((item) => {
        item.isChecked = state.isAllChecked;
      });
    },
    clickCount(state, action) {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.count += action.payload.degit;

          if (item.count < 1) {
            item.count = 1;
          }

          item.price = item.price * item.count;
        }
      });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
