import React, { Fragment } from "react";
import "../App.css";
const Slider = () => {
  const gallary = [];
  const slideTab = [];
  for (let i = 3; i < 13; i++) {
    gallary.push(`g${i}.jpeg`);
    slideTab.push(i);
  }

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
          {slideTab.map((value, i) => {
            return (
              <li
                data-bs-target="#myCarousel"
                data-bs-slide-to={value}
                key={i}
              ></li>
            );
          })}
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
              src={`imgs/gallary/banner.jpg`}
              className="d-block w-100 img-fluid"
              alt="FlyExpress Team"
              height={500}
              width={100}
            />
          </div>
          {gallary.map((img, i) => {
            return (
              <div className="carousel-item" key={i}>
                <img
                  src={`imgs/gallary/${img}`}
                  className="d-block w-100 img-fluid"
                  alt="Fly Express"
                  height={500}
                  width={100}
                />
              </div>
            );
          })}
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
