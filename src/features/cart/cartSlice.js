import initialData from "../../data";

const initialState = {
  isLoading: false,
  cart: initialData,
  total: 0,
  quantity: 0,
};

export default function cartReducer(state = initialState, action) {
  if (action.type === "cart/clearCart") {
    return { ...state, cart: [] };
  }

  if (action.type === "cart/removeItem") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "cart/addQty") {
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

  if (action.type === "cart/minusQty") {
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

  if (action.type === "cart/getTotalQty") {
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
  return { type: "cart/clearCart" };
}

export const removeItem = (id) => {
  return { type: "cart/removeItem", id: id };
};

export const addQty = (id) => {
  return { type: "cart/addQty", id: id };
};

export const minusQty = (id) => {
  return { type: "cart/minusQty", id: id };
};

export const getTotalQty = () => {
  return { type: "cart/getTotalQty" };
};
