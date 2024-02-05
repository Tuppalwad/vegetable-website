import React from "react";
import img1 from "../../asset/img/banner/banner-1.jpg";
import img2 from "../../asset/img/banner/banner-2.jpg";
import "../../css/style.css";
function Banner() {
  return (
    <section className="my-3" >
      <div className="container-sm  ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img
                  src={img1}
                  className="img-fluid"
                  style={{
                    resizeMode: "cover",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
