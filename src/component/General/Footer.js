import React from "react";
import payment from "../../asset/img/payment-item.png";
import logo from "../../asset/img/logo.png";
import { Link } from "react-router-dom";
import "../../css/Fooder.css";

const Footer = () => {
  const datatime = new Date().getFullYear();
  return (
    <footer class="footer ">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="footer__about">
              <div class="footer__about__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className="list-unstyled my-3">
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div class="footer__widget">
              <h6>Useful Links</h6>
              <ul className="list-unstyled my-3">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">About Our Shop</Link>
                </li>
                <li>
                  <Link to="/">Secure Shopping</Link>
                </li>
                <li>
                  <Link to="/">Delivery infomation</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Our Sitemap</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/">Who We Are</Link>
                </li>
                <li>
                  <Link to="/">Our Services</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Innovation</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit" class="site-btn btn btn-success">
                  Subscribe
                </button>
              </form>
              <div class="footer__widget__social">
                <Link to="/">
                  <i class="fa fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i class="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i class="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i class="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="footer__copyright">
              <div class="footer__copyright__text">
                <p>
                  Copyright &copy; {datatime} All rights reserved | This
                  template is made with{" "}
                  <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <Link to="/">Colorlib</Link>
                </p>
              </div>
              <div class="footer__copyright__payment">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
