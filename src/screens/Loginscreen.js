import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <div className="row justify-content-center  mt-4 ">
      <div className="col-md-5  mt-5 text-left  shadow-lg p-3 mb-5 bg-white rounded">
        <h2 style={{ fontSize: "35px" }}>Login</h2>

        {loading && <Loading />}
        {error && <Error error="Invalid Credetials" />}

        <input
          type="text"
          placeholder="email"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button onClick={login} className="btn mt-2">
          LOGIN
        </button>
        <br />
        <Link to="/register">
          <a>Click Here To Register</a>
        </Link>
      </div>
    </div>
  );
}

export default Loginscreen;
