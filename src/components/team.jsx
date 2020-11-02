import React from "react";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import "./styles/team.css";

const Team = () => {
  return (
    <div id="team">
      <h2 className="text-center">Team</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 img-container ">
          <figure>
            <img src={team1} alt="Trulli" style={{ width: "100%" }} />
            <figcaption>James Roy</figcaption>
          </figure>
        </div>
        <div className="col-md-3  col-sm-6 img-container ">
          <figure>
            <img src={team2} alt="Trulli" style={{ width: "100%" }} />
            <figcaption>John Deol</figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6 img-container ">
          <figure>
            <img src={team3} alt="Trulli" style={{ width: "100%" }} />
            <figcaption>Edwin Cren</figcaption>
          </figure>
        </div>
        <div className="col-md-3 col-sm-6 img-container ">
          <figure>
            <img src={team4} alt="Trulli" style={{ width: "100%" }} />
            <figcaption>Lisaen Eddy</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Team;
