import React, { Fragment, useEffect } from "react";
import Header from "../componets/header";

const Booking = () => {
  useEffect(() => {
    document.title = "FLY EXPRESS TRAVELLERS | Book a Seat";
  }, []);
  return (
    <Fragment>
      <Header active="booking" />
      <section
        className="bg-app"
        style={{ position: "fixed", height: "100%", width: "100%" }}
      >
        <div className="d-flex justify-content-center mt-3 text-light font-weight-bold">
          <h1>Coming Soon...</h1>
        </div>
        <div className="d-flex justify-content-center mt-3 text-light font-weight-bold">
          <div className="mb-3">
            <span className="spinner-border"></span>
          </div>
        </div>
        <div className="d-flex justify-content-center text-light font-weight-bold">
          <img
            src={`imgs/logo.png`}
            className="img-fluid img-rounded-50"
            alt="logo"
          />
        </div>
        <div className="d-flex justify-content-center mt-3 text-light font-weight-bold">
          <div className="mb-3">
            <a href="tel:+256702797757" className="app-link deco-none">
              <i className="fa fa-phone"></i> &nbsp;Call Us Now
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Booking;
