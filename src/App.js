import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotalQty } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";

function App() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // display no of cart items and total price when clearCart is performed
  useEffect(() => {
    dispatch(getTotalQty());
  }, [cart, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
