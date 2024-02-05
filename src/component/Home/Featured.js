import React, { useEffect } from "react";
import "../../css/Feacture.css";
import $ from "jquery";
import img1 from "../../asset/img/categories/cat-1.jpg";
import img2 from "../../asset/img/categories/cat-2.jpg";
import img3 from "../../asset/img/categories/cat-3.jpg";
import img4 from "../../asset/img/categories/cat-4.jpg";
import mixitup from "mixitup"; // Import the mixitup library
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

function Featured() {
  useEffect(() => {
    $(window).on("load", function () {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");

      /*------------------
        Gallery filter
      --------------------*/
      $(".featured__controls li").on("click", function () {
        $(".featured__controls li").removeClass("active");
        $(this).addClass("active");

        // Get the filter value and apply the mixitup filter
        const filterValue = $(this).data("filter");
        mixer.filter(filterValue);
      });

      if ($(".featured__filter").length > 0) {
        var containerEl = document.querySelector(".featured__filter");
        var mixer = mixitup(containerEl);
      }
    });
  }, []); // Run the effect only once after the initial render

  return (
    <div>
      <section className="featured spad">
        <div className="container-sm">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {heroData.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mix" key={index}>
                <div className="featured__item">
                  <div
                    className="featured__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                    }}
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">{item.title}</a>
                    </h6>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
