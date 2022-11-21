import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import addToCart from "../actions/cartActions";
import "../App.css";

function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>{pizza.name}</h1>

      <div onClick={handleShow} className="text-center">
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "90%", width: "90%" }}
          alt={pizza.description}
        />
      </div>

      <div className="d-flex p-2 ">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="d-flex">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: {pizza.prices[0][varient] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            style={{ height: "300px" }}
            className="img-fluid"
            alt={pizza.description}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
