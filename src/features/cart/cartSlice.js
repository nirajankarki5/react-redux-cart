import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../data";

const initialState = {
  isLoading: false,
  cart: initialData,
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state, action) {
      state.cart = [];
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    addQty(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    minusQty(state, action) {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },

    getTotalQty(state, action) {
      const { total, quantity } = state.cart.reduce(
        (finalValue, cartItem) => {
          const newQuantity = finalValue.quantity + cartItem.quantity;
          const newTotal =
            finalValue.total + cartItem.quantity * cartItem.price;

          return { total: newTotal, quantity: newQuantity };
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.quantity = quantity;
      state.total = total;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, addQty, minusQty, getTotalQty } =
  cartSlice.actions;

export default cartSlice.reducer;
