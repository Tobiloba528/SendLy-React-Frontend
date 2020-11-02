import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";
import "./styles/homepage.css";
import pic from "../images/pic.jpg";
import Team from "./team";

class Homepage extends Component {
  state = {
    services: [
      "Provies fast and affordable shipmesnt of percels and commodity",
      "Whether you're sending across town or across the country, GIGL is here to serve you. GIGL offers delivery to the door to virtually every address in Nigeria.",
      "We have a national network and international delivery expertise to provide the high-level support required by corporate businesses.",
      "We can work in partnership with you to achieve the right delivery solutions that will convey positive outcomes to your e-Commerce business."
    ]
  };

  handleClick = () => {
    this.props.history.push("/register");
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/profile" />;
    return (
      <div id="homepage">
        <div id="home">
          <div className="text-center" id="content">
            <h1 className="text-light">
              Building a stressless World through Speedy and Perfect Delivery..
            </h1>
            <button className="btn btn-danger" onClick={this.handleClick}>
              Get Started
            </button>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeIn">
          <div id="hire">
            <div className="text-center">
              <h3>Have a percel/commodity to ship?</h3>
              <h6>
                Get a fast and afforadle courier service locally and
                Internationally.{" "}
              </h6>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body text-center">
                    <p className="card-text">
                      Need a courier services to percel/commodity to a local
                      destination.
                    </p>
                    <button
                      onClick={this.handleClick}
                      className="btn btn-danger"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body text-center">
                    <p className="card-text">
                      Need a courier services to percel/commodity to a
                      International destination..
                    </p>
                    <button
                      onClick={this.handleClick}
                      className="btn btn-danger"
                    >
                      Gst started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="row" style={{ padding: "50px" }} id="services">
          <div className="col-md-6 text-center" id="one">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutLeft"
            >
              <img src={pic} alt="logo" />
            </ScrollAnimation>
          </div>
          <div className="col-md-6">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutRight"
            >
              <h3 id="header">Services</h3>
              <ul>
                {this.state.services.map(service => (
                  <li key={this.state.services.indexOf(service)}>{service}</li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
        <Team />
      </div>
    );
  }
}

export default Homepage;
