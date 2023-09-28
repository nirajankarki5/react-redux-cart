import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CartItem = ({ id, title, price, quantity, img }) => {
  return (
    <div className="cart-item">
      <div className="item1">
        <img src={img} alt={title} />
        <div className="details">
          <h3>{title}</h3>
          <p>${price}</p>
          <button onClick={() => console.log("REMOVE")}>remove</button>
        </div>
      </div>
      <div className="cart-qty-container">
        <IoIosArrowUp
          className="icon-btn"
          onClick={() => console.log("CLICK")}
        />
        <p>{quantity}</p>
        <IoIosArrowDown
          className="icon-btn"
          onClick={() => console.log("CLICK")}
        />
      </div>
    </div>
  );
};

export default CartItem;
