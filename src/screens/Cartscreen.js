import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GiTrashCan } from "react-icons/gi";
import "../App.css";
import addToCart from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";

function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const subTotal = cartstate.cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ frontSize: "40px" }}>My Cart</h2>

          {cartstate.cartItems.map((item) => {
            return (
              <div className="d-flex">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.varients}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.varients]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <AiOutlinePlus
                    className="plus"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varients)
                      );
                    }}
                  />
                  <b>{item.quantity}</b>
                  <AiOutlineMinus
                    className="Minus"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varients)
                      );
                    }}
                  />
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", height: "80px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <GiTrashCan
                    className="trash mt-5"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-left">
          <h2 style={{ fontSize: "45px" }}>SubTotal : {subTotal} </h2>
          <button className="btn">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cartscreen;
