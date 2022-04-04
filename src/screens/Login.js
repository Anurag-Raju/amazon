import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  async function login() {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/";
      toast.success("Login Successfull");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
      setLoading(false);
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
            <button className="sign-in" onClick={login}>
              Sign In
            </button>
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
