import { AiFillShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

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
