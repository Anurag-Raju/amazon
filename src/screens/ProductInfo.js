import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import fireDB from "../firebase";

function ProductInfo() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const params = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const productTemp = await getDoc(doc(fireDB, "products", params.productid));
    setProduct(productTemp.data());
  }
  return (
    <Layout>
      <div className="container">
        {product && (
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.imageURL}
                alt=""
                className="productinfo-image"
              />
            </div>
            <div className="col-md-4">
              <br />
            </div>
            <div className="col-md-4">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h3>Rs.{product.price}</h3>
              <button
                className="productinfo-button"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ProductInfo;
