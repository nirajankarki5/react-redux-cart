import { useEffect } from "react";
import { AiFillShopping } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { getTotalQty } from "../features/cart/cartSlice";

const Navbar = () => {
  const { quantity, cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // get no of cart items when clear cart is performed
  useEffect(() => {
    dispatch(getTotalQty());
  }, [cart, dispatch]);

  return (
    <nav>
      <h1>My Cart</h1>
      <div className="cart-icon-container">
        <p className="cart-qty">{quantity}</p>
        <AiFillShopping className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
