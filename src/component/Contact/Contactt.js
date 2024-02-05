/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "../General/Header";
import Navbar from "../General/Navbar";
import HeadingPage from "../General/HeadingPage";
import "../../css/Contact.css";
import Footer from "../General/Footer";
function Contactt() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <HeadingPage
        title1="Contact"
        title="Home"
        subtitle="Contact"
      ></HeadingPage>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <i className="fa fa-phone icon_phone " aria-hidden="true"></i>
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <i
                  className="fa fa-map-marker icon_pin_alt"
                  aria-hidden="true"
                ></i>
                <h4>Address</h4>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <i
                  className="fa fa-clock-o icon_clock_alt"
                  aria-hidden="true"
                ></i>
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <i
                  className="fa fa-envelope icon_mail_alt"
                  aria-hidden="true"
                ></i>
                <h4>Email</h4>
                <p>hello@colorlib.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1438071122493!2d77.31657457490536!3d19.10134615117684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29b843e24ad1%3A0x9d07011a8c06834e!2sCidco%20Rd%2C%20Gopalchawdi%2C%20Nanded-Waghala%2C%20Maharashtra%20431603!5e0!3m2!1sen!2sin!4v1687182812181!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          aria-hidden="false"
        ></iframe>
        <div className="map-inside">
          <i className="icon_pin"></i>
          <div className="inside-widget">
            <h4>Cidco Nanded</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Leave Message</h2>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea placeholder="Your message"></textarea>
                <button type="submit" className="site-btn btn btn-success">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contactt;
