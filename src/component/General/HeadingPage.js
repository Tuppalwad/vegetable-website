import React from "react";
import bannerImage from "../../asset/img/breadcrumb.jpg";

function HeadingPage(props) {
  return (
    <div className="my-3">
      {" "}
      <section
        className="breadcrumb-section set-bg"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          height: "200px",
        }}
      >
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{props.title1}</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">{props.title}</a>
                  <span className="text-white">{props.subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeadingPage;
