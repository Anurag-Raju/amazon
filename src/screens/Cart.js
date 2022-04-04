import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import fireDB from "../firebase";
import { toast } from "react-toastify";
function Cart() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => {
      temp = temp + item.price;
      setAmount(temp);
    }, []);
  });
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const deleteFromCart = (item) => {
    dispatch({ type: "DELETE_FROM_CART", payload: item });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const placeOrder = async () => {
    const addressInfo = {
      name,
      address,
      phoneNumber,
    };
    console.log(addressInfo);
    const orderInfo = {
      cartItems,
      addressInfo,
      email: JSON.parse(localStorage.getItem("currentUser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentUser")).user.uid,
    };
    try {
      setLoading(true);
      await addDoc(collection(fireDB, "orders"), orderInfo);
      handleClose();
      toast.success("Order Successfully Placed");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Order Failed");
      setLoading(false);
    }
  };
  return (
    <Layout loading={loading}>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imageURL} height="80" width="80" alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash
                    onClick={() => {
                      deleteFromCart(item);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <h1>Total Amount={amount}Rs/-</h1>
      </div>
      <div className="d-flex justify-content-end">
        <button className="productinfo-button" onClick={handleShow}>
          Proceed to Buy
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f0f0f0" }}>
          <Modal.Title>Add a delivery address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
            type="text"
            class="form-control login-input"
          />
          <textarea
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="address"
            type="text"
            class="form-control login-input"
          />
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="phone number"
            type="number"
            class="form-control login-input"
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f2f2f2" }}>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setPayment(true);
            }}
          >
            Deliver to this address
          </Button>
        </Modal.Footer>
      </Modal>
      {payment && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "#f0f0f0" }}>
            <Modal.Title>Add your credit or debit card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              placeholder="Card number"
              type="number"
              class="form-control login-input"
            />
            <input
              placeholder="Name on card"
              type="text"
              class="form-control login-input"
            />
            <input
              placeholder="MM/YYYY"
              type="number"
              class="form-control login-input"
            />
            <input
              placeholder="CVV"
              max="3"
              type="number"
              class="form-control login-input"
            />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#f2f2f2" }}>
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={placeOrder}>
              Buy Now
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Layout>
  );
}

export default Cart;
