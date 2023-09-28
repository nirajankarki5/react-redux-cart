import initialData from "../../data";

const initialState = {
  isLoading: false,
  cart: initialData,
  total: 0,
  quantity: 0,
};

export default function cartReducer(state = initialState, action) {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "ADD_QTY") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "MINUS_QTY") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "GET_TOTAL_QUANTITY") {
    const { quantity, total } = state.cart.reduce(
      (finalValue, cartItem) => {
        const newQuantity = finalValue.quantity + cartItem.quantity;
        const newTotal = finalValue.total + cartItem.quantity * cartItem.price;

        return { quantity: newQuantity, total: newTotal };
      },
      {
        quantity: 0,
        total: 0,
      }
    );

    return { ...state, quantity, total };
  }

  return state;
}

// ACTION CREATORS

export function clearCart() {
  return { type: "CLEAR_CART" };
}

export const removeItem = (id) => {
  return { type: "REMOVE_ITEM", id: id };
};

export const addQty = (id) => {
  return { type: "ADD_QTY", id: id };
};

export const minusQty = (id) => {
  return { type: "MINUS_QTY", id: id };
};

export const getTotalQty = () => {
  return { type: "GET_TOTAL_QUANTITY" };
};
