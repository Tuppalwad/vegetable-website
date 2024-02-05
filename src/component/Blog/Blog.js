import React from "react";
import Navbar from "../General/Navbar";
import Footer from "../General/Footer";
import HeadingPage from "../General/HeadingPage";
import "../../css/blog.css";
import Header from "../General/Header";
import TopSerchbar from "../Home/TopSerchbar";
import img1 from "../../asset/img/blog/blog-1.jpg";
import img2 from "../../asset/img/blog/blog-2.jpg";
import img3 from "../../asset/img/blog/blog-3.jpg";
import { Link } from "react-router-dom";
const data = [
  {
    img: img1,
    title: "Cooking tips make cooking simple",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: img2,
    title: "6 ways to prepare breakfast for 30",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: img3,
    title: "Visit the clean farm in the US",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: img1,
    title: "Cooking tips make cooking simple",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: img2,
    title: "6 ways to prepare breakfast for 30",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: img3,
    title: "Visit the clean farm in the US",
    date: "May 4, 2019",
    comment: "5",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
];

function Blog() {
  return (
    <div>
      <Header />
      <Navbar />
      <TopSerchbar></TopSerchbar>
      <HeadingPage
        title1={"Blog"}
        title={"Home"}
        subtitle={"Blog"}
      ></HeadingPage>
      <div className="w-100 ">
        <section className="blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit" className="btn btn-primary">
                        <span className="icon_search"></span>
                      </button>
                    </form>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul className="list-unstyled">
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
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  {data.map((item, index) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                        <div className="blog__item">
                          <div className="blog__item__pic">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="blog__item__text">
                            <ul>
                              <li>
                                <i className="fa fa-calendar-o"></i> {item.date}
                              </li>
                              <li>
                                <i className="fa fa-comment-o"></i>{" "}
                                {item.comment}
                              </li>
                            </ul>
                            <h5>
                              <Link to="/">{item.title}</Link>
                            </h5>
                            <p>{item.content}</p>
                            <Link to="/" className="blog__btn btn ">
                              READ MORE{" "}
                              <span className="fa fa-long-arrow-right"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-lg-12">
                    <div className="product__pagination blog__pagination">
                      <Link to="/">1</Link>
                      <Link to="/">2</Link>
                      <Link to="/">3</Link>
                      <Link to="/">
                        <i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
