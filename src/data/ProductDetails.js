import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    // Add other reducers...
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
