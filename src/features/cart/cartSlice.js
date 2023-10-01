import initialData from "../../data";

const initialState = {
  isLoading: false,
  cart: initialData,
  total: 0,
  quantity: 0,
};

export default function cartReducer(state = initialState, action) {
  if (action.type === "cart/clear_cart") {
    return { ...state, cart: [] };
  }

  if (action.type === "cart/remove_item") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "cart/add_qty") {
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

  if (action.type === "cart/minus_qty") {
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

  if (action.type === "cart/get_total_quantity") {
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
  return { type: "cart/clear_cart" };
}

export const removeItem = (id) => {
  return { type: "cart/remove_item", id: id };
};

export const addQty = (id) => {
  return { type: "cart/add_qty", id: id };
};

export const minusQty = (id) => {
  return { type: "cart/minus_qty", id: id };
};

export const getTotalQty = () => {
  return { type: "cart/get_total_quantity" };
};
