import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import "./stylesheets/layout.css";
import "./stylesheets/form.css";
import "./stylesheets/home.css";
import "./stylesheets/productinfo.css";
import Cart from "./screens/Cart";
import ProductInfo from "./screens/ProductInfo";
import Orders from "./screens/Orders";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Admin from "./screens/Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/product/:productid"
            element={
              <ProtectedRoutes>
                <ProductInfo />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoutes({ children }) {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
