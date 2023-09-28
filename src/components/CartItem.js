import { useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  addQty,
  minusQty,
  getTotalQty,
} from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, quantity, img }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  // run after each cart changes
  useEffect(() => {
    dispatch(getTotalQty());
  }, [cart, dispatch]);

  return (
    <div className="cart-item">
      <div className="item1">
        <img src={img} alt={title} />
        <div className="details">
          <h3>{title}</h3>
          <p>${price}</p>
          <button onClick={() => dispatch(removeItem(id))}>remove</button>
        </div>
      </div>
      <div className="cart-qty-container">
        <IoIosArrowUp
          className="icon-btn"
          onClick={() => dispatch(addQty(id))}
        />
        <p>{quantity}</p>
        <IoIosArrowDown
          className="icon-btn"
          onClick={() => dispatch(minusQty(id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
