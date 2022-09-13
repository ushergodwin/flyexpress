import React, { Fragment, useEffect } from "react";
import Header from "../componets/header";
import "../App.css";
import Slider from "../componets/slider";
import CountUp from "react-countup";
import Footer from "../componets/footer";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    document.title = "FLY EXPRESS TRAVELLERS | Home";
  }, []);

  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <Slider />

      <section className="container">
        <div className="mt-3 row">
          <div className="col-md-3 mt-3">
            <div className="card card-body shadow h-100 mb-3 bl-card">
              <h5 className="font-weight-bold text-bl">
                <i className="fas fa-chess-knight"></i>&nbsp; Transport
                Expertise
              </h5>
              <hr />
              <p>
                powering the local communities whilst Collaborating and
                cooperating with the local authorities.
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow h-100 mb-3 bl-card">
              <h5 className="font-weight-bold text-bl">
                <i className="fas fa-crown"></i>&nbsp; Client Satification
              </h5>
              <hr />
              <p>
                our services are offered with utmost professionalism, humility,
                respect and customer care.
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow h-100 mb-3 bl-card">
              <h5 className="font-weight-bold text-bl">
                <i className="fas fa-briefcase"></i>&nbsp; Reasonable Budget.
              </h5>
              <hr />
              <p>
                Best Service delivery with Internationally accepted standards at
                a reasonable cost.
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow h-100 bl-card">
              <h5 className="font-weight-bold text-bl">
                <i className="fas fa-eye"></i> &nbsp;24/7 hours support
              </h5>
              <hr />
              <p>
                Zero delays whilst operating in a Positive and safe environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-3 mb-3">
        {/* second row */}

        <div className="row align-items-center text-light">
          <div className="col-12 bg-app mt-2 mb-2">
            <h4 className="text-center mt-3">
              <i className="fas fa-car"></i>&nbsp;Need to travel?
            </h4>
            <p className="text-center">
              Fly Express Travellers Association is fully committed to fulfill
              your travel needs with most compitent and experienced drivers such
              that our services are offered with utmost professionalism,
              humility and customer care.
            </p>
            <div className="d-flex justify-content-center">
              <Link to={`/booking`} className="btn btn-outline-light mb-3">
                Book Your Seat Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* third row */}

      <hr />
      <section className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`imgs/logo.png`}
              className="img-fluid rounded"
              alt="logo"
            />
          </div>

          <div className="col-md-6">
            <h4 className="text-r">
              <u>Our Vision & Mission.</u>
            </h4>
            <h5 className="mt-2">
              <i className="fas fa-check-circle text-bl"></i>
              &nbsp;Vision.
            </h5>
            <p>
              Our vision is to become a leading transportation services provider
              in East and Centra Africa
            </p>
            <br />
            <hr />
            <br />
            <h5>
              <i className="fas fa-check-circle text-bl"></i>
              &nbsp;Mission.
            </h5>
            <p>
              At Fly Express Travellers Association, we aim at sustaining and
              reviving the customer trust, confirt and safetey by recruiting
              experienced drivers to enforce passangers interests.
            </p>
          </div>
        </div>

        {/* fourth row */}

        <div className="row mt-3">
          <div className="col-md-3 mt-3" id="services">
            <div className="card card-body shadow-lg text-muted font-weight-bold">
              <span style={{ fontSize: "40px" }}>
                <i className="fa fa-car text-bl"></i> &nbsp;
                <CountUp end={20} /> +
              </span>
              <p>
                Transportation <strong>Drone Cars</strong>
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow-lg text-muted font-weight-bold">
              <span style={{ fontSize: "40px" }}>
                <i className="fa fa-route text-bl"></i> &nbsp;
                <CountUp end={10} />+
              </span>
              <p>
                <strong>Routes </strong> Covered
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow-lg text-muted font-weight-bold">
              <span style={{ fontSize: "40px" }}>
                <i className="fa fa-award text-bl"></i> &nbsp;
                <CountUp end={500} />+
              </span>
              <p>
                <strong>Clients</strong> Satisfied
              </p>
            </div>
          </div>

          <div className="col-md-3 mt-3">
            <div className="card card-body shadow-lg text-muted font-weight-bold">
              <span style={{ fontSize: "40px" }}>
                <i className="fa fa-building text-bl"></i> &nbsp;
                <CountUp end={26} />+
              </span>
              <p>
                <strong>Big Businesses </strong> Satisfied
              </p>
            </div>
          </div>
        </div>

        {/* fifth row //services */}

        <div className="d-flex justify-content-center mt-3">
          <h4 className="text-r mt-3 services">
            <span>OUR SERVICES</span>
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mt-3">
            <div className="card card-body border-0">
              <div className="d-flex justify-content-center services">
                <div className="icon-box">
                  <span className="icon">
                    <i className="fa fa-car"></i>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center services">
                <h4 className="title">Trasportation</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card card-body border-0">
              <div className="d-flex justify-content-center services">
                <div className="icon-box">
                  <span className="icon">
                    <i className="fa fa-plane-arrival"></i>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center services">
                <h4 className="title">Airport Express</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card card-body border-0">
              <div className="d-flex justify-content-center services">
                <div className="icon-box">
                  <span className="icon">
                    <i className="fas fa-briefcase"></i>
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center services">
                <h4 className="title">Tour & Travel</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Contact us */}
        <div className="d-flex justify-content-center mt-3">
          <h4 className="text-r mt-3 services">
            <span>CONTACT</span>
          </h4>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mt-3">
            <div className="card card-body shadow">
              <div className="d-flex justify-content-center">
                <div className="box-dotted-icon">
                  <i className="fa-solid fa-location-dot text-bl"></i>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h4 className="text-dark font-weight-bold">Our Address</h4>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="text-muted font-weight-bold">
                  P.O Box 700204, Entebbe Main Post Office Building
                </h5>
              </div>
            </div>

            {/* Phone number and email */}
            <div className="row mt-3">
              <div className="col-md-6 mt-3">
                <div className="card card-body shadow h-100">
                  <div className="d-flex justify-content-center">
                    <div className="box-dotted-icon">
                      <i className="fa-solid fa-envelope text-bl"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4 className="text-dark font-weight-bold">Email</h4>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span className="text-muted font-weight-bold text-wrap">
                      flyexpresstravellers19@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-3">
                <div className="card card-body shadow h-100">
                  <div className="d-flex justify-content-center">
                    <div className="box-dotted-icon">
                      <i className="fa-solid fa-phone text-bl"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <h4 className="text-dark font-weight-bold">Call Us</h4>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span className="text-muted font-weight-bold">
                      +256 702 797 757 <br /> +256 753 281 285
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* end phone number and email */}
          </div>

          {/* Send message */}
          <div className="col-md-6 mt-3">
            <div className="card card-body shadow">
              <h5>Office Working Hours</h5>
              <div className="d-flex justify-content-between mt-1">
                <p>Monday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Tuesday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Wednesday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Thursday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Friday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Saturday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <p>Sunday</p>
                <p>
                  <i className="fa-solid fa-clock text-primary"></i> 8AM - 8PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
