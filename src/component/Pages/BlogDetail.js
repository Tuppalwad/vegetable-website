import React from "react";
import Navbar from "../General/Navbar";
import Header from "../General/Header";
import img1 from "../../asset/img/blog/details/details-pic.jpg";

import img5 from "../../asset/img/blog/blog-4.jpg";
import img6 from "../../asset/img/blog/blog-5.jpg";
import img7 from "../../asset/img/blog/blog-6.jpg";
import img8 from "../../asset/img/blog/sidebar/sr-1.jpg";
import img9 from "../../asset/img/blog/sidebar/sr-2.jpg";
import img10 from "../../asset/img/blog/sidebar/sr-3.jpg";
import bannerImage from "../../asset/img/breadcrumb.jpg";

import "../../css/BlogDetails.css";
import author from "../../asset/img/blog/details/details-author.jpg";
import Footer from "../General/Footer";
import { Link } from "react-router-dom";
function BlogDetail() {
  return (
    <>
      <Header />
      <Navbar />
      <section
        className="blog-details-hero set-bg"
        style={{
          backgroundImage: `url(${bannerImage})`,
          height: "200px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog__details__hero__text text-center ">
                <h2 className="text-white p-3">
                  The Moment You Need To Remove Garlic From The Menu
                </h2>
                <ul className="text-white text center">
                  <li>By Michael Scofield</li>
                  <li>January 14, 2019</li>
                  <li>8 Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <Link to="/">All</Link>
                    </li>
                    <li>
                      <Link to="/">Beauty (20)</Link>
                    </li>
                    <li>
                      <Link to="/">Food (5)</Link>
                    </li>
                    <li>
                      <Link to="/">Life Style (9)</Link>
                    </li>
                    <li>
                      <Link to="/">Travel (10)</Link>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    <Link to="/" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={img8} alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </Link>
                    <Link to="/" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={img9} alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </Link>
                    <Link to="/" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={img10} alt="" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    <Link to="/">Apple</Link>
                    <Link to="/">Beauty</Link>
                    <Link to="/">Vegetables</Link>
                    <Link to="/">Fruit</Link>
                    <Link to="/">Healthy Food</Link>
                    <Link to="/">Lifestyle</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
              <div className="blog__details__text">
                <img src={img1} className="img-fluid" alt="" />
                <p>
                  Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit
                  amet nisl tempus convallis quis ac lectus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar Link. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Proin eget tortor risus. Donec rutrum congue leo eget
                  malesuada. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                  quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p>
                <h3>
                  The corner window forms Link place within Link place that is
                  Link resting point within the large space.
                </h3>
                <p>
                  The study area is located at the back with Link view of the
                  vast nature. Together with the other buildings, Link congruent
                  story has been managed in which the whole has Link reinforcing
                  effect on the components. The use of materials seeks
                  connection to the main house, the adjacent stables
                </p>
              </div>
              <div className="blog__details__content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog__details__author">
                      <div className="blog__details__author__pic">
                        <img src={author} alt="" />
                      </div>
                      <div className="blog__details__author__text">
                        <h6>Michael Scofield</h6>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog__details__widget">
                      <ul>
                        <li>
                          <span>Categories:</span> Food
                        </li>
                        <li>
                          <span>Tags:</span> All, Trending, Cooking, Healthy
                          Food, Life Style
                        </li>
                      </ul>
                      <div className="blog__details__social">
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                        <Link to="/">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link to="/">
                          <i className="fa fa-envelope"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related-blog-title">
                <h2>Post You May Like</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img7} alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="/">Cooking tips make cooking simple</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img5} alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="/">6 ways to prepare breakfast for 30</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img6} alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="/">Visit the clean farm in the US</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default BlogDetail;
