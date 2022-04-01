import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../firebase";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productArray = [];
      const products = await getDocs(collection(fireDB, "products"));
      products.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productArray.push(obj);
        console.log(productArray);
      });
      setProducts(productArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className="container">
        {products.map((item) => {
          return (
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="uppercard">
                    <div className="bestseller">Best seller</div>

                    <div className="img">
                      <img src={item.imageURL} alt="" className="home-image" />
                    </div>
                  </div>

                  <div className="belowcard">
                    <div className="description">{item.name}</div>

                    <div className="rating">
                      <span className="star">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                      </span>
                      <span className="num"> 246</span>
                    </div>

                    <div className="price">
                      <span className="rs">Rs.</span>
                      <span className="amount">{item.price}</span>
                      <span className="linethrough">Rs.69,900</span>
                      <span className="off">(7% off)</span>
                    </div>

                    <div className="discount">
                      Flat INR 4000 Off on SBI Cards
                    </div>

                    <br />

                    <div className="getitby">
                      Get it by<b> Monday, March 21</b>
                    </div>

                    <div className="free">FREE Delivery by Amazon</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
