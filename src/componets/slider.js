import React, { Fragment } from "react";
import "../App.css";
const Slider = () => {
  return (
    <Fragment>
      <div
        id="myCarousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={`imgs/drone-car.jpg`}
              className="d-block w-100 img-fluid"
              alt="Drone care"
              height={500}
              width={100}
            />
          </div>
          <div className="carousel-item active">
            <img
              src={`imgs/airport-express.jpg`}
              className="d-block w-100 img-fluid"
              alt="Express Care"
              height={500}
              width={100}
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src={`imgs/FB_IMG_16542461830457933.jpg`}
              className="d-block w-100"
              alt="express rental"
              height={500}
              width={100}
            />
          </div> */}
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </Fragment>
  );
};

export default Slider;
