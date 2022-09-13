import React, { Fragment } from "react";
import TopHeader from "./topheader";
import "../App.css";
import { Link } from "react-router-dom";
const Header = (props = {}) => {
  return (
    <Fragment>
      <TopHeader />
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-app shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            <img
              src={`imgs/logo.png`}
              className="img-fluid img-rounded-50"
              alt="logo"
            />
            &nbsp;FLY EXPRESS <span className="d-lg">TRAVELLERS</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={`/about-us`}
                  className={`nav-link ${
                    props.active === "about" ? "active underline" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/contact-us`}
                  className={`nav-link ${
                    props.active === "contact" ? "active underline" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/booking`}
                  className={`nav-link ${
                    props.active === "booking" ? "active underline" : ""
                  }`}
                >
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/why-us`}
                  className={`nav-link ${
                    props.active === "why-us" ? "active underline" : ""
                  }`}
                >
                  Why Us?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={`/our-team`}
                  className={`nav-link ${
                    props.active === "our-team" ? "active underline" : ""
                  }`}
                >
                  Our Team
                </Link>
              </li>
            </ul>
            <span className="navbar-text text-light font-weight-bold">
              Fly Express Travellers,{" "}
              <em>with you from origin to destination.</em>
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
