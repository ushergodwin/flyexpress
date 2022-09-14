import React, { Fragment } from "react";
import Footer from "../componets/footer";
import Header from "../componets/header";

const Team = () => {
  const teamMembers = [
    {
      name: "KAGGWA  PETER",
      title: "CHAIRMAN",
      photo: "chairman.jpeg",
    },
    {
      name: "MUWONGE JULIUS",
      title: "VICE CHAIRMAN",
      photo: "vice-chairman.JPG",
    },
    {
      name: "KASOZI JOSEPHSON",
      title: "GENERAL SECRETARY",
      photo: "general-secretary.jpeg",
    },
    {
      name: "KIYAGA RECHARD",
      title: "VICE SECRETARY",
      photo: "vice-secretary.jpg",
    },
    {
      name: "RULAMIRA VOLTANCE",
      title: "WELFARE",
      photo: "welfare.jpeg",
    },
    {
      name: "NALUGAVU AISHA",
      title: "TREASURER",
      photo: "treasurer.jpeg",
    },
    {
      name: "ASABA AZIZ",
      title: "SECURITY",
      photo: "security.jpeg",
    },
    {
      name: "SSEBULIBA DERICK",
      title: "DESCIPLINE",
      photo: "discipline.jpeg",
    },
    {
      name: "WASSWA EDIRISA",
      title: "PUBLICITY",
      photo: "publicity.jpeg",
    },
  ];
  return (
    <Fragment>
      <Header active="our-team" />
      <img
        src={`imgs/team/team-banner.jpg`}
        className="img-fluid"
        alt="team banner"
      />
      <hr />
      <section className="container mt-3">
        <h5>Meet our team </h5>

        <div className="row mt-2">
          {teamMembers.map((team, i) => {
            return (
              <div className="col-md-4 mt-3" key={i}>
                <div className="card card-body h-100 shadow bl-card">
                  <img
                    src={`imgs/team/${team.photo}`}
                    alt={`${team.name}`}
                    className="card-img-top rounded"
                  />
                  <h4>{team.name}</h4>
                  <hr />
                  <h5>{team.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Team;
