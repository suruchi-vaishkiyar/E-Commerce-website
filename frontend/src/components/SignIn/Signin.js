// import React from "react";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./login.css";
import { login, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      alert(error);

      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
