import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [capssword, setcapssword] = useState("");
  const dispatch = useDispatch();
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const register = () => {
    if (password !== capssword) {
      alert("passwords not matched ");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        {loading && <Loading />}
        {success && <Success success="User Registered Successfully" />}
        {error && <Error error="email already" />}

        <h2 style={{ fontSize: "35px" }}>Register</h2>
        <div>
          <input
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="confirm password"
            className="form-control"
            value={capssword}
            onChange={(e) => setcapssword(e.target.value)}
          />
          <button className="btn mt-2" onClick={register}>
            REGISTER
          </button>
          <br />
          <Link to="/login">
            <a>Click To Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
