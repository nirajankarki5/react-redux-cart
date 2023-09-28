import { AiFillShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <h1>My Cart</h1>
      <div className="cart-icon-container">
        <p className="cart-qty">99+</p>
        <AiFillShopping className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
