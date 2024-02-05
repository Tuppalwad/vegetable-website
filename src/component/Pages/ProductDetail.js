import React, { useState } from "react";
import Navbar from "../General/Navbar";
import Header from "../General/Header";
import img from "../../asset/img/product/details/product-details-1.jpg";
import img1 from "../../asset/img/product/details/thumb-1.jpg";
import img2 from "../../asset/img/product/details/thumb-2.jpg";
import img3 from "../../asset/img/product/details/thumb-3.jpg";
import img4 from "../../asset/img/product/details/thumb-4.jpg";
import "../../css/ProductDetail.css";
import Footer from "../General/Footer";
import { Link } from "react-router-dom";
const data = [
  {
    img: img1,
    name: "Crab Pool Security",
    price: "$30.00",
  },
  {
    img: img2,
    name: "Crab Pool Security",
    price: "$30.00",
  },
  {
    img: img3,
    name: "Crab Pool Security",
    price: "$30.00",
  },
  {
    img: img4,
    name: "Crab Pool Security",
    price: "$30.00",
  },
];
function ProductDetail() {
  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel my-2 ">
                  <img
                    data-imgbigurl="img/product/details/product-details-2.jpg"
                    src={img1}
                    alt=""
                    className="    me-2"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-3.jpg"
                    src={img2}
                    alt=""
                    className="    me-2"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-5.jpg"
                    src={img3}
                    alt=""
                    className="    me-2"
                  />
                  <img
                    data-imgbigurl="img/product/details/product-details-4.jpg"
                    src={img4}
                    alt=""
                    className="    me-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">$50.00</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  Link. Vestibulum ac diam sit amet quam vehicula elementum sed
                  sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam
                  sit amet quam vehicula elementum sed sit amet dui. Proin eget
                  tortor risus.
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <button className="primary-btn">ADD TO CARD</button>
                <Link href="#" className="heart-icon">
                  <i className="fa fa-heart"></i>
                </Link>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>0.5 kg</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <Link href="#" className="btn btn-light btn-rounded">
                        <i className="fa fa-facebook footer__icon"></i>
                      </Link>
                      <Link href="#" className="btn btn-light btn-rounded">
                        <i className="fa fa-instagram footer__icon"></i>
                      </Link>
                      <Link href="#" className="btn btn-light btn-rounded">
                        <i className="fa fa-twitter footer__icon"></i>
                      </Link>
                      <Link href="#" className="btn btn-light btn-rounded">
                        <i className="fa fa-pinterest footer__icon"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 my-3">
              <section className="product-details ">
                <div className="container">
                  <div className="row">
                    {/* Rest of your code */}
                    <div className="col-lg-12 my-3">
                      <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === "Description" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("Description")}
                            >
                              Description
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === "Information" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("Information")}
                            >
                              Information
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className={`nav-link ${
                                activeTab === "Reviews" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("Reviews")}
                            >
                              Reviews <span>(1)</span>
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content">
                          {activeTab === "Description" && (
                            <div className="tab-pane active" role="tabpanel">
                              <div className="product__details__tab__desc">
                                <h6>Products Description</h6>
                                <p>
                                  Vestibulum ac diam sit amet quam vehicula
                                  elementum sed sit amet dui. Pellentesque in
                                  ipsum id orci porta dapibus. Proin eget tortor
                                  risus. Vivamus suscipit tortor eget felis
                                  porttitor volutpat. Vestibulum ac diam sit
                                  amet quam vehicula elementum sed sit amet dui.
                                  Donec rutrum congue leo eget malesuada.
                                  Vivamus suscipit tortor eget felis porttitor
                                  volutpat. Curabitur arcu erat, accumsan id
                                  imperdiet et, porttitor at sem. Praesent
                                  sapien massa, convallis Link pellentesque nec,
                                  egestas non nisi. Vestibulum ac diam sit amet
                                  quam vehicula elementum sed sit amet dui.
                                  Vestibulum ante ipsum primis in faucibus orci
                                  luctus et ultrices posuere cubilia Curae;
                                  Donec velit neque, auctor sit amet aliquam
                                  vel, ullamcorper sit amet ligula. Proin eget
                                  tortor risus.
                                </p>
                              </div>
                            </div>
                          )}
                          {activeTab === "Information" && (
                            <div className="tab-pane active" role="tabpanel">
                              <div className="product__details__tab__desc">
                                <h6>Products Information</h6>
                                <p>
                                  Vestibulum ac diam sit amet quam vehicula
                                  elementum sed sit amet dui. Pellentesque in
                                  ipsum id orci porta dapibus. Proin eget tortor
                                  risus. Vivamus suscipit tortor eget felis
                                  porttitor volutpat. Vestibulum ac diam sit
                                  amet quam vehicula elementum sed sit amet dui.
                                  Donec rutrum congue leo eget malesuada.
                                  Vivamus suscipit tortor eget felis porttitor
                                  volutpat. Curabitur arcu erat, accumsan id
                                  imperdiet et, porttitor at sem. Praesent
                                  sapien massa, convallis Link pellentesque nec,
                                  egestas non nisi. Vestibulum ac diam sit amet
                                  quam vehicula elementum sed sit amet dui.
                                  Vestibulum ante ipsum primis in faucibus orci
                                  luctus et ultrices posuere cubilia Curae;
                                  Donec velit neque, auctor sit amet aliquam
                                  vel, ullamcorper sit amet ligula. Proin eget
                                  tortor risus.
                                </p>
                              </div>
                            </div>
                          )}
                          {activeTab === "Reviews" && (
                            <div className="tab-pane active" role="tabpanel">
                              <div className="product__details__tab__desc">
                                <h6>Products Reviews</h6>
                                <p>
                                  Vestibulum ac diam sit amet quam vehicula
                                  elementum sed sit amet dui. Pellentesque in
                                  ipsum id orci porta dapibus. Proin eget tortor
                                  risus. Vivamus suscipit tortor eget felis
                                  porttitor volutpat. Vestibulum ac diam sit
                                  amet quam vehicula elementum sed sit amet dui.
                                  Donec rutrum congue leo eget malesuada.
                                  Vivamus suscipit tortor eget felis porttitor
                                  volutpat. Curabitur arcu erat, accumsan id
                                  imperdiet et, porttitor at sem. Praesent
                                  sapien massa, convallis Link pellentesque nec,
                                  egestas non nisi. Vestibulum ac diam sit amet
                                  quam vehicula elementum sed sit amet dui.
                                  Vestibulum ante ipsum primis in faucibus orci
                                  luctus et ultrices posuere cubilia Curae;
                                  Donec velit neque, auctor sit amet aliquam
                                  vel, ullamcorper sit amet ligula. Proin eget
                                  tortor risus.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        resizeMode: "contain",
                        repeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <Link href="#">
                            <i className="fa fa-heart"></i>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link href="#">{item.name}</Link>
                      </h6>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetail;
