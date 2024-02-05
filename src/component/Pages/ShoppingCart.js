import React from "react";
import Header from "../General/Header";
import Navbar from "../General/Navbar";
import HeadingPage from "../General/HeadingPage";
import "../../css/ShopingCart.css";
import img1 from "../../asset/img/cart/cart-1.jpg";
import img2 from "../../asset/img/cart/cart-2.jpg";
import img3 from "../../asset/img/cart/cart-3.jpg";
import Footer from "../General/Footer";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    img: img1,
    name: "Vegetable’s Package",
    price: "$55.00",
    quantity: "1",
    total: "$110.00",
  },
  {
    id: 2,
    img: img2,
    name: "Fresh Garden Vegetable",
    price: "$39.00",
    quantity: "1",
    total: "$39.99",
  },
  {
    id: 3,
    img: img3,
    name: "Organic Bananas",
    price: "$69.00",
    quantity: "1",
    total: "$69.99",
  },
];
function ShoppingCart() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <HeadingPage
        title1="Shopping Cart"
        title="Home"
        subtitle="Cart"
      ></HeadingPage>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="shoping__cart__item">
                            <img src={item.img} alt="" />
                            <h5>{item.name}</h5>
                          </td>
                          <td className="shoping__cart__price">{item.price}</td>
                          <td className="shoping__cart__quantity">
                            <div className="quantity">
                              <div className="pro-qty">
                                <i
                                  className="fa fa-minus"
                                  aria-hidden="true"
                                ></i>
                                <input type="text" value="1" />
                                <i
                                  className="fa fa-plus"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                          </td>
                          <td className="shoping__cart__total">{item.total}</td>
                          <td className="shoping__cart__item__close">
                            <i
                              className="fa fa-trash deleteicon"
                              aria-hidden="true"
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns d-flex">
                <Link to="/" className="primary-btn  cart-btn">
                  CONTINUE SHOPPING
                </Link>
                <Link
                  to="/"
                  className="primary-btn ms-2 cart-btn cart-btn-right"
                >
                  <i className="fa fa-refresh" aria-hidden="true"></i>
                  Upadate Cart
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <Link to="/" className="primary-btn">
                  PROCEED TO CHECKOUT
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

export default ShoppingCart;
