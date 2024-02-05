import React from "react";
import img1 from "../../asset/img/categories/cat-1.jpg";
import img2 from "../../asset/img/categories/cat-2.jpg";
import img3 from "../../asset/img/categories/cat-3.jpg";
import img4 from "../../asset/img/categories/cat-4.jpg";
import { Carousel } from "react-bootstrap"; // Import the Carousel component from react-bootstrap
import "../../css/Slider.css";
import { Link } from "react-router-dom";
const heroData = [
  {
    imageUrl: img1,
    title: "Fresh Fruit",
    price: "$5.99",
  },
  {
    imageUrl: img2,
    title: "Dried Fruit",
    price: "$3.99",
  },
  {
    imageUrl: img3,
    title: "Vegetables",
    price: "$2.49",
  },
  {
    imageUrl: img4,
    title: "Drink Fruits",
    price: "$1.99",
  },
];

function Slider() {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px (phone mode)
  console.log(isMobile);
  return (
    <section>
      <div className="container-sm">
        <Carousel>
          {heroData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-wrap">
                {isMobile ? (
                  <div className="col-12">
                    <div
                      className="categories__item set-bg"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                      <h5>
                        <Link to="/shop">{item.title}</Link>
                      </h5>
                    </div>
                  </div>
                ) : (
                  heroData.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div
                        className="categories__item set-bg"
                        style={{
                          backgroundImage: `url(${item.imageUrl})`,
                          margin: "10px", // Add margin for spacing
                        }}
                      >
                        <h5>
                          <Link to="/shop">{item.title}</Link>
                        </h5>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Slider;
