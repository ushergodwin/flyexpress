import React, { Fragment, useEffect } from "react";
import Footer from "../componets/footer";
import Header from "../componets/header";

const WhyUs = () => {
  useEffect(() => {
    document.title = "FLY EXPRESS TRAVELLERS | Why Us?";
  }, []);
  return (
    <Fragment>
      <Header active="why-us" />
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
            <h2 className="text-dark font-weight-bold">
              Why Choose to travel with us?
            </h2>
            <h5 className="ml-3 text-muted">
              <p className="mt-5">
                <b className="text-dark">Services</b>
                <br />
                The satisfaction of our clients is our priority. We ensure that
                all of our staff, whether it is our drivers or our mechanical
                engineers, are knowledgable and are readily available to answer
                any queries our clients may have.
              </p>
              <p className="mt-5">
                <b className="text-dark">Quality</b>
                <br />
                We are a registred and certified company, having experienced
                drivers and mechanical engineers that ensure that each vehical
                passes a number of stringent quality tests before it is put on
                the road to transport our passangers.
              </p>
              <p className="mt-5">
                <b className="text-dark">Price</b>
                <br />
                As a fast growing transportation company,our facilities and
                efficient processes enable us to offer high quality and safe
                travels at competitive prices.
              </p>
              <p className="mt-5">
                <b className="text-dark">Zero Delays</b>
                <br />
                We know that time is an important factor in everyones day-to-day
                activities. With experienced drivers, specific origins and
                destinations, you will always reach in time to whereever you are
                going.
              </p>
            </h5>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default WhyUs;
