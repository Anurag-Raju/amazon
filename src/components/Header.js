import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { user } = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={require("./amazon.png")}
              alt="amazon"
              className="amazon-image"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              {/* <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <FaUser />
                  {user.email.substring(0, user.email.length - 10)}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <FaCartPlus size={30} />
                  {cartItems.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
