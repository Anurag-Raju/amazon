import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  async function register() {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast.success("Registration Successfull");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Registration Failed");
    }
  }
  return (
    <div className="login-parent">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="amazonlogin" src="./amazonlogin.png" alt="" />
          <div className="login-form">
            <h3>Sign-In</h3>
            <hr />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              type="email"
              class="form-control login-input"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              type="password"
              class="form-control login-input"
            />
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="confirm password"
              type="text"
              class="form-control login-input"
            />
            <button className="sign-in" onClick={register}>
              Register
            </button>
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
