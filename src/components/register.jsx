import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import Form from "./common/form";
import { register } from "../services/userService";
import auth from '../services/authService';
import "./styles/register.css";
import { toast } from "react-toastify";
import Title from "./title";

class Register extends Form {
  state = {
    data: { firstname: "", lastname: "", email: "", phone: "", password: "" }
  };

  handleClick = () => {
    this.props.history.push("/login");
  };

  schema = {
    firstname: Joi.string()
      .min(3)
      .required()
      .label("First name"),
    lastname: Joi.string().label("Last Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    phone: Joi.string()
      .required()
      .min(11)
      .label("Mobile Number"),
    password: Joi.string()
      .min(6)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/profile";
      //  console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/profile" />;
    const { firstname, lastname, email, phone, password } = this.state.data;
    return (
      <form id="register-form" onSubmit={this.handleSubmit}>
        <Title title="Register" />
        <div id="inner-register">
          <h1>Register</h1>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="type"
              className="form-control"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "block" }}
          >
            Submit
          </button>
          <div style={{ float: "right" }}>
            <p style={{ display: "inline" }}>Already have an account? </p>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
