import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Footer from "../componets/footer";
import Header from "../componets/header";
import { sendMessage } from "../features/contactSlice";

const Contact = () => {
  const { status, message, success, error } = useSelector(
    (state) => state.contact
  );
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setMessage] = useState("");
  const toastId = React.useRef(null);

  useEffect(() => {
    document.title = "FLY EXPRESS TRAVELLERS | Contact Us";
    if (status === "loading") {
      toastId.current = toast.loading("sending message...");
    }

    if (success) {
      toast.dismiss();
      toast.success(message);
      document.getElementById("contactForm").reset();
    }

    if (error) {
      toast.dismiss();
      toast.error(message);
    }
  }, [dispatch, success, error, message, status]);

  const handleSendMessage = () => {
    const mss = {
      email,
      name,
      subject,
      body,
    };

    dispatch(sendMessage(mss));
  };

  return (
    <Fragment>
      {/* Contact us */}
      <Header active="contact" />
      <section className="container">
        <div className="d-flex justify-content-center mt-3">
          <h4 className="text-r mt-3 services">
            <span>CONTACT US TODAY</span>
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
              <form id="contactForm">
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="mb-3 w-100" htmlFor="name">
                      <input
                        type={`text`}
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Enter your full name"
                        onKeyUp={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label className="mb-3 w-100" htmlFor="email">
                      <input
                        type={`email`}
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Enter your email"
                        onKeyUp={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="w-100" htmlFor="subject">
                    <input
                      type={`text`}
                      name="subject"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Enter subject"
                      onKeyUp={(e) => setSubject(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="w-100">
                    <textarea
                      className="form-control"
                      placeholder="type your message here"
                      rows={5}
                      onKeyUp={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </label>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleSendMessage()}
                    id="submit-btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="container-fluid mt-3 mb-3">
        <iframe
          title="Fly Express Travellers Association"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.815745600046!2d32.47162001410682!3d0.06509206437526124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d85b7df570119%3A0xf6e453e5479d6154!2sFly%20express%20travellers!5e0!3m2!1sen!2sug!4v1658329265583!5m2!1sen!2sug"
          width={`100%`}
          height={450}
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <Footer />
      </section>
    </Fragment>
  );
};

export default Contact;
