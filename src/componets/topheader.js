import React, { Fragment } from "react";

const TopHeader = () => {
  return (
    <Fragment>
      <header className="container-fluid bg-r py-1">
        <section className="row">
          <div className="col-md-4">
            <h5>
              <i className="fa fa-clock"></i>
              &nbsp; Monday - Saturday 8am - 7pm
            </h5>
          </div>
          <div className="col-md-4">
            <h5>
              <i className="fa fa-book-open"></i> &nbsp;
              <a href="tel:+256702797757" className="deco-none">
                {" "}
                Traveling? Book Now
              </a>
            </h5>
          </div>
          <div className="col-md-4">
            <h5>
              <i className="fa fa-phone-alt"></i> &nbsp;
              <a href="tel:+256702797757" className="deco-none">
                {" "}
                Call us now: +256 702 797 757
              </a>
            </h5>
          </div>
        </section>
      </header>
    </Fragment>
  );
};

export default TopHeader;
