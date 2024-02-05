import React from "react";
import logoimg from "../../asset/img/logo.png";
import "../../css/style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light  navbar-fixed-top navbar-light">
        <div className="container">
          <Link className="navbar-brand logodesktop logomobile" to="/">
            <img src={logoimg} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  <icon className="fa fa-envelope" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  hello@colorlib.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  |
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Free Shipping for all Order of $99
                </Link>
              </li>
            </ul>
            {/* social media icon hear  */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <icon className="fa fa-facebook" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <icon className="fa fa-twitter" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <icon className="fa fa-linkedin" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <icon className="fa fa-pinterest" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  |
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        English
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Hindi
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Marathi
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  |
                </Link>
              </li>
              {/* login icon hear */}
              <li className="nav-item d-flex">
                <Link className="nav-link" to="/register">
                  <span className="ms-1">
                    Register or
                  </span>
                </Link>
                <Link className="nav-link" to="/login">
                  <icon className="fa fa-user" aria-hidden="true"></icon>
                  <span className="ms-1"> Sign in</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas offcanvas-start" id="demo">
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/">
              <img src={logoimg} alt="logo" />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <nav className="navbar navbar-expand-sm navbar-light bg-white">
            <div className="container">
              <div
                className="d-flex flex-column"
                style={{ marginLeft: "30px" }}
              >
                <div>
                  <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item" style={{ marginLeft: "30px" }}>
                      <Link className="nav-link" to="/">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        style={{ marginLeft: "30px" }}
                      >
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: "30px" }}>
                      <Link className="nav-link " to="/">
                        |
                      </Link>
                    </li>
                    <li className="nav-item" style={{ marginLeft: "30px" }}>
                      <Link
                        className="nav-link "
                        style={{ font: "bold", fontWeight: "700" }}
                        to="/"
                      >
                        item: <span className="ms-1">$150.00</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="navbar-nav navItem mx-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link homeitem text-success text-bold"
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <Link className="nav-link homeitem" to="/Shop">
                        SHOP
                      </Link>
                    </li>
                    <hr />
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link homeitem"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        PAGES
                        <i
                          className="fa fa-angle-down ms-2"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link className="dropdown-item" to="/ProductDetail">
                            Shop Detail
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Shopcart">
                            Shoping Cart
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/BLogdetail">
                            Blog Detail
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <Link className="nav-link homeitem" to="/Blog">
                        BLOG
                      </Link>
                    </li>
                    <hr />
                    <li className="nav-item homeitem">
                      <Link className="nav-link" to="/Contact">
                        CONTACT
                      </Link>
                    </li>
                    <hr />
                  </ul>
                </div>
                <div>
                  <nav className="navbar navbar-expand-sm navbar-light d-sm-none">
                    <div
                      className="collapse navbar-collapse"
                      id="sidebarCollapse"
                    >
                      <ul className="navbar-nav flex-row justify-content-between">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <div className="dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                            >
                              English
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <Link className="dropdown-item" to="/">
                                  English
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/">
                                  Spanish
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="/">
                                  French
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <div className="container">
                    <div className="d-flex flex-column">
                      <ul className="navbar-nav flex-row justify-content-between">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            <i
                              className="fa fa-dribbble"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                      <ul className="nav-item my-3">
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            English
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="/">
                                English
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/">
                                Spanish
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                    <div className="">
                      <ul className="navbar-nav d-flex flex-column">
                        <li className="nav-item d-flex flex-row">
                          <Link
                            className="nav-link "
                            style={{ marginRight: "10px" }}
                            to="/"
                          >
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          <Link className="nav-link" to="/">
                            hello@colorlib.com
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            Free Shipping for all Orders of $99
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Header;
