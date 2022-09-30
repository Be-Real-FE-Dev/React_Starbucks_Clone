import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = { products: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    fetch(state, action) {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
