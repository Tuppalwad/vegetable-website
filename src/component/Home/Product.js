import React from "react";
import Slider from "react-slick";
import "../../css/Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const latestProducts = [
  {
    imageUrl: require("../../asset/img/categories/cat-1.jpg"),
    title: "Fresh Fruit",
    price: "$5.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-2.jpg"),
    title: "Dried Fruit",
    price: "$3.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-3.jpg"),
    title: "Vegetables",
    price: "$2.49",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-4.jpg"),
    title: "Drink Fruits",
    price: "$1.99",
  },
];

const topRatedProducts = [
  {
    imageUrl: require("../../asset/img/categories/cat-1.jpg"),
    title: "Organic Food",
    price: "$4.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-2.jpg"),
    title: "Healthy Nut",
    price: "$3.49",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-3.jpg"),
    title: "Fresh Salad",
    price: "$2.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-4.jpg"),
    title: "Smoothie",
    price: "$3.99",
  },
];

const reviewProducts = [
  {
    imageUrl: require("../../asset/img/categories/cat-1.jpg"),
    title: "Superfood",
    price: "$6.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-2.jpg"),
    title: "Herbal Tea",
    price: "$2.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-3.jpg"),
    title: "Fresh Juice",
    price: "$3.99",
  },
  {
    imageUrl: require("../../asset/img/categories/cat-4.jpg"),
    title: "Natural Snacks",
    price: "$1.99",
  },
];

function Product() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <span className="fa fa-angle-right"></span>,
    prevArrow: <span className="fa fa-angle-left"></span>,
  };

  return (
    <div className="container  ">
      <section className="latest-product spad">
        <div className="container " style={{ marginLeft: "60px" }}>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <Slider {...settings}>
                  {latestProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {topRatedProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {latestProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <Slider {...settings}>
                  {reviewProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {reviewProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {reviewProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Review Products</h4>
                <Slider {...settings}>
                  {latestProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {latestProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
                <Slider {...settings}>
                  {latestProducts.map((product, index) => (
                    <div className="latest-product__item" key={index}>
                      <div className="latest-product__item__pic">
                        <img src={product.imageUrl} alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>{product.title}</h6>
                        <span>{product.price}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
