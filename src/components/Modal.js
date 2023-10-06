import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  return (
    <>
      <div className="modal"></div>
      <div className="modal-content">
        <h3 className="modal-title">Are you sure want to remove all items?</h3>
        <div className="button-div">
          <button className="btn yes-btn" onClick={onSubmit}>
            Yes
          </button>
          <button className="btn no-btn" onClick={() => dispatch(closeModal())}>
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
