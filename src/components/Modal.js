import React from "react";

const Modal = () => {
  return (
    <>
      <div className="modal"></div>
      <div className="modal-content">
        <h3 className="modal-title">Are you sure want to remove all items?</h3>
        <div className="button-div">
          <button className="btn yes-btn">Yes</button>
          <button className="btn no-btn">No</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
