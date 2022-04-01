import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import "./stylesheets/layout.css";
import "./stylesheets/form.css";
import "./stylesheets/home.css";
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
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productid" element={<ProductInfo />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
