import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-parent">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="amazonlogin" src="./amazonlogin.png" alt="" />
          <div className="login-form">
            <h3>Sign-In</h3>
            <hr />
            <input
              placeholder="email"
              type="email"
              class="form-control login-input"
            />
            <input
              placeholder="password"
              type="password"
              class="form-control login-input"
            />
            <button className="sign-in">Sign In</button>
          </div>
          <div>
            <br />
            <Link to="/register">
              <button className="register-button">
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
