import React from "react";
import Footer from "../Footer/Footer.container";
import Header from "../Header/Header.container";
import Routes from "../Routes/Routes";
export default function Home(props) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
