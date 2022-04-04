import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import fireDB from "../firebase";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const userid = JSON.parse(localStorage.getItem("currentUser")).user.uid;
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      setLoading(true);
      const orderInfo = await getDocs(collection(fireDB, "orders"));
      setLoading(false);
      const ordersArray = [];
      orderInfo.forEach((doc) => {
        ordersArray.push(doc.data());
        console.log(ordersArray);
      });
      setOrders(ordersArray);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <Layout loading={loading}>
      {orders
        .filter((obj) => obj.userid === userid)
        .map((order) => {
          return (
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems.map((item) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={item.imageURL}
                          height="80"
                          width="80"
                          alt=""
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
    </Layout>
  );
}

export default Orders;
