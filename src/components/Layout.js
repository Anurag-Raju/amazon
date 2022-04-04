import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.loading && <Loader />}
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
