import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = { products: [], product: {} };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    fetch(state, action) {
      state.products = action.payload;
    },
    getProductById(state, action) {
      state.product = state.products[action.payload];
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
