import React, { Fragment, useEffect } from "react";
import Footer from "../componets/footer";
import Header from "../componets/header";

const About = () => {
  useEffect(() => {
    document.title = "FLY EXPRESS TRAVELLERS | About Us";
  }, []);
  return (
    <Fragment>
      <Header active="about" />
      <section className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src={`imgs/logo.png`}
              className="img-fluid rounded"
              alt="logo"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-dark font-weight-bold">Who Are We?</h2>
            <h5 className="ml-3 text-muted">
              <span className="text-dark">
                Fly Express Travellers Association{" "}
              </span>{" "}
              is a travel company in Uganda, employing over 20 full-time
              drivers, and empolyees in other departments. The company has 1
              year of experience working in transportation sector, having
              established the Head offices in Entebbe, Uganda in 2021. It has
              since been expanding its market share in the transportation
              services provision and aims at extending these services across
              East and Central Africa.
              <br />
              <p className="mt-5">
                <span className="text-dark">
                  {" "}
                  Fly Express Travellers Association{" "}
                </span>{" "}
                was founded in 2021 by Mr. Kagwa Peter with the vision of
                providing quality transportation services backed up with
                superior customer care and driving expertise. Our aim is to
                provide our clients, from largest companies to individuals, a
                one-step away center for their traveling needs.
              </p>
              <p className="mt-5">
                <b className="text-dark">Our Vision</b>
                <br />
                Our vision is to become a leading transportation services
                provider in East and Centra Africa
              </p>
              <p className="mt-5">
                <b className="text-dark">Mission</b>
                <br />
                At Fly Express Travellers Association, we aim at sustaining and
                reviving the customer trust, confirt and safetey by recruiting
                experienced drivers to enforce passangers interests.
              </p>
            </h5>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default About;
