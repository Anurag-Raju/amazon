import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-parent">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="amazonlogin" src="./amazonlogin.png" alt="" />
          <div className="login-form">
            <h3>Sign-In</h3>
            <hr />
            <input placeholder="email" type="email" class="form-control" />
            <input
              placeholder="password"
              type="password"
              class="form-control"
            />
            <input
              placeholder="confirm password"
              type="text"
              class="form-control"
            />
            <button className="sign-in">Sign In</button>
          </div>
          <div>
            <br />
            <Link to="/login">
              <button className="register-button">
                Already have an account? Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
