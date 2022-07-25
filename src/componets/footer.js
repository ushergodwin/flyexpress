import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const dd = new Date();
  const yy = dd.getFullYear();

  return (
    <Fragment>
      <section className="footer container-fluid bg-light mt-5 mb-3">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h4 className="text-dark font-weight-bold">
              Fly Express Travellers Association
            </h4>
            <p>
              P.O Box 700204, Entebbe Main Post Office Building, Entebbe Uganda
            </p>
            <br />
            <p>Phone: +256 702 797 757 / +256 753 281 285</p>
            <p>Email: flyexpresstravellers19@gmail.com</p>

            <p className="d-flex flex-lg-row flex-md-column justify-content-around">
              <a href="#!" className="app-link deco-none">
                <i className="fab fa-facebook" style={{ fontSize: "30px" }}></i>
              </a>
              <a href="#!" className="app-link deco-none">
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "40px" }}
                ></i>
              </a>
              <a href="#!" className="app-link deco-none">
                <i className="fab fa-twitter" style={{ fontSize: "30px" }}></i>
              </a>
              <a href="#!" className="app-link deco-none">
                <i className="fab fa-linkedin" style={{ fontSize: "30px" }}></i>
              </a>
            </p>
          </div>

          <div className="col-md-12 col-lg-2  mt-3">
            <h4 className="text-dark font-weight-bold">Useful Links</h4>
            <ul className="unstyled" style={{ listStyle: "none" }}>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <Link to={`/`} className="app-link">
                  &nbsp; Home
                </Link>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <Link to={`/about-us`} className="app-link">
                  &nbsp; About Us
                </Link>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <Link to={`#services`} className="app-link">
                  &nbsp; Services
                </Link>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <a href="#!" className="app-link">
                  &nbsp; Team
                </a>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <Link to={`/contact`} className="app-link">
                  &nbsp; Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-2 mt-3">
            <h4 className="text-dark font-weight-bold">Our Services</h4>
            <ul className="unstyled" style={{ listStyle: "none" }}>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <a href="#!" className="app-link">
                  &nbsp; Transportation
                </a>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <a href="#!" className="app-link">
                  &nbsp; Tour & Travel
                </a>
              </li>
              <li className="mt-3">
                <i className="fa-solid fa-chevron-right text-r"></i>
                <a href="#!" className="app-link">
                  &nbsp; Airport Express
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-4 mt-3">
            <h4 className="text-dark font-weight-bold">Our Newsletters</h4>
            <br />
            <p className="text-muted font-weight-bold">
              Stay updated about our developments and promotions
            </p>

            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your email"
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="reset" className="btn btn-danger">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <section className="copyright d-flex justify-content-center mt-3">
          <p className="text-muted font-weight-bold">
            &copy; 2021 - {yy} Fly Express Travellers Association. All Rights
            Reserved
          </p>
        </section>
      </section>
    </Fragment>
  );
};

export default Footer;
