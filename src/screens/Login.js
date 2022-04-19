import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const login = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result));
      setLoading(false);
      toast.success("Login Successfull");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
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
