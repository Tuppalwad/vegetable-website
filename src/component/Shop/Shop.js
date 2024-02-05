import React from "react";
import Header from "../General/Header";
import Navbar from "../General/Navbar";
import TopSerchbar from "../Home/TopSerchbar";
import "../../css/Shop.css";
// import img from "../../asset/img/product/product-1.jpg";
import img2 from "../../asset/img/product/product-2.jpg";
import img3 from "../../asset/img/product/product-3.jpg";
import img4 from "../../asset/img/product/product-4.jpg";
import img5 from "../../asset/img/product/product-5.jpg";
import img6 from "../../asset/img/product/product-6.jpg";
import img7 from "../../asset/img/product/product-7.jpg";
import img8 from "../../asset/img/product/product-8.jpg";
import Footer from "../General/Footer";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import HeadingPage from "../General/HeadingPage";
const data = [
  {
    imageUrl: img2,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img3,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img3,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img4,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img5,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img6,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img7,
    title: "Crab Pool Security",
    price: "$30.00",
  },
  {
    imageUrl: img8,
    title: "Crab Pool Security",
    price: "$30.00",
  },
];
const data2 = [
  {
    imageUrl: img2,
    title: "Raisin’n’nuts",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
  {
    imageUrl: img3,
    title: "Sweet Corn",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
  {
    imageUrl: img3,
    title: "Peaches",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
  {
    imageUrl: img4,
    title: "Cherries",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
  {
    imageUrl: img5,
    title: "Pears",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
  {
    imageUrl: img6,
    title: "Avocados",
    price: "$30.00",
    discountPrice: "$36.00",
    discountPercentage: "-20%",
  },
];

function Shop() {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px (phone mode)
  console.log(isMobile);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <TopSerchbar></TopSerchbar>

      <HeadingPage
        title1={"Organi Shop"}
        title={"Home"}
        subtitle={"Shop"}
      ></HeadingPage>

      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="sidebar">
                <div class="sidebar__item text-dark">
                  <h4>Department</h4>
                  <ul className="">
                    <li>
                      <Link to="/">Fresh Meat</Link>
                    </li>
                    <li>
                      <Link to="/">Vegetables</Link>
                    </li>
                    <li>
                      <Link to="/">Fruit & Nut Gifts</Link>
                    </li>
                    <li>
                      <Link to="/">Fresh Berries</Link>
                    </li>
                    <li>
                      <Link to="/">Ocean Foods</Link>
                    </li>
                    <li>
                      <Link to="/">Butter & Eggs</Link>
                    </li>
                    <li>
                      <Link to="/">Fastfood</Link>
                    </li>
                    <li>
                      <Link to="/">Fresh Onion</Link>
                    </li>
                    <li>
                      <Link to="/">Papayaya & Crisps</Link>
                    </li>
                    <li>
                      <Link to="/">Oatmeal</Link>
                    </li>
                  </ul>
                </div>
                <div class="sidebar__item">
                  <h4>Price</h4>
                  <div class="price-range-wrap">
                    <div
                      class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      data-min="10"
                      data-max="540"
                    >
                      <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                      <span
                        tabindex="0"
                        class="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                      <span
                        tabindex="0"
                        class="ui-slider-handle ui-corner-all ui-state-default"
                      ></span>
                    </div>
                    <div class="range-slider">
                      <div class="price-input">
                        <div class="input-group mb-3">
                          <span class="input-group-text">$</span>
                          <span class="input-group-text">0.00</span>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Dollar amount (with dot and two decimal places)"
                          />
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text">$</span>
                          <span class="input-group-text">0.00</span>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Dollar amount (with dot and two decimal places)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar__item">
                  <div class="latest-product__text">
                    <h4>Latest Products</h4>
                    <div class="latest-product__slider owl-carousel">
                      <div class="latest-prdouct__slider__item">
                        <Link to="/" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src={img2} alt="" />
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="/" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src={img2} alt="" />
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                        <Link to="/" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src={img3} alt="" />
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>$30.00</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-7">
              <div class="product__discount">
                <div class="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div class="row">
                  <div class="product__discount__slider owl-carousel">
                    <Carousel>
                      {data2.map((item, index) => (
                        <Carousel.Item key={index}>
                          <div className="d-flex flex-wrap">
                            {isMobile ? (
                              <div className="col-12">
                                <div className="product__discount__item">
                                  <div
                                    className="product__discount__item__pic set-bg"
                                    style={{
                                      backgroundImage: `url(${item.imageUrl})`,
                                      backgroundSize: "cover",
                                      repeat: "no-repeat",
                                    }}
                                  >
                                    <div className="product__discount__percent">
                                      {item.discountPercentage}
                                    </div>
                                    <ul className="product__item__pic__hover">
                                      <li>
                                        <Link to="/">
                                          <i className="fa fa-heart"></i>
                                        </Link>
                                      </li>

                                      <li>
                                        <Link to="/">
                                          <i className="fa fa-shopping-cart"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="product__discount__item__text">
                                    <span>{item.title}</span>
                                    <h5>
                                      <Link to="/">{item.title}</Link>
                                    </h5>
                                    <div className="product__item__price">
                                      {item.price}{" "}
                                      <span>{item.discountPrice}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              data2.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                  <div className="product__discount__item">
                                    <div
                                      className="product__discount__item__pic set-bg"
                                      style={{
                                        backgroundImage: `url(${item.imageUrl})`,
                                        margin: "10px",
                                        backgroundSize: "cover",
                                        repeat: "no-repeat",
                                      }}
                                    >
                                      <div className="product__discount__percent">
                                        {item.discountPercentage}
                                      </div>
                                      <ul className="product__item__pic__hover">
                                        <li>
                                          <Link to="/">
                                            <i className="fa fa-heart"></i>
                                          </Link>
                                        </li>

                                        <li>
                                          <Link to="/">
                                            <i className="fa fa-shopping-cart"></i>
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="product__discount__item__text">
                                      <span>{item.title}</span>
                                      <h5>
                                        <Link to="/">{item.title}</Link>
                                      </h5>
                                      <div className="product__item__price">
                                        {item.price}{" "}
                                        <span>{item.discountPrice}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div class="filter__item">
                <div class="row">
                  <div class="col-lg-4 col-md-2 d-flex">
                    <div class="filter__sort d-flex">
                      <span>Sort By</span>
                      <select className="form-select ms-4">
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                    <div class="ms-3 my-1 col-lg-4 col-md-2">
                      <div class="filter__found">
                        <h6>
                          <span>16</span> Products found
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                {data.map((item, index) => (
                  <div class="col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div class="product__item">
                      <div
                        class="product__item__pic set-bg"
                        style={{
                          backgroundImage: `url(${item.imageUrl})`,
                          backgroundSize: "cover",
                          repeat: "no-repeat",
                        }}
                      >
                        <ul class="product__item__pic__hover">
                          <li>
                            <Link to="/">
                              <i class="fa fa-heart"></i>
                            </Link>
                          </li>

                          <li>
                            <Link to="/">
                              <i class="fa fa-shopping-cart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="product__item__text">
                        <h6>
                          <Link to="/">{item.title}</Link>
                        </h6>
                        <h5>{item.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="product__pagination">
                <Link to="/">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">
                  <i class="fa fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
