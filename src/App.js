import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotalQty } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const { cart } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // display no of cart items and total price when cart is changed
  useEffect(() => {
    dispatch(getTotalQty());
  }, [cart, dispatch]);

  return (
    <>
      {isOpen && <Modal />}
      <div className="App">
        <Navbar />
        <CartContainer />
      </div>
    </>
  );
}

export default App;
