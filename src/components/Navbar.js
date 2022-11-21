import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

import "../App.css";

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg  shadow-lg p-3 mb-5 bg-body rounded">
      <Link className="nav-link " to="/">
        <a className="navbar-brand">SHEY PIZZA</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {userstate.currentUser ? (
            <div className="dropdown mt-1 ">
              <a
                className=" dropdown-toggle nav-link "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userstate.currentUser.name}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Orders
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <li>Logout</li>
                </a>
              </div>
            </div>
          ) : (
            <li className="nav-item active">
              <Link to="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <a>Cart {cartstate.cartItems.length}</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
