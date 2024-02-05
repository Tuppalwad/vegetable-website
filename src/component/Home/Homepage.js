import React from "react";
import Header from "../General/Header";
import Footer from "../General/Footer";
import TopSerchbar from "./TopSerchbar";
import Navbar from "../General/Navbar";
import bannerImage from "../../asset/img/hero/banner.jpg";
import Featured from "./Featured";
import Banner from "./Banner";
import Slider from "./Slider";
import Product from "./Product";
function Homepage() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <TopSerchbar></TopSerchbar>
      <div className="container-sm" >
        <div className="row">
          <div className="container-fluid " >
            <div
              className=" my-3 w-100 "
              style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                height: "500px",
              }}
            >
              <div className="hometext  ">
                <span className="text-uppercase text-success fs-4">
                  FRUIT FRESH
                </span>
                <h1 className="fw-bold" style={{ fontSize: "46px" }}>
                  Vegetable <br />
                  100% Organic
                </h1>
                <p className="lead">Free Pickup and Delivery Available</p>
                <button
                  className="btn btn-success btn-lg "
                  style={{ width: "140px" }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider></Slider>
      <Featured></Featured>
      <Banner></Banner>
      <Product></Product>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;
