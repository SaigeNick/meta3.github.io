import React from "react";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  console.log(item);
  return (
    <div className="row-md-4">
      <div className="card w-100 mb-4 d-flex flex-row position-relative align-items-center">
        <button
          onClick={() => onRemove(item.id)}
          className="remove-item btn btn-danger position-absolute top-0 end-0 p-2"
        >
          <i className="fas fa-times"></i>
        </button>
        <img
          src={`img/${item.product.image}`}
          className="w-50"
          alt={item.product.name}
        />
        <div className="card-body w-50 d-flex flex-column justify-content-evenly p-2">
          <h5 className="card-title fs-3">{item.product.name}</h5>
          <p className="card-text fs-4">{item.product.description}</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="item-counter flex-nowrap d-flex gap-2">
              <span
                role="button"
                className={"user-select-none"}
                onClick={() => onDecrease(item.id)}
              >
                -
              </span>
              <span>{item.quantity}</span>
              <span
                role="button"
                className={"user-select-none"}
                onClick={() => onIncrease(item.id)}
              >
                +
              </span>
            </div>
            <span className="fs-6">
              ${(item.product.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
