const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalPrice: parseFloat(localStorage.getItem('totalPrice')) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalPrice', state.totalPrice.toString());
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex > -1) {
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalPrice', state.totalPrice.toString());
    },
  },
});
