import React from "react";
import logoimg from "../../asset/img/logo.png";
import "../../css/style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" container-sm">
      <nav className="navbar navbar-expand-sm bg-white  navbar-fixed-top navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand logodesktop" to="/">
            <img src={logoimg} alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav navItem mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link homeitem  text-success text-bold"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link homeitem" to="/Shop">
                  SHOP
                </Link>
              </li>
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
                  <i className="fa fa-angle-down ms-2" aria-hidden="true"></i>
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
              <li className="nav-item">
                <Link className="nav-link homeitem" to="/Blog">
                  BLOG
                </Link>
              </li>

              <li className="nav-item homeitem">
                <Link className="nav-link" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* social media icon hear  */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {/* love icon hear */}
                  <icon className="fa fa-heart" aria-hidden="true"></icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <icon
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                  ></icon>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  |
                </Link>
              </li>
              {/* login icon hear */}
              <li className="nav-item" style={{ marginLeft: "10px" }}>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
